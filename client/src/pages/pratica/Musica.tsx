import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import img1 from "@assets/1_1775469717484.jpg";
import img2 from "@assets/2_1775469717486.jpg";
import img3 from "@assets/musica_new3.jpg";
import img4 from "@assets/musica_new4.jpg";
import { useT } from "@/i18n/useT";
import { renderLines } from "@/i18n/renderLines";

export default function Musica() {
  const t = useT();
  const mus = t.musica;

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
            {mus.title}
          </h1>
          <p className="text-lg font-serif text-foreground/80 italic">
            {mus.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full md:flex-[0.7] text-left"
          >
            <div className="space-y-8 font-serif text-base text-foreground/80 leading-relaxed">
              {mus.paragraphs.map((para, i) => (
                <p key={i}>{renderLines(para)}</p>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="w-full md:flex-[1.5] grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mt-1 md:mt-[6px]"
          >
            <div className="aspect-[4/3] relative overflow-hidden bg-foreground/5 rounded-sm">
              <img src={img1} alt="Sessione musicale 1" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] relative overflow-hidden bg-foreground/5 rounded-sm">
              <img src={img2} alt="Sessione musicale 2" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] relative overflow-hidden bg-foreground/5 rounded-sm">
              <img src={img3} alt="Sessione musicale 3" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] relative overflow-hidden bg-foreground/5 rounded-sm">
              <img src={img4} alt="Sessione musicale 4" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </motion.div>

        </div>
      </main>
    </motion.div>
  );
}
