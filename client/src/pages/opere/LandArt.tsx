import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import imgVesicaPiscis from "@/assets/images/landart/vesica_piscis.jpg";
import imgBilanciaFiume from "@/assets/images/landart/la_bilancia_del_fiume.jpg";
import imgSilentEarth from "@/assets/images/landart/silent_earth.jpg";
import imgAdorazione from "@/assets/images/landart/adorazione_al_nulla.jpg";
import imgConnessioni from "@/assets/images/landart/connessioni_svelate.jpg";
import imgFiorDiFiume from "@/assets/images/landart/fior_di_fiume.jpg";
import imgMandala from "@/assets/images/landart/mandala.jpg";

const artworks = [
  { id: 1, title: "Vesica Piscis", year: "2025", img: imgVesicaPiscis },
  { id: 2, title: "La bilancia del fiume", year: "2025", img: imgBilanciaFiume },
  { id: 3, title: "Silent Earth", year: "2025", img: imgSilentEarth },
  { id: 4, title: "Adorazione al nulla", year: "2025", img: imgAdorazione },
  { id: 5, title: "Connessioni svelate", year: "2025", img: imgConnessioni },
  { id: 6, title: "Fior di fiume", year: "2025", img: imgFiorDiFiume },
  { id: 7, title: "Mandala", year: "2025", img: imgMandala },
];

export default function LandArt() {
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
            <h1 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">Land Art</h1>
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
                    data-testid={`img-landart-${art.id}`}
                  />
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-lg font-serif tracking-wide">{art.title}</h3>
                  <div className="text-sm text-foreground/60 font-serif">
                    <span>{art.year}</span>
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
