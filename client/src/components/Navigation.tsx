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
    <nav className="w-full py-8 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 z-50 relative bg-background/80 backdrop-blur-sm">
      <Link href="/">
        <a className="text-xl md:text-2xl font-serif tracking-tight hover:opacity-70 transition-opacity">
          Michael Spartano
        </a>
      </Link>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base font-light tracking-wide text-muted-foreground">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <a
              className={cn(
                "hover:text-foreground transition-colors duration-300 relative group",
                location === link.href && "text-foreground"
              )}
            >
              {link.label}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-[1px] bg-foreground transition-all duration-300 group-hover:w-full",
                location === link.href && "w-full"
              )} />
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}
