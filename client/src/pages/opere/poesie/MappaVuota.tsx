import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function MappaVuota() {
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
            Mappa vuota
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
              Come posso esser andato così lontano<br />
              Sembra un luogo così strano
            </p>

            <p>
              Quanti passi invano
            </p>

            <p>
              Ho guardato dietro<br />
              Ora vedo, non mi sono mai spostato
            </p>

            <p>
              Ecco la verità,<br />
              Come un ricordo che fu annebbiato<br />
              da nubi illusorie davanti al cielo stellato
            </p>

            <p>
              Una mappa vuota<br />
              svela la consapevolezza<br />
              Un tesoro che non serve cercare<br />
              Non ti affannare
            </p>

            <p>
              E' qui, sei a casa.
            </p>
          </div>
        </motion.div>

      </main>
    </motion.div>
  );
}
