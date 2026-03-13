import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

export default function Performance() {
  const [paroleCaduteOpen, setParoleCaduteOpen] = useState(false);

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

      <main className="flex-1 w-full pt-48 px-6 md:px-12 pb-32 max-w-7xl mx-auto">
        
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
          className="max-w-xl"
        >
          <ul className="space-y-6">
            <motion.li
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
              <button 
                onClick={() => setParoleCaduteOpen(!paroleCaduteOpen)}
                className="font-serif text-lg text-foreground/80 hover:text-foreground transition-colors duration-300 cursor-pointer text-left"
                data-testid="link-performance-0"
              >
                <span className="mr-3">·</span>Parole cadute
              </button>

              <AnimatePresence>
                {paroleCaduteOpen && (
                  <motion.ul
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="ml-8 mt-4 space-y-4 overflow-hidden"
                  >
                    <li>
                      <Link href="/opere/performance/parole-cadute/sei-senza-volto">
                        <a className="font-serif text-lg text-foreground/80 hover:text-foreground transition-colors duration-300 cursor-pointer" data-testid="link-sei-senza-volto">
                          <span className="mr-3">·</span>Sei senza volto – e tutti i volti
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
        </motion.div>

      </main>
    </motion.div>
  );
}
