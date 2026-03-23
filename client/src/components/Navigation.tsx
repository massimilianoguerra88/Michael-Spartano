import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);
  const [expandedMobileNested, setExpandedMobileNested] = useState<string | null>(null);

  const isHome = location === "/";

  useEffect(() => {
    setMobileOpen(false);
    setExpandedMobile(null);
    setExpandedMobileNested(null);
  }, [location]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setExpandedMobile(null);
    setExpandedMobileNested(null);
  };

  const toggleMobileSection = (href: string) => {
    setExpandedMobile(prev => prev === href ? null : href);
    setExpandedMobileNested(null);
  };

  const toggleMobileNested = (href: string) => {
    setExpandedMobileNested(prev => prev === href ? null : href);
  };

  return (
    <>
      <nav className={cn(
        "w-full py-8 px-6 md:px-12 flex flex-row items-center justify-between gap-6 z-[110] fixed top-0 left-0 transition-all duration-300",
        isHome && !mobileOpen ? "text-white" : "text-black bg-white"
      )}>
        <Link href="/michael-spartano">
          <a className="flex flex-col items-center hover:opacity-70 transition-opacity group relative">
            <span className="text-[18px] font-serif tracking-tight leading-none">
              Michael Spartano
            </span>
            <span className="text-[16px] font-serif italic opacity-80 mt-1 absolute top-full left-1/2 -translate-x-1/2 whitespace-nowrap">
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

        {/* Desktop nav */}
        <div className="hidden md:flex flex-wrap justify-end gap-x-6 gap-y-2 text-sm md:text-base font-normal tracking-wide">
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

        {/* Hamburger button — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 z-[110]"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Apri menu"
        >
          <span className={cn(
            "block w-6 h-px transition-all duration-300 origin-center",
            isHome && !mobileOpen ? "bg-white" : "bg-black",
            mobileOpen && "rotate-45 translate-y-[6px]"
          )} />
          <span className={cn(
            "block w-6 h-px transition-all duration-300",
            isHome && !mobileOpen ? "bg-white" : "bg-black",
            mobileOpen && "opacity-0"
          )} />
          <span className={cn(
            "block w-6 h-px transition-all duration-300 origin-center",
            isHome && !mobileOpen ? "bg-white" : "bg-black",
            mobileOpen && "-rotate-45 -translate-y-[6px]"
          )} />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col md:hidden overflow-y-auto"
          >
            <div className="px-8 pt-28 pb-16 flex flex-col gap-0">
              <Link href="/">
                <a
                  onClick={closeMobile}
                  className="font-serif text-xl tracking-wide py-4 border-b border-black/10 block text-black/70 hover:text-black transition-colors"
                >
                  Home
                </a>
              </Link>

              {links.map((link) => (
                <div key={link.href}>
                  {link.subLinks ? (
                    <>
                      <button
                        onClick={() => toggleMobileSection(link.href)}
                        className="w-full text-left font-serif text-xl tracking-wide py-4 border-b border-black/10 flex justify-between items-center text-black"
                      >
                        <span>{link.label}</span>
                        <span className={cn(
                          "text-lg transition-transform duration-200",
                          expandedMobile === link.href ? "rotate-45" : ""
                        )}>+</span>
                      </button>

                      <AnimatePresence>
                        {expandedMobile === link.href && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-5 pb-2 flex flex-col">
                              {link.subLinks.map((subLink) => (
                                <div key={subLink.href}>
                                  {subLink.subLinks ? (
                                    <>
                                      <button
                                        onClick={() => toggleMobileNested(subLink.href)}
                                        className="w-full text-left font-serif text-base tracking-wide py-3 border-b border-black/5 flex justify-between items-center text-black/80"
                                      >
                                        <span>{subLink.label}</span>
                                        <span className={cn(
                                          "text-base transition-transform duration-200",
                                          expandedMobileNested === subLink.href ? "rotate-45" : ""
                                        )}>+</span>
                                      </button>

                                      <AnimatePresence>
                                        {expandedMobileNested === subLink.href && (
                                          <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                          >
                                            <div className="pl-5 flex flex-col">
                                              {subLink.subLinks.map((nested) => (
                                                <Link key={nested.href} href={nested.href}>
                                                  <a
                                                    onClick={closeMobile}
                                                    className="font-serif text-sm tracking-wide py-2.5 border-b border-black/5 block text-black/70 hover:text-black transition-colors"
                                                  >
                                                    {nested.label}
                                                  </a>
                                                </Link>
                                              ))}
                                            </div>
                                          </motion.div>
                                        )}
                                      </AnimatePresence>
                                    </>
                                  ) : (
                                    <Link href={subLink.href}>
                                      <a
                                        onClick={closeMobile}
                                        className="font-serif text-base tracking-wide py-3 border-b border-black/5 block text-black/80 hover:text-black transition-colors"
                                      >
                                        {subLink.label}
                                      </a>
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={link.href}>
                      <a
                        onClick={closeMobile}
                        className="font-serif text-xl tracking-wide py-4 border-b border-black/10 block text-black hover:opacity-70 transition-opacity"
                      >
                        {link.label}
                      </a>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
