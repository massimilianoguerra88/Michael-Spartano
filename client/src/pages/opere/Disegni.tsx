import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import imgCaratteristiche from "@/assets/images/disegni/caratteristiche_del_corpo.jpg";
import imgIoSonoTe from "@/assets/images/disegni/io_sono_te.jpg";
import imgGabbia from "@/assets/images/disegni/la_gabbia_del_me.jpg";
import imgAbbracciacolori from "@/assets/images/disegni/abbracciacolori.jpg";
import imgNelleMani from "@/assets/images/disegni/nelle_mani_della_vita.jpg";
import imgSurrendering from "@/assets/images/disegni/surrendering.jpg";
import imgVitaAttraverso from "@/assets/images/disegni/vita_attraverso.jpg";

const artworks = [
  { id: 1, title: "Nelle mani della vita", img: imgNelleMani },
  { id: 2, title: "Vita attraverso", img: imgVitaAttraverso },
  { id: 3, title: "Surrendering", img: imgSurrendering },
  { id: 4, title: "Io sono te", img: imgIoSonoTe },
  { id: 5, title: "Caratteristiche del corpo", img: imgCaratteristiche },
  { id: 6, title: "La gabbia del 'me'", img: imgGabbia },
  { id: 7, title: "Abbracciacolori", img: imgAbbracciacolori },
];

export default function Disegni() {
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

      <main className="flex-1 w-full px-6 md:px-12 py-32 md:py-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="max-w-7xl mx-auto"
        >
          <header className="mb-16 md:mb-24 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">Disegni</h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-24">
            {artworks.map((art, index) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className=""
              >
                <div className="aspect-[4/5] bg-neutral-100 overflow-hidden mb-6 relative">
                  <img 
                    src={art.img} 
                    alt={art.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-lg font-serif tracking-wide">{art.title}</h3>
                  <div className="text-sm text-foreground/60 font-serif leading-relaxed">
                    <span>Colori naturali su carta cotone</span><br />
                    <span>21 x 30 cm</span><br />
                    <span>2025</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}
