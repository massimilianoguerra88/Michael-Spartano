import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export default function TracceDiFango() {
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
            Tracce di Fango
          </h1>
          <p className="text-lg font-serif text-foreground/80 italic">
            Materia e gesto
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
              Un incontro con la terra, da vicino.<br />
              In un suo stato spesso evitato.
            </p>

            <p>
              Il fango, materiale primordiale,<br />
              diventa superficie e strumento insieme.
            </p>

            <p>
              Con le mani<br />
              o con un pennello,<br />
              si tracciano segni semplici,<br />
              diretti.
            </p>

            <p>
              Non si disegna per rappresentare.<br />
              Si lascia una traccia.
            </p>

            <p>
              Il corpo entra in relazione con la materia,<br />
              e la materia risponde.
            </p>

            <p>
              Ciò che emerge<br />
              può restare nel tempo,<br />
              seccandosi e trasformandosi,<br />
              oppure sgretolarsi lentamente.
            </p>

            <p>
              Non è importante ciò che rimane.<br />
              È importante ciò che è accaduto.
            </p>

            <p>
              La pratica può essere proposta<br />
              a bambini e adulti,<br />
              in forma individuale<br />
              o condivisa.
            </p>

            <p>
              Rimane essenziale.<br />
              Alla terra.
            </p>
          </div>
        </motion.div>

      </main>
    </motion.div>
  );
}
