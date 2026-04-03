import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import img1 from "@/assets/images/pratica/stone_balancing/sb_1.jpg";
import img2 from "@/assets/images/pratica/stone_balancing/sb_2.jpg";
import img3 from "@/assets/images/pratica/stone_balancing/sb_3.jpg";
import img8 from "@/assets/images/pratica/stone_balancing/sb_8.jpg";
import img9 from "@/assets/images/pratica/stone_balancing/sb_9.jpg";
import imgNew1 from "@/assets/images/pratica/stone_balancing/sb_new1.jpg";
import imgNew3 from "@/assets/images/pratica/stone_balancing/sb_new3.jpg";
import imgNew4 from "@/assets/images/pratica/stone_balancing/sb_new4.jpg";
import { useT } from "@/i18n/useT";
import { renderLines } from "@/i18n/renderLines";

const photos = [
  { src: img1, alt: "Pietra in equilibrio in bianco e nero sul mare" },
  { src: imgNew1, alt: "Torri di pietre riflesse nel fiume al tramonto" },
  { src: img3, alt: "Pietre impilate contro il cielo nuvoloso" },
  { src: img8, alt: "Pietra allungata in equilibrio in bianco e nero" },
  { src: img2, alt: "Pietra ovale in equilibrio sul fiume turchese" },
  { src: img9, alt: "Composizione di pietre ad ali sul fiume" },
  { src: imgNew4, alt: "Composizione di pietre impilate sul fiume" },
  { src: imgNew3, alt: "Pietre in equilibrio a forma di piramide capovolta" },
];

export default function StoneBalancing() {
  const t = useT();
  const sb = t.stoneBalancing;

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
            {sb.title}
          </h1>
          <p className="text-lg font-serif text-foreground/80 italic">
            {sb.subtitle}
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
              {sb.paragraphs.map((para, i) => (
                <p key={i}>{renderLines(para)}</p>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 mt-1 md:mt-[6px]"
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
