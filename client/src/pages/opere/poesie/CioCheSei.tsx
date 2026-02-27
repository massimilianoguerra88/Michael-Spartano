import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function CioCheSei() {
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
          <Link href="/opere/poesie">
            <a className="font-serif text-sm text-foreground/50 hover:text-foreground/80 transition-colors duration-300 cursor-pointer mb-6 inline-block">← Poesie</a>
          </Link>
          <h1 className="text-2xl md:text-3xl font-normal font-serif text-foreground/90">
            Ciò che sei
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
              E' stato scordato<br />
              Quando il corpo è nato, hai dimenticato<br />
              Un nome è nato, ma non lo sei mai stato
            </p>

            <p>
              Affogato in un mare di credenze e idee<br />
              soffocato dalle mani degli attori sulle sedie<br />
              hai dimenticato ciò che sei
            </p>

            <p>
              Senza forma né odore, colore o sapore<br />
              Questo è ciò che sei: Amore
            </p>

            <p>
              Io e gli altri: non c'è, figliuolo<br />
              Qui ci sei solo tu, ma non sei solo<br />
              Non temere, non sei solo, sei ogni cosa che guardi<br />
              Nessun lenzuolo<br />
              Sei il nulla e il tutto<br />
              Uno con l'assoluto
            </p>

            <p>
              Sei parte della vita meravigliosa<br />
              Quando non lo sembra, non temere, e non resisterle<br />
              affidati e si risolverà ogni cosa
            </p>
          </div>
        </motion.div>

      </main>
    </motion.div>
  );
}
