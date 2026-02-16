import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const links = [
  { href: "/opere", label: "Opere" },
  { href: "/pratica", label: "Pratica" },
  { href: "/educazione", label: "Educazione" },
  { href: "/spazio-sorgente", label: "Spazio Sorgente" },
  { href: "/contatti", label: "Contatti" },
];

export function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="w-full py-8 px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 z-50 fixed top-0 left-0 w-full text-white mix-blend-difference">
      <Link href="/michael-spartano">
        <a className="flex flex-col items-center hover:opacity-70 transition-opacity group">
          <span className="text-xl md:text-2xl font-serif tracking-tight">
            Michael Spartano
          </span>
          <span className="text-sm font-serif italic opacity-80 mt-1">
            è solo un nome
          </span>
        </a>
      </Link>

      <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm md:text-base font-light tracking-wide opacity-90">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <a
              className={cn(
                "hover:opacity-100 transition-opacity duration-300 relative group opacity-80",
                location === link.href && "opacity-100 font-normal"
              )}
            >
              {link.label}
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}
