import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export default function Educazione() {
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
            Educazione
          </h1>
          <p className="text-lg font-serif text-foreground/80 italic">
            Arte, natura e consapevolezza
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
              Lavoro con bambini e ragazzi<br />
              attraverso esperienze artistiche e sonore,<br />
              spesso radicate nella natura,<br />
              ma capaci di portarne la presenza anche negli spazi chiusi.
            </p>

            <p>
              La natura non è uno sfondo,<br />
              ma il luogo in cui l'esperienza accade.
            </p>

            <p>
              Le proposte nascono<br />
              dal contatto diretto con la materia:<br />
              terra, foglie, acqua, sassi, colore.
            </p>

            <p>
              Il corpo è sempre coinvolto.<br />
              Non come strumento da guidare,<br />
              ma come luogo di scoperta e osservazione.
            </p>

            <p>
              Attraverso il gesto,<br />
              il ritmo<br />
              e il silenzio<br />
              i bambini approfondiscono<br />
              la relazione<br />
              con ciò che li circonda<br />
              e con ciò che sentono.
            </p>

            <p>
              Brevi momenti di meditazione<br />
              vengono proposti in modo semplice,<br />
              come spazio di ascolto<br />
              e familiarità con il respiro.
            </p>

            <p>
              Non si cerca il risultato.<br />
              Si coltiva l'esperienza,<br />
              come una terra fertile<br />
              da cui qualcosa può nascere.
            </p>

            <p>
              Ogni incontro diventa<br />
              fonte di meraviglia,<br />
              di attenzione<br />
              e di libertà espressiva.
            </p>

            <p>
              Le attività possono svolgersi<br />
              in italiano o in lingua inglese,<br />
              in contesti educativi,<br />
              associativi<br />
              o all'aperto.
            </p>
          </div>
        </motion.div>

      </main>
    </motion.div>
  );
}
