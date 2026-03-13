import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import imgImmobile from "@/assets/images/oggetti/immobile.jpg";

const artworks = [
  {
    id: 1,
    title: "Immobile, come me",
    img: imgImmobile,
    description: [
      "Pennarello su pietra di fiume",
      "14 x 20 x 12 cm",
      "2025",
      "In mostra presso La Torre della Filanda,",
      "all'interno della collettiva Tracce Ferme.",
    ],
  },
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
              >
                <div className="aspect-[5/4] bg-neutral-100 overflow-hidden mb-6 relative">
                  <img 
                    src={art.img} 
                    alt={art.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                
                <div className="space-y-1">
                  <h3 className="text-lg font-serif tracking-wide">{art.title}</h3>
                  <div className="text-sm text-foreground/60 font-serif leading-relaxed">
                    {art.description.map((line, i) => (
                      <span key={i}>{line}<br /></span>
                    ))}
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
