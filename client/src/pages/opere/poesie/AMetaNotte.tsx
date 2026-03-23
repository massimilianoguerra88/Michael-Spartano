import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Link } from "wouter";

export default function AMetaNotte() {
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
          <Link href="/opere/poesie">
            <a className="font-serif text-sm text-foreground/50 hover:text-foreground/80 transition-colors duration-300 cursor-pointer mb-6 inline-block">← Poesie</a>
          </Link>
          <h1 className="text-2xl md:text-3xl font-normal font-serif text-foreground/90">
            A metà notte
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-xl text-left"
        >
          <div className="space-y-8 font-serif text-base text-foreground/80 leading-relaxed">
            <p>
              Occhi aperti<br />
              Ho creato l'universo<br />
              Ne scrivo qualche verso
            </p>

            <p>
              Alle quattro è stato<br />
              e non più mi addormento<br />
              Un tormento
            </p>

            <p>
              Ti immagino riposare<br />
              col pigiama nero<br />
              Sono girato verso l'altro lato del letto<br />
              All'alba ti avvicini<br />
              con la testa sul mio petto
            </p>

            <p>
              Una domanda sorge<br />
              Potrà mai accadere di nuovo?<br />
              Come un pulcino, dopo l'uovo
            </p>

            <p>
              Immagini che non esistono
            </p>

            <p>
              Sulla soglia del presente<br />
              Ricordi che bussano<br />
              Un sorriso comunque è nato<br />
              Così mi sono addormentato
            </p>
          </div>
        </motion.div>

      </main>
    </motion.div>
  );
}
