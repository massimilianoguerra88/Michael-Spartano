import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { useT } from "@/i18n/useT";

export default function SpazioSorgente() {
  const t = useT();
  const ss = t.spazioSorgente;

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

      <main className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-32 md:py-40">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl w-full text-center font-serif text-foreground/80 leading-relaxed text-base space-y-12"
        >
          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-normal">{ss.title}</h1>
            <p className="italic text-lg">{ss.subtitle}</p>
          </div>

          {ss.blocks.map((block, bi) => (
            <div key={bi} className="space-y-1">
              {block.map((line, li) => (
                <p key={li}>{line}</p>
              ))}
              {bi === 5 && (
                <p className="mt-2">+39 3206074072</p>
              )}
            </div>
          ))}
        </motion.div>
      </main>
    </motion.div>
  );
}
