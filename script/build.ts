import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, mkdir, copyFile } from "fs/promises";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

const spaRoutes = [
  "michael-spartano",
  "opere",
  "opere/performance",
  "opere/disegni",
  "opere/land-art",
  "opere/oggetti",
  "opere/poesie",
  "pratica",
  "pratica/non-dualismo",
  "pratica/non-dualismo/sessione-individuale",
  "pratica/non-dualismo/seminario",
  "pratica/non-dualismo/meditazione",
  "pratica/arte",
  "pratica/arte/il-fiore-della-vita",
  "pratica/arte/corpo-natura",
  "pratica/arte/tracce-di-fango",
  "pratica/arte/dipingere-naturalmente",
  "pratica/arte/stone-balancing",
  "pratica/musica",
  "educazione",
  "spazio-sorgente",
  "contatti",
  "news",
  "news/la-voce-della-natura",
];

async function generateSpaRoutes() {
  for (const route of spaRoutes) {
    await mkdir(`dist/public/${route}`, { recursive: true });
    await copyFile("dist/public/index.html", `dist/public/${route}/index.html`);
  }
  console.log(`✓ SPA routes: created ${spaRoutes.length} route directories`);
}

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  await generateSpaRoutes();

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
