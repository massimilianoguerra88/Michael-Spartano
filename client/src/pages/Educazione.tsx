import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import img2 from "@/assets/images/educazione/edu_2.jpg";
import img4 from "@/assets/images/educazione/edu_4.jpg";
import img6 from "@/assets/images/educazione/edu_6.jpg";
import img7 from "@/assets/images/educazione/edu_7.jpg";
import img8 from "@/assets/images/educazione/edu_8.jpg";
import img10 from "@/assets/images/educazione/edu_10.jpg";
import img12 from "@/assets/images/educazione/edu_12.jpg";
import img14 from "@/assets/images/educazione/edu_14.jpg";
import imgDisegno from "@/assets/images/educazione/edu_disegno.jpg";
import imgTdf3 from "@/assets/images/pratica/tracce_di_fango/tdf_3.jpg";
import { useT } from "@/i18n/useT";
import { renderLines } from "@/i18n/renderLines";

const photos = [
  { src: imgTdf3, alt: "Mani di bambino lavorano il fango su carta bianca" },
  { src: img10, alt: "Adulto suona la lira con bambini in ambiente interno" },
  { src: imgDisegno, alt: "Disegno di bambino con scarabocchi a matita su foglio bianco" },
  { src: img14, alt: "Mani di bambino scrivono lettere su un sasso" },
  { src: img2, alt: "Bambini toccano il tronco di un albero da vicino" },
  { src: img4, alt: "Bambino esplora installazione di fogli d'argento tra gli alberi" },
  { src: img6, alt: "Utensili da cucina appesi agli alberi come strumenti sonori" },
  { src: img7, alt: "Mani che suonano un coperchio metallico all'aperto" },
  { src: img8, alt: "Sessione musicale all'aperto su coperta a quadri con lira" },
  { src: img12, alt: "Dettaglio delle mani che suonano il tongue drum" },
];

export default function Educazione() {
  const t = useT();
  const edu = t.educazione;

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
            {edu.title}
          </h1>
          <p className="text-lg font-serif text-foreground/80 italic">
            {edu.subtitle}
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
              {edu.paragraphs.map((para, i) => (
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
                  data-testid={`img-educazione-${index}`}
                />
              </div>
            ))}
          </motion.div>

        </div>
      </main>
    </motion.div>
  );
}
