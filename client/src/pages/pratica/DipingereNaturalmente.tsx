import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export default function DipingereNaturalmente() {
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
          <h1 className="text-2xl md:text-3xl font-normal font-serif text-foreground/90 mb-2">
            Dipingere Naturalmente
          </h1>
          <p className="text-lg font-serif text-foreground/80 italic">
            La natura dipinge attraverso il corpo
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full text-left"
          >
            <div className="space-y-8 font-serif text-base text-foreground/80 leading-relaxed">
              <p>
                Un'esperienza che intreccia<br />
                arte, sostenibilità e consapevolezza.
              </p>

              <p>
                Pigmenti naturali, estratti da frutta,<br />
                verdura e foglie,<br />
                diventano strumenti di espressione intuitiva.
              </p>

              <p>
                Il corpo si fa tramite<br />
                e lascia emergere segni essenziali,<br />
                liberi da intenzione<br />
                e da risultato.
              </p>

              <p>
                La pratica apre uno spazio<br />
                di sperimentazione e meraviglia,<br />
                una lentezza in cui il gesto<br />
                incontra la semplicità della natura<br />
                e ne ascolta le infinite possibilità.
              </p>

              <p>
                È un po' come avvicinarsi<br />
                alla porta di casa.
              </p>

              <p>
                Quella senza muri,<br />
                senza idee.
              </p>
            </div>
          </motion.div>

        </div>
      </main>
    </motion.div>
  );
}
