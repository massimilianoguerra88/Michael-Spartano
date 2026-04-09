import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function LaVoceDellaNatura() {
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
          <Link href="/news">
            <a className="font-serif text-sm text-foreground/50 hover:text-foreground/80 transition-colors duration-300 cursor-pointer mb-6 inline-block">← News</a>
          </Link>
          <h1 className="text-2xl md:text-3xl font-normal font-serif text-foreground/90">
            La voce della natura
          </h1>
          <p className="text-lg font-serif italic text-foreground/75 mt-1">
            Bagno di Suoni e parole
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
              Una sessione di immersione sonora guidata dalla voce, da elementi naturali e da strumenti armonici come lira pentatonica, piramide di cristallo, handpan tongue drum ed altri.<br />
              Il suono diventa uno spazio di rilassamento profondo e di riconnessione con il silenzio.
            </p>
            <p>
              Aperto a tutti, grandi e piccoli.<br />
              Adulto: 20€<br />
              Bimbo: 5€
            </p>
            <p>
              Info/conferma di partecipazione:<br />
              spartanomichael@gmail.com
            </p>
          </div>
        </motion.div>

      </main>
    </motion.div>
  );
}
