import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

const artworks = [
  { id: 1, title: "Oggetto I", year: "2024", type: "Scultura" },
  { id: 2, title: "Oggetto II", year: "2024", type: "Assemblaggio" },
  { id: 3, title: "Oggetto III", year: "2023", type: "Materiale naturale" },
  { id: 4, title: "Oggetto IV", year: "2023", type: "Tecnica mista" },
  { id: 5, title: "Oggetto V", year: "2022", type: "Installazione" },
  { id: 6, title: "Oggetto VI", year: "2022", type: "Composizione" },
];

export default function Oggetti() {
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
            <h1 className="text-3xl md:text-4xl font-serif tracking-tight mb-4">Oggetti</h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-24">
            {artworks.map((art, index) => (
              <motion.div
                key={art.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] bg-neutral-100 overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-neutral-200 animate-pulse group-hover:bg-neutral-300 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center text-neutral-400 font-serif opacity-30">
                    Image {art.id}
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-lg font-serif tracking-wide">{art.title}</h3>
                  <div className="flex justify-between items-baseline text-sm text-foreground/60 font-serif">
                    <span>{art.type}</span>
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
