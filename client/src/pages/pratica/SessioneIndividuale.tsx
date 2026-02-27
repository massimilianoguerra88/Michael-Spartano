import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export default function SessioneIndividuale() {
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
            Sessione Individuale
          </h1>
          <p className="text-lg font-serif text-foreground/80 italic">
            Incontri di presenza e indagine
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-xl text-left"
        >
          <div className="space-y-8 font-serif text-base text-foreground/80 leading-relaxed">
            <p>
              Questi incontri non hanno un metodo da seguire<br />
              né un risultato da raggiungere.
            </p>

            <p>
              Sono uno spazio di attenzione<br />
              al momento presente<br />
              e a ciò che può accadere.
            </p>

            <p>
              Attraverso il silenzio, la condivisione di parole<br />
              ed esercizi mirati, l'attenzione viene riportata<br />
              a ciò che credi di cercare,
            </p>

            <p>
              ma che è già qui, da sempre.
            </p>

            <p>
              Non qualcuno che fa qualcosa,<br />
              ma un'unica coscienza<br />
              che si incontra e si riconosce.
            </p>

            <p>
              In questo spazio<br />
              può diventare evidente<br />
              come la sofferenza nasca<br />
              dal senso di separazione.
            </p>

            <p>
              Sei ogni cosa che guardi.
            </p>

            <p>
              Non sei ciò che appare: corpo, mente, pensieri.<br />
              Sei ciò che osserva le esperienze accadere.
            </p>

            <p>
              Quando questa visione si chiarisce,<br />
              il peso del "me" si allenta.
            </p>

            <p>
              Ciò che rimane<br />
              è una libertà semplice,<br />
              non personale.
            </p>

            <p>
              Essere libertà<br />
              significa essere liberi<br />
              dall'idea di un "me" separato.
            </p>

            <p>
              Sono proposti incontri individuali,<br />
              in presenza oppure online.
            </p>

            <p>
              È possibile avere un primo approccio gratuito,<br />
              come spazio di ascolto<br />
              e di conoscenza reciproca.
            </p>
          </div>
        </motion.div>

      </main>
    </motion.div>
  );
}
