import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import fiore1 from "@/assets/images/fiore/fiore1.jpg";
import fiore5 from "@/assets/images/fiore/fiore5.jpg";
import fiore6 from "@/assets/images/fiore/fiore6.jpg";
import fiore7 from "@/assets/images/fiore/fiore7.jpg";
import fiore8 from "@/assets/images/fiore/fiore8.jpg";
import fioreNew1 from "@/assets/images/fiore/fiore_new1.jpg";
import fioreNew2 from "@/assets/images/fiore/fiore_new2.jpg";
import fioreNew3 from "@/assets/images/fiore/fiore_new3.jpg";
import fioreCrop1 from "@/assets/images/fiore/fiore_crop1.jpg";
import fioreCrop2 from "@/assets/images/fiore/fiore_crop2.jpg";

const images = [
  { src: fiore1, alt: "Il Fiore della Vita incorniciato" },
  { src: fioreNew1, alt: "Mano che colora il Fiore rosa e blu" },
  { src: fiore5, alt: "Disegno del Fiore in lavorazione" },
  { src: fioreNew2, alt: "Mani che colorano il Fiore giallo e rosso" },
  { src: fiore6, alt: "Dettaglio del cerchio arcobaleno" },
  { src: fioreCrop2, alt: "Tavolo con pennarelli e Fiore colorato" },
  { src: fiore7, alt: "Fiore rosa e viola in lavorazione" },
  { src: fioreNew3, alt: "Pratica del disegno del Fiore" },
  { src: fioreCrop1, alt: "Due disegni in lavorazione sul tavolo" },
  { src: fiore8, alt: "Fiore multicolore pastello" },
];

export default function FioredellaVita() {
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
            Il Fiore della Vita
          </h1>
          <p className="text-lg font-serif text-foreground/80 italic">
            Un disegno sacro
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full text-left"
          >
            <div className="space-y-8 font-serif text-base text-foreground/80 leading-relaxed">
              <p>
                Il Fiore della Vita è una geometria sacra<br />
                primordiale.<br />
                Una forma semplice e potente,<br />
                presente in antiche culture<br />
                come matrice di perfezione.
              </p>
              
              <p>
                In questa pratica<br />
                partiamo dal disegno.
              </p>
              
              <p>
                Cerchio dopo cerchio,<br />
                il gesto si lento,<br />
                preciso,<br />
                ripetuto.
              </p>

              <p>
                La mano segue la forma<br />
                e l'attenzione si raccoglie.<br />
                Il Fiore si rivela un'esperienza di presenza,<br />
                ascolto<br />
                e pazienza,<br />
                in cui può emergere<br />
                un naturale processo di guarigione.
              </p>

              <p>
                Sono proposte sessioni<br />
                individuali o di gruppo,<br />
                in cui il disegno diventa<br />
                uno spazio sacro di condivisione.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="flex-1 w-full grid grid-cols-2 gap-2 md:gap-4 mt-1 md:mt-[6px]"
          >
            {images.map((img, i) => (
              <div key={i} className="aspect-[3/4] relative overflow-hidden bg-foreground/5 rounded-sm">
                <img 
                  src={img.src} 
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  data-testid={`img-fiore-${i}`}
                />
              </div>
            ))}
          </motion.div>

        </div>
      </main>
    </motion.div>
  );
}