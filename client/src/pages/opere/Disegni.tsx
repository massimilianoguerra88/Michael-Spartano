import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import imgCaratteristiche from "@assets/Caratteristiche_del_corpo_nobg.png";
import imgIoSonoTe from "@assets/Io_sono_te_nobg.png";
import imgGabbia from "@assets/la_gabbia_del_me_nobg.png";
import imgAbbracciacolori from "@assets/Abbracciacolori_1773065323543.jpg";
import imgNelleMani from "@assets/Nelle_mani_della_vita_nobg.png";
import imgSurrendering from "@assets/Surrendering_nobg.png";
import imgVitaAttraverso from "@assets/Vita_attraverso_nobg.png";

const artworks = [
  { id: 1, title: "Caratteristiche del corpo", img: imgCaratteristiche, isOriginal: false },
  { id: 2, title: "Io sono te", img: imgIoSonoTe, isOriginal: false },
  { id: 3, title: "La gabbia del 'me'", img: imgGabbia, isOriginal: false },
  { id: 4, title: "Abbracciacolori", img: imgAbbracciacolori, isOriginal: true },
  { id: 5, title: "Nelle mani della vita", img: imgNelleMani, isOriginal: false },
  { id: 6, title: "Surrendering", img: imgSurrendering, isOriginal: false },
  { id: 7, title: "Vita attraverso", img: imgVitaAttraverso, isOriginal: false },
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
                className="group"
              >
                <div className="aspect-[4/5] bg-[#e8e4df] overflow-hidden mb-6 relative">
                  <img 
                    src={art.img} 
                    alt={art.title} 
                    className={`absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700 ${
                      art.isOriginal ? "object-cover" : "object-contain p-6"
                    }`}
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
