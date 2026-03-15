import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import img1 from "@/assets/images/pratica/stone_balancing/sb_1.jpg";
import img2 from "@/assets/images/pratica/stone_balancing/sb_2.jpg";
import img3 from "@/assets/images/pratica/stone_balancing/sb_3.jpg";
import img4 from "@/assets/images/pratica/stone_balancing/sb_4.jpg";
import img5 from "@/assets/images/pratica/stone_balancing/sb_5.jpg";
import img6 from "@/assets/images/pratica/stone_balancing/sb_6.jpg";
import img7 from "@/assets/images/pratica/stone_balancing/sb_7.jpg";
import img8 from "@/assets/images/pratica/stone_balancing/sb_8.jpg";
import img9 from "@/assets/images/pratica/stone_balancing/sb_9.jpg";
import img10 from "@/assets/images/pratica/stone_balancing/sb_10.jpg";

const photos = [
  { src: img1, alt: "Pietre in equilibrio in bianco e nero sul mare" },
  { src: img2, alt: "Pietra scura in equilibrio sul fiume" },
  { src: img3, alt: "Stone balancing nella natura" },
  { src: img4, alt: "Pietra allungata in equilibrio sul fiume" },
  { src: img5, alt: "Composizione di pietre in equilibrio" },
  { src: img6, alt: "Stone balancing al tramonto" },
  { src: img7, alt: "Pratica di stone balancing sul fiume" },
  { src: img8, alt: "Equilibrio di pietre" },
  { src: img9, alt: "Stone balancing nel paesaggio" },
  { src: img10, alt: "Pietre in equilibrio nella natura" },
];

export default function StoneBalancing() {
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
            Stone Balancing
          </h1>
          <p className="text-lg font-serif text-foreground/80 italic">
            L'equilibrio delle pietre
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
                È una pratica rudimentale,<br />
                di un sapore antico.
              </p>

              <p>
                Una pietra sull'altra,<br />
                cercando un punto che c'è, sempre.
              </p>

              <p>
                Con il tempo ho scoperto<br />
                che non si tratta di costruire qualcosa,<br />
                ma di ascoltare.
              </p>

              <p>
                Nel silenzio<br />
                le mani iniziano a sentire le pietre.
              </p>

              <p>
                È attenzione e pazienza,<br />
                e poi tecnica.
              </p>

              <p>
                La natura intorno diventa presenza.<br />
                Non fa nulla, osserva.<br />
                E lentamente<br />
                non c'è più "qualcuno che impila",<br />
                c'è solo il corpo che si muove,<br />
                che prova e aspetta.<br />
                Riprova e aspetta.
              </p>

              <p>
                L'equilibrio ricercato nella pietra<br />
                porta con sé<br />
                un equilibrio più sottile.
              </p>

              <p>
                La separazione si assottiglia.<br />
                Le pietre non sono altro.<br />
                Non sono fuori.
              </p>

              <p>
                Quando l'attenzione si stabilizza,<br />
                spazio e tempo si fanno leggeri.
              </p>

              <p>
                I pensieri si diradano.<br />
                Resta il gesto.<br />
                Resta il silenzio, sempre presente.
              </p>

              <p>
                Sono proposte sessioni<br />
                individuali o di gruppo.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="flex-1 w-full grid grid-cols-2 gap-2 md:gap-4 mt-1 md:mt-[6px]"
          >
            {photos.map((photo, index) => (
              <div key={index} className="aspect-[3/4] relative overflow-hidden bg-foreground/5 rounded-sm">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="absolute inset-0 w-full h-full object-cover"
                  data-testid={`img-stone-balancing-${index}`}
                />
              </div>
            ))}
          </motion.div>

        </div>
      </main>
    </motion.div>
  );
}
