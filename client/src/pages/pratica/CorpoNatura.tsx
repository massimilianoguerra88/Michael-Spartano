import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export default function CorpoNatura() {
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
            Corpo Natura
          </h1>
          <p className="text-lg font-serif text-foreground/80 italic">
            Ascolto e osservazione
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
              Nasce dall'ascolto del corpo<br />
              come primo luogo di relazione<br />
              con lo spazio<br />
              e con ciò che chiamiamo natura.
            </p>

            <p>
              Il corpo viene accolto così com'è:<br />
              disteso, presente,<br />
              non chiamato a fare.
            </p>

            <p>
              Intorno ad esso,<br />
              elementi raccolti nel luogo:<br />
              foglie, rami, semi, tracce vegetali<br />
              vengono disposti sul perimetro del corpo<br />
              attraverso un gesto semplice e condiviso.
            </p>

            <p>
              Prende forma una sagoma temporanea:<br />
              qualcosa che emerge,<br />
              resta per un tempo,<br />
              e può dissolversi.
            </p>

            <p>
              La pratica è nata con i bambini,<br />
              dove il sapere corporeo è diretto,<br />
              senza mediazione.
            </p>

            <p>
              Con gli adulti<br />
              diventa uno spazio di sospensione del fare,<br />
              un ritorno a una percezione non separata.
            </p>

            <p>
              Può essere attivato come gesto intimo,<br />
              come pratica condivisa<br />
              o come azione aperta nello spazio.
            </p>

            <p>
              Rimane essenziale.<br />
              Non spettacolare.
            </p>
          </div>
        </motion.div>

      </main>
    </motion.div>
  );
}
