import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function DalDueAllUno() {
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
          <Link href="/opere/performance">
            <a className="font-serif text-sm text-foreground/50 hover:text-foreground/80 transition-colors duration-300 cursor-pointer mb-6 inline-block">← Performance</a>
          </Link>
          <h1 className="text-2xl md:text-3xl font-normal font-serif text-foreground/90">
            Dal Due all'Uno
          </h1>
          <p className="font-serif text-base text-foreground/60 italic mt-2">Pratica performativa</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-xl text-left"
        >
          <div className="space-y-8 font-serif text-base text-foreground/80 leading-relaxed">
              <p>
                "Dal Due all'Uno" è un'esperienza<br />
                sul superamento dell'apparente separazione tra le forme.
              </p>

              <p>
                L'esperienza si svolge<br />
                in uno spazio delimitato da teli leggeri,<br />
                all'aperto o al chiuso,<br />
                spesso in luoghi pubblici o naturali.
              </p>

              <p>
                I partecipanti si siedono<br />
                in silenzio<br />
                di fronte all'artista.
              </p>

              <p>
                Al centro del tavolino<br />
                vengono posizionati<br />
                due elementi naturali.
              </p>

              <p>
                Da qui la performance ha inizio.
              </p>

              <p>
                Si apre una dimensione<br />
                di silenzio e osservazione.
              </p>

              <p>
                In questo spazio<br />
                può emergere ogni cosa:<br />
                parole,<br />
                sensazioni,<br />
                emozioni,<br />
                movimenti.
              </p>
          </div>
        </motion.div>

      </main>
    </motion.div>
  );
}
