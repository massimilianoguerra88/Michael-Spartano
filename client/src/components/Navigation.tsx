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
      { href: "/opere/land-art", label: "Land Art" },
      { href: "/opere/oggetti", label: "Oggetti" },
      { href: "/opere/poesie", label: "Poesie" },
    ]
  },
  { 
    href: "/pratica", 
    label: "Pratica",
    subLinks: [
      { 
        href: "/pratica/non-dualismo", 
        label: "Non-Dualismo",
        subLinks: [
          { href: "/pratica/non-dualismo/sessione-individuale", label: "Sessione individuale" },
          { href: "/pratica/non-dualismo/seminario", label: "Seminario" },
          { href: "/pratica/non-dualismo/meditazione", label: "Meditazione" }
        ]
      },
      { 
        href: "/pratica/arte", 
        label: "Arte",
        subLinks: [
          { href: "/pratica/arte/il-fiore-della-vita", label: "Il Fiore della Vita" },
          { href: "/pratica/arte/corpo-natura", label: "Corpo Natura" },
          { href: "/pratica/arte/tracce-di-fango", label: "Tracce di fango" },
          { href: "/pratica/arte/dipingere-naturalmente", label: "Dipingere Naturalmente" },
          { href: "/pratica/arte/stone-balancing", label: "Stone balancing" }
        ]
      },
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
  const [hoveredSubLink, setHoveredSubLink] = useState<string | null>(null);

  // Check if we are on the home page (dark background)
  const isHome = location === "/";

  return (
    <nav className={cn(
      "w-full py-8 px-6 md:px-12 flex flex-col md:flex-row items-baseline justify-between gap-6 z-50 fixed top-0 left-0 w-full transition-all duration-300",
      isHome ? "text-white" : "text-black bg-white"
    )}>
      <Link href="/michael-spartano">
        <a className="flex flex-col items-center hover:opacity-70 transition-opacity group relative">
          <span className="text-base md:text-[16px] font-serif tracking-tight leading-none">
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

      <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2 text-sm md:text-base font-normal tracking-wide">
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
                      <div 
                        key={subLink.href}
                        className="relative w-full flex flex-col items-center"
                        onMouseEnter={() => setHoveredSubLink(subLink.href)}
                        onMouseLeave={() => setHoveredSubLink(null)}
                      >
                        <Link href={subLink.href}>
                          <a className={cn(
                            "whitespace-nowrap hover:opacity-100 transition-all duration-200 text-sm tracking-wide block py-1",
                            isHome ? "font-light" : "font-light hover:font-normal",
                            (location === subLink.href || hoveredSubLink === subLink.href)
                              ? "opacity-100 font-bold border-b-2 border-current pb-0.5 inline-block" 
                              : "opacity-80 hover:translate-x-1 inline-block"
                          )}>
                            {subLink.label}
                          </a>
                        </Link>

                        {/* Nested Dropdown */}
                        <AnimatePresence>
                          {subLink.subLinks && hoveredSubLink === subLink.href && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-[calc(100%+0.5rem)] top-0 pt-0 min-w-[160px] flex flex-col items-start gap-2 z-[70]"
                            >
                              <div className={cn(
                                "flex flex-col items-start gap-2 pl-4",
                                isHome ? "text-white" : "text-black"
                              )}>
                                {subLink.subLinks.map((nested) => (
                                  <Link key={nested.href} href={nested.href}>
                                    <a className={cn(
                                      "whitespace-nowrap hover:opacity-100 transition-all duration-200 text-sm tracking-wide block py-1",
                                      isHome ? "font-light" : "font-light hover:font-normal",
                                      location === nested.href 
                                        ? "opacity-100 font-bold border-b-2 border-current pb-0.5" 
                                        : "opacity-80 hover:translate-x-1"
                                    )}>
                                      {nested.label}
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </nav>
  );
}
