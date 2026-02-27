import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export default function Seminario() {
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
            Seminario
          </h1>
          <p className="text-lg font-serif text-foreground/80 italic">
            Seminari di presenza e indagine condivisa
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
              I seminari di Non-Dualismo nascono<br />
              dallo stesso spazio di ascolto<br />
              delle sessioni individuali<br />
              e si aprono alla dimensione del gruppo.
            </p>

            <p>
              Non hanno un metodo da seguire<br />
              né un risultato da raggiungere.
            </p>

            <p>
              Sono uno spazio condiviso di attenzione<br />
              al momento presente<br />
              e a ciò che può accadere<br />
              quando più persone si incontrano<br />
              nella stessa indagine.
            </p>

            <p>
              Attraverso il silenzio,<br />
              la condivisione di parole<br />
              ed esercizi mirati,<br />
              l'attenzione viene riportata<br />
              a ciò che crediamo di cercare,
            </p>

            <p>
              ma che è già qui,<br />
              da sempre.
            </p>

            <p>
              Nel gruppo<br />
              diventa evidente<br />
              come non ci sia qualcuno che fa qualcosa,<br />
              ma un'unica coscienza<br />
              che si riconosce<br />
              attraverso molte forme.
            </p>

            <p>
              In questo spazio condiviso<br />
              può emergere con chiarezza<br />
              come la sofferenza nasca<br />
              dal senso di separazione.
            </p>

            <p>
              Essere liberi dal concetto di "me"<br />
              significa essere liberi<br />
              dalla sofferenza che nasce<br />
              dall'idea di essere separati.
            </p>

            <p>
              La libertà non è un'esperienza speciale.<br />
              È ciò che resta<br />
              quando l'identificazione si scioglie.
            </p>

            <p>
              I seminari possono essere organizzati<br />
              da gruppi di persone<br />
              che desiderano incontrarsi<br />
              in questo spazio di indagine,
            </p>

            <p>
              oppure da strutture, associazioni<br />
              o contesti che sentono il desiderio<br />
              di ospitare un tempo condiviso<br />
              di ascolto e presenza.
            </p>
          </div>
        </motion.div>

      </main>
    </motion.div>
  );
}
