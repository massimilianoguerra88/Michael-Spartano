import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Link } from "wouter";

const poems = [
  { title: "Ciò che sei", path: "/opere/poesie/cio-che-sei" },
  { title: "Mappa vuota", path: "/opere/poesie/mappa-vuota" },
  { title: "Io te", path: "/opere/poesie/io-te" },
  { title: "Innatura", path: "/opere/poesie/innatura" },
  { title: "All'Uno", path: "/opere/poesie/all-uno" },
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

      <main className="flex-1 w-full pt-28 md:pt-48 px-6 md:px-12 pb-16 md:pb-32 max-w-7xl mx-auto">
        
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="mt-24 md:mt-32 pt-12 border-t border-foreground/10 max-w-xl"
        >
          <div className="space-y-6 font-serif text-base text-foreground/80 leading-relaxed">
            <p>
              La lettura di alcune parole potrebbe aver toccato un punto che non riesci a decifrare.
              Qualcosa che non ti spieghi, ma che ti ha portato espansione, verità e libertà.<br />
              Se desideri continuare a esplorare, puoi fare una donazione libera per la stampa di
              una raccolta di poesie intitolata <em>Dal Vuoto</em>.
            </p>
            <p>
              Puoi donare qui:{" "}
              <a
                href="https://paypal.me/MichaelSpartano73"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/90 underline decoration-foreground underline-offset-2 hover:opacity-70 transition-opacity duration-300"
              >
                paypal.me/MichaelSpartano73
              </a>
            </p>
          </div>
        </motion.div>

      </main>
    </motion.div>
  );
}
