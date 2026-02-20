import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { 
    href: "/opere", 
    label: "Opere",
    subLinks: [
      { href: "/opere/performance", label: "Performance" },
      { href: "/opere/disegni", label: "Disegni" },
      { href: "/opere/poesie", label: "Poesie" },
      { href: "/opere/oggetti", label: "Oggetti" },
    ]
  },
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

  // Check if we are on the home page (dark background)
  const isHome = location === "/";

  return (
    <nav className={cn(
      "w-full py-8 px-6 md:px-12 flex flex-col md:flex-row items-baseline justify-between gap-6 z-50 fixed top-0 left-0 w-full transition-all duration-300",
      isHome ? "text-white mix-blend-difference" : "text-black bg-white"
    )}>
      <Link href="/michael-spartano">
        <a className="flex flex-col items-center hover:opacity-70 transition-opacity group relative">
          <span className="text-[18px] md:text-[20px] font-serif tracking-tight leading-none">
            Michael Spartano
          </span>
          <span className="text-sm font-serif italic opacity-80 mt-1 absolute top-full left-1/2 -translate-x-1/2 whitespace-nowrap">
            è solo un nome
          </span>
        </a>
      </Link>

      {!isHome && (
        <Link href="/">
          <a className="hidden md:block absolute left-1/2 -translate-x-1/2 text-base font-light tracking-wide hover:opacity-100 transition-opacity duration-300 opacity-80 top-8 py-2">
            Home
          </a>
        </Link>
      )}

      <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm md:text-base font-light tracking-wide opacity-100">
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
                  "hover:opacity-100 transition-opacity duration-300 relative group opacity-100 block py-2",
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
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 min-w-[160px] flex flex-col items-center gap-2 z-[60]"
                >
                  <div 
                    className={cn(
                      "pt-4 flex flex-col items-center gap-2 min-w-[180px]",
                      isHome ? "text-white" : "text-black"
                    )}
                  >
                    {link.subLinks.map((subLink) => (
                      <Link key={subLink.href} href={subLink.href}>
                        <a className={cn(
                          "whitespace-nowrap hover:opacity-100 transition-all duration-200 text-sm tracking-wide",
                          isHome ? "font-light" : "font-light hover:font-normal",
                          location === subLink.href 
                            ? "opacity-100 font-bold border-b-2 border-current pb-0.5" 
                            : "opacity-80 hover:translate-x-1"
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
