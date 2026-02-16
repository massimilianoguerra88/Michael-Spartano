import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export default function MichaelSpartano() {
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
          className="space-y-16 text-left"
        >
          <p className="text-xl md:text-2xl font-serif text-foreground/80">
            Non sono interessato al tuo nome.
          </p>

          <div className="space-y-2">
            <p className="text-xl md:text-2xl font-serif text-foreground/80 leading-relaxed">
              L’attenzione<br />
              va a ciò che sei,<br />
              che sono.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
