import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { useT } from "@/i18n/useT";
import { renderLines } from "@/i18n/renderLines";

export default function Meditazione() {
  const t = useT();
  const med = t.meditazione;

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
            {med.title}
          </h1>
          <p className="text-lg font-serif text-foreground/80 italic">
            {med.subtitle}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-xl text-left"
        >
          <div className="space-y-8 font-serif text-base text-foreground/80 leading-relaxed">
            {med.paragraphs.map((para, i) => (
              <p key={i}>{renderLines(para)}</p>
            ))}
          </div>
        </motion.div>

      </main>
    </motion.div>
  );
}
