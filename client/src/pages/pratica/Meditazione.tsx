import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export default function Meditazione() {
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

      <main className="flex-1 w-full pt-28 md:pt-48 px-6 md:px-12 pb-16 md:pb-32 max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-2xl md:text-3xl font-normal font-serif text-foreground/90 mb-2">
            Meditazione
          </h1>
          <p className="text-lg font-serif text-foreground/80 italic">
            Uno spazio di presenza
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
              Questa proposta è rivolta<br />
              a chi desidera avvicinarsi<br />
              a una dimensione non-duale<br />
              attraverso la meditazione.
            </p>

            <p>
              Non viene richiesta<br />
              alcuna conoscenza precedente.
            </p>

            <p>
              La meditazione non è una tecnica<br />
              per raggiungere uno stato particolare.
            </p>

            <p>
              È uno stare semplice<br />
              con ciò che è presente,<br />
              così com'è.
            </p>

            <p>
              Attraverso il silenzio,<br />
              l'ascolto<br />
              e indicazioni essenziali,<br />
              l'attenzione può posarsi<br />
              senza sforzo.
            </p>

            <p>
              Non c'è nulla da ottenere<br />
              né da migliorare.
            </p>

            <p>
              La meditazione diventa<br />
              uno spazio di familiarità<br />
              con ciò che osserva<br />
              l'esperienza accadere.
            </p>

            <p>
              Questa pratica può essere<br />
              un primo incontro,<br />
              un tempo di ascolto<br />
              o semplicemente<br />
              uno spazio di quiete condivisa.
            </p>

            <p>
              La meditazione può essere proposta<br />
              in forma individuale<br />
              o condivisa.
            </p>
          </div>
        </motion.div>

      </main>
    </motion.div>
  );
}
