import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import fioreA from "@/assets/images/fiore/fiore_a.jpg";
import fioreF from "@/assets/images/fiore/fiore_f.jpg";
import fioreB from "@/assets/images/fiore/fiore_b.jpg";
import fioreC from "@/assets/images/fiore/fiore_c.jpg";
import fioreD from "@/assets/images/fiore/fiore_d.jpg";
import fioreE from "@/assets/images/fiore/fiore_e.jpg";

const images = [
  { src: fioreA, alt: "Il Fiore della Vita incorniciato su sfondo bianco" },
  { src: fioreF, alt: "Geometria sacra e cosmologia del Fiore della Vita" },
  { src: fioreB, alt: "Mani che disegnano il Fiore della Vita con il compasso" },
  { src: fioreC, alt: "Mano che colora il Fiore della Vita con matite" },
  { src: fioreD, alt: "Persona che colora il Fiore della Vita con matite colorate" },
  { src: fioreE, alt: "Fiore della Vita colorato in lavorazione su carta" },
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

      <main className="flex-1 w-full pt-28 md:pt-48 px-6 md:px-12 pb-16 md:pb-32 max-w-7xl mx-auto">
        
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
                Una forma potente,<br />
                presente in antiche culture<br />
                come matrice di perfezione,<br />
                equilibrio e armonia.
              </p>
              
              <p>
                In questa pratica<br />
                partiamo dal disegno.
              </p>
              
              <p>
                Cerchio dopo cerchio,<br />
                il gesto si fa lento,<br />
                preciso,<br />
                ripetuto.<br />
                Come qualcosa che va<br />
                ricordato e ricordato.
              </p>

              <p>
                La mano segue la forma<br />
                e l'attenzione si raccoglie.<br />
                Il Fiore si rivela un'esperienza di presenza,<br />
                ascolto e pazienza.
              </p>

              <p>
                Sono proposte sessioni<br />
                individuali o di gruppo,<br />
                in cui il disegno diventa<br />
                uno spazio di condivisione<br />
                e apertura.
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