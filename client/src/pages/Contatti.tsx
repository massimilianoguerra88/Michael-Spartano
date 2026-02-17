import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export default function Contatti() {
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
          className="space-y-12 text-left text-base font-serif text-foreground/80 leading-relaxed"
        >
          <div className="space-y-1">
            <p>Per incontri individuali,</p>
            <p>performance, laboratori</p>
            <p>o proposte di collaborazione,</p>
            <p>puoi scrivermi qui:</p>
            <a href="mailto:spartanomichael@gmail.com" className="hover:text-foreground transition-colors underline decoration-1 underline-offset-4 block mt-2">
              spartanomichael@gmail.com
            </a>
          </div>

          <div className="space-y-1">
            <p>Oppure, se preferisci,</p>
            <p>WhatsApp</p>
            <p className="mt-2">+39 3206074072</p>
          </div>

          <div className="space-y-1">
            <p>Alcune tracce del lavoro</p>
            <p>si trovano anche qui:</p>
            <p>Instagram</p>
            <a href="https://instagram.com/michael_spartano" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline decoration-1 underline-offset-4 block mt-2">
              @michael_spartano
            </a>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}
