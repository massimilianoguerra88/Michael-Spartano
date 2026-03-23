import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import img1 from "@/assets/images/1.jpg";
import img2 from "@/assets/images/2.jpg";
import img3 from "@/assets/images/3.jpg";

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

      <main className="flex-1 w-full pt-28 md:pt-48 px-6 md:px-12 pb-16 md:pb-32 max-w-7xl mx-auto">
        
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-2xl md:text-3xl font-normal font-serif text-foreground/90 mb-2">
            Bagno di suoni e parole
          </h1>
          <p className="text-lg font-serif text-foreground/80 italic">
            La voce della natura
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          
          {/* Text Column (Left Half) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full text-left"
          >
            <div className="space-y-8 font-serif text-base text-foreground/80 leading-relaxed">
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

          {/* Images Column (Right Half) - 3 photos in 2 columns */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="flex-1 w-full grid grid-cols-2 gap-2 md:gap-4 mt-1 md:mt-[6px]"
          >
            <div className="aspect-[3/4] relative overflow-hidden bg-foreground/5 rounded-sm">
              <img 
                src={img1} 
                alt="Sessione musicale 1" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] relative overflow-hidden bg-foreground/5 rounded-sm">
              <img 
                src={img2} 
                alt="Sessione musicale 2" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[3/4] relative overflow-hidden bg-foreground/5 rounded-sm">
              <img 
                src={img3} 
                alt="Sessione musicale 3" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </motion.div>

        </div>
      </main>
    </motion.div>
  );
}
