import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function ParoleCadute() {
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

      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-32 md:py-40">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl w-full text-center font-serif text-foreground/80 leading-relaxed text-base space-y-12"
        >
          <div className="text-left mb-8">
            <Link href="/opere/performance">
              <a className="font-serif text-sm text-foreground/50 hover:text-foreground/80 transition-colors duration-300 cursor-pointer">← Performance</a>
            </Link>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-normal">Parole cadute</h1>
          </div>

          <div className="space-y-1">
            <p>"Parole Cadute" è un progetto che attraversa i confini tra arte relazionale, performance e meditazione pubblica. Al centro vi è la ricerca dell'essere come spazio condiviso, il riconoscimento della non-dualità tra chi osserva e chi è osservato. Ogni incontro, ogni parola, ogni gesto diventa occasione di dissoluzione del confine.</p>
          </div>

          <div className="space-y-1">
            <p>La frase "Sei senza volto – e tutti i volti" non è uno slogan, ma una soglia percettiva: invita chi la incontra a riconoscersi oltre quell'immagine allo specchio. In questo spazio, l'artista non interpreta un personaggio e non rappresenta nulla.</p>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}
