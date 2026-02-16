import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/opere", label: "Opere" },
  { 
    href: "/pratica", 
    label: "Pratica",
    subLinks: [
      { href: "/pratica/non-dualismo", label: "Non-Dualismo" },
      { href: "/pratica/arte", label: "Arte" },
      { href: "/pratica/musica", label: "Musica" },
    ]
  },
  { href: "/educazione", label: "Educazione" },
  { href: "/spazio-sorgente", label: "Spazio Sorgente" },
  { href: "/contatti", label: "Contatti" },
];

export function Navigation() {
  const [location] = useLocation();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

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

      {location !== "/" && (
        <Link href="/">
          <a className="hidden md:block absolute left-1/2 -translate-x-1/2 text-sm md:text-base font-light tracking-wide hover:opacity-100 transition-opacity duration-300 opacity-80">
            Home
          </a>
        </Link>
      )}

      <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm md:text-base font-light tracking-wide opacity-90">
        {links.map((link) => (
          <div 
            key={link.href} 
            className="relative"
            onMouseEnter={() => setHoveredLink(link.href)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link href={link.href}>
              <a
                className={cn(
                  "hover:opacity-100 transition-opacity duration-300 relative group opacity-80 block py-2",
                  location.startsWith(link.href) && "opacity-100 font-normal"
                )}
              >
                {link.label}
              </a>
            </Link>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {link.subLinks && hoveredLink === link.href && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 min-w-[140px] flex flex-col items-center gap-2"
                >
                  <div className="bg-background/90 backdrop-blur-sm p-4 rounded-sm border border-border/10 shadow-lg flex flex-col items-center gap-3">
                    {link.subLinks.map((subLink) => (
                      <Link key={subLink.href} href={subLink.href}>
                        <a className={cn(
                          "whitespace-nowrap hover:opacity-100 transition-opacity duration-200 opacity-70 text-sm",
                          location === subLink.href && "opacity-100 font-normal underline decoration-1 underline-offset-4"
                        )}>
                          {subLink.label}
                        </a>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </nav>
  );
}
