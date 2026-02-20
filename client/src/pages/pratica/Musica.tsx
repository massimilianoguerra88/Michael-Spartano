import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export default function Musica() {
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
        
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-2xl md:text-3xl font-bold font-sans text-foreground/90 mb-1">
            Bagno di suoni e parole
          </h1>
          <p className="text-lg md:text-xl font-sans text-foreground/80 italic">
            La voce della natura
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-32 lg:gap-48 items-start">
          
          {/* Text Column (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex-shrink-0 w-full md:w-80 text-left"
          >
            <div className="space-y-8 font-sans text-base md:text-lg text-foreground/80 leading-relaxed">
              <p>
                Un incontro di vibrazioni,<br />
                silenzi<br />
                <br />
                e poesia.
              </p>
              
              <p>
                Strumenti armonici<br />
                e voci<br />
                in dialogo con elementi naturali.
              </p>
              
              <p>
                Sono proposte sessioni<br />
                individuali o di gruppo,<br />
                in cui il suono sorge<br />
                nel silenzio<br />
                e genera risonanze interiori.
              </p>
            </div>
          </motion.div>

          {/* Images Column (Right) - 2 photos with space */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
          >
            <div className="aspect-[1/2] max-h-[70vh] bg-foreground/5 rounded-sm flex items-center justify-center text-sm text-foreground/40 italic">
              Spazio foto 1
            </div>
            <div className="aspect-[1/2] max-h-[70vh] bg-foreground/5 rounded-sm flex items-center justify-center text-sm text-foreground/40 italic">
              Spazio foto 2
            </div>
          </motion.div>

        </div>
      </main>
    </motion.div>
  );
}
