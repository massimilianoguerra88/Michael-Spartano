import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export default function Contatti() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="relative z-50">
         <Navigation />
      </div>

      <main className="flex-1 flex flex-col items-start justify-center px-12 md:px-24 lg:px-32 max-w-4xl pt-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12 text-left text-lg md:text-xl font-serif text-foreground/80 leading-relaxed"
        >
          <div>
            <p>Per incontri individuali,</p>
            <p>performance, laboratori</p>
            <p>o proposte di collaborazione,</p>
            <p>puoi scrivermi qui:</p>
            <a href="mailto:spartanomichael@gmail.com" className="hover:text-foreground transition-colors underline decoration-1 underline-offset-4">
              spartanomichael@gmail.com
            </a>
          </div>

          <div>
            <p>Oppure, se preferisci,</p>
            <p>WhatsApp</p>
            <p>+39 3206074072</p>
          </div>

          <div>
            <p>Alcune tracce del lavoro</p>
            <p>si trovano anche qui:</p>
            <p>Instagram</p>
            <a href="https://instagram.com/michael_spartano" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors underline decoration-1 underline-offset-4">
              @michael_spartano
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
