import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export default function SpazioSorgente() {
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
          className="max-w-2xl w-full text-center font-serif text-foreground/80 leading-relaxed text-lg md:text-xl space-y-12"
        >
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-normal">Spazio Sorgente</h1>
            <p className="italic text-xl">Incontri nell’Uno</p>
          </div>

          <div className="space-y-1">
            <p>Questo non è un percorso.</p>
            <p>Non ha una forma, non ha tappe, né una meta.</p>
            <p>Gli incontri online non seguiranno una frequenza prestabilita,</p>
            <p>né avranno una durata definita.</p>
            <p>Potranno essere a distanza di settimane o mesi.</p>
            <p>Ogni volta, il gruppo riceverà un messaggio con il giorno e l’orario di inizio.</p>
          </div>

          <div className="space-y-1">
            <p>Non ci sarà un programma.</p>
            <p>Ciò che accade, accade.</p>
          </div>

          <div className="space-y-1">
            <p>Potrà esserci silenzio.</p>
            <p>Potrà sorgere una condivisione di parole, esperienze, domande.</p>
            <p>A volte potranno esserci esercizi o una meditazione guidata.</p>
            <p>A volte, semplicemente, staremo.</p>
          </div>

          <div className="space-y-1">
            <p>Tutto avverrà in totale libertà.</p>
            <p>La partecipazione non è obbligatoria.</p>
            <p>Ogni incontro è a donazione libera.</p>
          </div>

          <div className="space-y-1">
            <p>Se senti di farne parte, sei il benvenuto a casa.</p>
            <p>Dove sei da sempre, perché non c’è nulla da raggiungere.</p>
          </div>

          <div className="space-y-1">
            <p>Se desideri ricevere il messaggio per i prossimi incontri</p>
            <p>e far parte del gruppo WhatsApp Spazio Sorgente,</p>
            <p>puoi scrivermi qui:</p>
            <p className="font-sans font-medium mt-2">3206074072</p>
          </div>

          <div className="pt-8 space-y-1">
            <p>Con Gioia,</p>
            <p>Michael</p>
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}
