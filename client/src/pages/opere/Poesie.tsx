import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Link } from "wouter";

const poems = [
  { title: "Ciò che sei", path: "/opere/poesie/cio-che-sei" },
  { title: "Mappa vuota", path: "/opere/poesie/mappa-vuota" },
  { title: "Io te", path: "/opere/poesie/io-te" },
  { title: "Innatura", path: "/opere/poesie/innatura" },
  { title: "Il silenzio delle parole", path: "/opere/poesie/il-silenzio-delle-parole" },
];

export default function Poesie() {
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
          <h1 className="text-2xl md:text-3xl font-normal font-serif text-foreground/90">
            Poesie
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-xl"
        >
          <ul className="space-y-6">
            {poems.map((poem, index) => (
              <motion.li
                key={poem.path}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 + index * 0.1 }}
              >
                <Link href={poem.path}>
                  <a className="font-serif text-lg text-foreground/80 hover:text-foreground transition-colors duration-300 cursor-pointer" data-testid={`link-poem-${index}`}>
                    <span className="mr-3">·</span>{poem.title}
                  </a>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

      </main>
    </motion.div>
  );
}
