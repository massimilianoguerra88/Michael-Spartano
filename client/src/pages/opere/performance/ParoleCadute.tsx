import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Link } from "wouter";
import img2 from "@/assets/images/performance/pc_2.jpg";
import img3 from "@/assets/images/performance/pc_3.jpg";
import img4 from "@/assets/images/performance/pc_4.jpg";
import img5 from "@/assets/images/performance/pc_5.jpg";
import img6 from "@/assets/images/performance/pc_6.jpg";
import img7 from "@/assets/images/performance/pc_7.jpg";
import img8 from "@/assets/images/performance/pc_8.jpg";
import img9 from "@/assets/images/performance/pc_9.jpg";
import img10 from "@/assets/images/performance/pc_10.jpg";

const photos = [
  { src: img2, alt: "Performance sotto i portici" },
  { src: img3, alt: "Performance con il pubblico" },
  { src: img4, alt: "Conversazione durante la performance" },
  { src: img5, alt: "Abbraccio durante la performance" },
  { src: img6, alt: "Intervista durante la performance" },
  { src: img7, alt: "Dialogo seduti sul tappeto rosso" },
  { src: img8, alt: "Performance in piazza, vista da lontano" },
  { src: img9, alt: "Interazione con il pubblico" },
  { src: img10, alt: "Incontro con una bambina" },
];

export default function ParoleCadute() {
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

      <main className="flex-1 flex flex-col items-center px-6 md:px-12 py-32 md:py-40">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-2xl w-full text-center font-serif text-foreground/80 leading-relaxed text-base space-y-12"
        >
          <div className="text-left mb-8">
            <Link href="/opere/performance">
              <a className="font-serif text-sm text-foreground/50 hover:text-foreground/80 transition-colors duration-300 cursor-pointer">← Performance</a>
            </Link>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl font-normal">Parole cadute</h1>
          </div>

          <div className="space-y-1">
            <p>"Parole Cadute" è un progetto che attraversa i confini tra arte relazionale, performance e meditazione pubblica. Al centro vi è la ricerca dell'essere come spazio condiviso, il riconoscimento della non-dualità tra chi osserva e chi è osservato. Ogni incontro, ogni parola, ogni gesto diventa occasione di dissoluzione del confine.</p>
          </div>

          <div className="space-y-1">
            <p>La frase "Sei senza volto – e tutti i volti" non è uno slogan, ma una soglia percettiva: invita chi la incontra a riconoscersi oltre quell'immagine allo specchio. In questo spazio, l'artista non interpreta un personaggio e non rappresenta nulla.</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="max-w-7xl w-full mt-24"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + 0.1 * index }}
              >
                <div className="aspect-[4/5] bg-neutral-100 overflow-hidden relative">
                  <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </motion.div>
  );
}
