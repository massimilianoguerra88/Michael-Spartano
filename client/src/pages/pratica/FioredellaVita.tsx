import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export default function FioredellaVita() {
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
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-normal text-foreground/90">Il Fiore della Vita</h1>
            <p className="italic text-lg">Un disegno sacro</p>
          </div>

          <div className="space-y-1">
            <p>Il Fiore della Vita è una geometria sacra</p>
            <p>primordiale.</p>
            <p>Una forma semplice e potente,</p>
            <p>presente in antiche culture</p>
            <p>come matrice di perfezione.</p>
          </div>

          <div className="space-y-1">
            <p>In questa pratica</p>
            <p>partiamo dal disegno.</p>
          </div>

          <div className="space-y-1">
            <p>Cerchio dopo cerchio,</p>
            <p>il gesto si lento,</p>
            <p>preciso,</p>
            <p>ripetuto.</p>
          </div>

          <div className="space-y-1">
            <p>La mano segue la forma</p>
            <p>e l'attenzione si raccoglie.</p>
            <p>Il Fiore si rivela un'esperienza di presenza,</p>
            <p>ascolto</p>
            <p>e pazienza,</p>
            <p>in cui può emergere</p>
            <p>un naturale processo di guarigione.</p>
          </div>

          <div className="space-y-1">
            <p>Sono proposte sessioni</p>
            <p>individuali o di gruppo,</p>
            <p>in cui il disegno diventa</p>
            <p>uno spazio sacro di condivisione.</p>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}
