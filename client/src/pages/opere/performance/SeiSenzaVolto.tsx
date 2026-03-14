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

export default function SeiSenzaVolto() {
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
          <Link href="/opere/performance/parole-cadute">
            <a className="font-serif text-sm text-foreground/50 hover:text-foreground/80 transition-colors duration-300 cursor-pointer mb-6 inline-block">← Parole cadute</a>
          </Link>
          <h1 className="text-2xl md:text-3xl font-normal font-serif text-foreground/90">
            Sei senza volto – e tutti i volti
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full text-left"
          >
            <div className="space-y-8 font-serif text-base text-foreground/80 leading-relaxed">
              <p>
                "Parole Cadute" è un progetto<br />
                che attraversa i confini tra arte,<br />
                performance<br />
                e meditazione pubblica.
              </p>

              <p>
                Ogni incontro,<br />
                ogni parola,<br />
                ogni gesto,<br />
                ogni silenzio<br />
                diventa occasione<br />
                di dissoluzione del confine<br />
                tra chi osserva<br />
                e ciò che è osservato.
              </p>

              <p>
                La frase<br />
                <em>"Sei senza volto — e tutti i volti"</em>
              </p>

              <p>
                non è uno slogan,<br />
                ma una soglia percettiva.
              </p>

              <p>
                Invita chi la incontra<br />
                a riconoscersi<br />
                oltre l'immagine allo specchio.
              </p>

              <p>
                In questo spazio<br />
                l'artista non interpreta un personaggio<br />
                e non rappresenta nulla.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="flex-1 w-full grid grid-cols-2 gap-2 md:gap-4 mt-1 md:mt-[6px]"
          >
            {photos.map((photo, index) => (
              <div key={index} className="aspect-[3/4] relative overflow-hidden bg-foreground/5 rounded-sm">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="absolute inset-0 w-full h-full object-cover"
                  data-testid={`img-sei-senza-volto-${index}`}
                />
              </div>
            ))}
          </motion.div>

        </div>
      </main>
    </motion.div>
  );
}
