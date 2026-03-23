import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function Innatura() {
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
          <Link href="/opere/poesie">
            <a className="font-serif text-sm text-foreground/50 hover:text-foreground/80 transition-colors duration-300 cursor-pointer mb-6 inline-block">← Poesie</a>
          </Link>
          <h1 className="text-2xl md:text-3xl font-normal font-serif text-foreground/90">
            Innatura
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-xl text-left"
        >
          <div className="space-y-8 font-serif text-base text-foreground/80 leading-relaxed">
            <p>
              Tra i saluti degli alberi,<br />
              e le voci dell'acqua,<br />
              cammina dal due all'Uno
            </p>

            <p>
              Sempre più dentro<br />
              Sempre più indietro<br />
              Sempre più ovunque<br />
              E da nessuna parte
            </p>

            <p>
              Un cielo guarda,<br />
              ed una terra sorregge<br />
              Una forma di nessuno<br />
              che appare passeggiare
            </p>

            <p>
              Tra i saluti degli alberi,<br />
              e le voci dell'acqua.
            </p>
          </div>
        </motion.div>

      </main>
    </motion.div>
  );
}
