import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import img2 from "@/assets/images/educazione/edu_2.jpg";
import img4 from "@/assets/images/educazione/edu_4.jpg";
import img6 from "@/assets/images/educazione/edu_6.jpg";
import img7 from "@/assets/images/educazione/edu_7.jpg";
import img8 from "@/assets/images/educazione/edu_8.jpg";
import img10 from "@/assets/images/educazione/edu_10.jpg";
import img12 from "@/assets/images/educazione/edu_12.jpg";
import img13 from "@/assets/images/educazione/edu_13.jpg";
import img14 from "@/assets/images/educazione/edu_14.jpg";
import img15 from "@/assets/images/educazione/edu_15.jpg";

const photos = [
  { src: img13, alt: "Mani di bambina lavorano con il fango su un tavolo" },
  { src: img10, alt: "Adulto suona la lira con bambini in ambiente interno" },
  { src: img15, alt: "Bambino scrive lettere su carta con pennarello" },
  { src: img14, alt: "Mani di bambino scrivono lettere su un sasso" },
  { src: img2, alt: "Bambini toccano il tronco di un albero da vicino" },
  { src: img4, alt: "Bambino esplora installazione di fogli d'argento tra gli alberi" },
  { src: img6, alt: "Utensili da cucina appesi agli alberi come strumenti sonori" },
  { src: img7, alt: "Mani che suonano un coperchio metallico all'aperto" },
  { src: img8, alt: "Sessione musicale all'aperto su coperta a quadri con lira" },
  { src: img12, alt: "Dettaglio delle mani che suonano il tongue drum" },
];

export default function Educazione() {
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
            Educazione
          </h1>
          <p className="text-lg font-serif text-foreground/80 italic">
            Arte, natura e consapevolezza
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
              <p>
                Lavoro con bambini e ragazzi<br />
                attraverso esperienze artistiche e sonore,<br />
                spesso radicate nella natura,<br />
                ma capaci di portarne la presenza anche negli spazi chiusi.
              </p>

              <p>
                Le proposte nascono<br />
                dal contatto diretto con la materia:<br />
                terra, foglie, acqua, sassi, colore.<br />
                Ogni attività è pensata in base all'età dei partecipanti<br />
                e al contesto in cui si svolge.
              </p>

              <p>
                Il corpo è sempre coinvolto.<br />
                Non come strumento da guidare,<br />
                ma come luogo di scoperta e osservazione.
              </p>

              <p>
                Attraverso il gesto,<br />
                il ritmo<br />
                e il silenzio,<br />
                i bambini approfondiscono<br />
                la relazione<br />
                con ciò che li circonda<br />
                e con ciò che sentono.
              </p>

              <p>
                Brevi momenti di meditazione<br />
                vengono proposti in modo semplice,<br />
                come spazio di ascolto<br />
                e di familiarità con il respiro.
              </p>

              <p>
                Non si cerca il risultato.<br />
                Si coltiva l'esperienza,<br />
                come una terra fertile<br />
                da cui qualcosa può nascere.
              </p>

              <p>
                Ogni incontro diventa<br />
                fonte di meraviglia,<br />
                di attenzione<br />
                e di libertà espressiva.
              </p>

              <p>
                Le attività possono svolgersi<br />
                in italiano o in lingua inglese,<br />
                in contesti educativi, associativi<br />
                o all'aperto,<br />
                adattandosi al luogo<br />
                e al gruppo.
              </p>
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
