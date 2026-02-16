import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export default function MichaelSpartano() {
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

      <main className="flex-1 flex flex-col items-start justify-start px-6 md:px-12 max-w-2xl pt-48">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="space-y-12 text-left"
        >
          <p className="text-base md:text-lg font-serif text-foreground/80">
            Non sono interessato al tuo nome.
          </p>

          <div className="space-y-2">
            <p className="text-base md:text-lg font-serif text-foreground/80 leading-relaxed">
              L’attenzione<br />
              va a ciò che sei,<br />
              che sono.
            </p>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}
