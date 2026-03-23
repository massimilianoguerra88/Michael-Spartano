import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

export default function Performance() {
  const [paroleCaduteOpen, setParoleCaduteOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setParoleCaduteOpen(true);
  };

  const handleMouseLeave = () => {
    const t = setTimeout(() => setParoleCaduteOpen(false), 300);
    setHoverTimeout(t);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen bg-background text-foreground flex flex-col"
    >
      <div className="relative z-50">
        <Navigation />
      </div>

      <main className="flex-1 w-full pt-28 md:pt-48 px-6 md:px-12 pb-16 md:pb-32 max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-2xl md:text-3xl font-normal font-serif text-foreground/90">
            Performance
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          {/* Desktop layout: list + side submenu in a row */}
          <div className="flex flex-row items-start gap-16">
            <ul className="space-y-6">
              {/* Parole cadute */}
              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              >
                <div
                  className="cursor-pointer select-none"
                  data-testid="link-performance-0"
                  onClick={() => setParoleCaduteOpen(o => !o)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="font-serif text-lg transition-colors duration-300">
                    <span className={`mr-3 ${paroleCaduteOpen ? 'text-foreground' : 'text-foreground/80'}`}>·</span>
                    <span className={`${paroleCaduteOpen ? 'text-foreground underline underline-offset-4' : 'text-foreground/80 hover:text-foreground'}`}>
                      Parole cadute
                    </span>
                  </span>
                </div>

                {/* Mobile-only submenu (appears below) */}
                <AnimatePresence>
                  {paroleCaduteOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="mt-4 ml-5 space-y-3 md:hidden"
                    >
                      <li>
                        <Link href="/opere/performance/parole-cadute/sei-senza-volto">
                          <a className="font-serif text-base text-foreground/80 hover:text-foreground transition-colors duration-300 cursor-pointer" data-testid="link-sei-senza-volto-mobile">
                            Sei senza volto – e tutti i volti
                          </a>
                        </Link>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>

              <motion.li
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                <Link href="/opere/performance/dal-due-all-uno">
                  <a className="font-serif text-lg text-foreground/80 hover:text-foreground transition-colors duration-300 cursor-pointer" data-testid="link-performance-1">
                    <span className="mr-3">·</span>Dal due all'Uno
                  </a>
                </Link>
              </motion.li>
            </ul>

            {/* Desktop-only submenu (appears to the right) */}
            <AnimatePresence>
              {paroleCaduteOpen && (
                <motion.ul
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="hidden md:block space-y-4 pt-[2px]"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <li>
                    <Link href="/opere/performance/parole-cadute/sei-senza-volto">
                      <a className="font-serif text-lg text-foreground/80 hover:text-foreground transition-colors duration-300 cursor-pointer" data-testid="link-sei-senza-volto">
                        Sei senza volto – e tutti i volti
                      </a>
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

      </main>
    </motion.div>
  );
}
