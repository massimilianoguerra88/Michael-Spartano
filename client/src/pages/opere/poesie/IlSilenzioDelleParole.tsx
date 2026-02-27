import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export default function IlSilenzioDelleParole() {
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
            Il silenzio delle parole
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
              Il silenzio cade,<br />
              e accade.
            </p>

            <p>
              Ti raggiunge piano,<br />
              con gentilezza.
            </p>

            <p>
              Come alcune parole<br />
              che ti toccano<br />
              e si sciolgono dentro.
            </p>

            <p>
              E restano parte di te,<br />
              nel silenzio di ogni giorno.
            </p>
          </div>
        </motion.div>

      </main>
    </motion.div>
  );
}
