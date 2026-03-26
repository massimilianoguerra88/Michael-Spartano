import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import img1 from "@/assets/images/pratica/corpo_natura/cn_1.jpg";
import img2 from "@/assets/images/pratica/corpo_natura/cn_2.jpg";
import img3 from "@/assets/images/pratica/corpo_natura/cn_3.jpg";
import img4 from "@/assets/images/pratica/corpo_natura/cn_4.jpg";
import img5 from "@/assets/images/pratica/corpo_natura/cn_5.jpg";
import img6 from "@/assets/images/pratica/corpo_natura/cn_6.jpg";

const photos = [
  { src: img1, alt: "Adulto disteso a terra con foglie e bambini attorno" },
  { src: img2, alt: "Adulto disteso a terra, bambino in piedi accanto" },
  { src: img3, alt: "Materiali naturali disposti a terra: foglie, bacche, rametti" },
  { src: img4, alt: "Adulto e bambini seduti osservano i materiali naturali disposti" },
  { src: img5, alt: "Mano di bambino nel cesto di foglie e materiali naturali" },
  { src: img6, alt: "Sagoma del corpo tracciata con rami e materiali naturali sul pavimento" },
];

export default function CorpoNatura() {
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
            Corpo Natura
          </h1>
          <p className="text-lg font-serif text-foreground/80 italic">
            Cura e osservazione
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
                Nasce dall'ascolto del corpo<br />
                come primo luogo di relazione<br />
                con lo spazio<br />
                e con ciò che chiamiamo natura.
              </p>

              <p>
                Il corpo viene accolto così com'è:<br />
                disteso, presente,<br />
                non chiamato a fare.
              </p>

              <p>
                Intorno ad esso,<br />
                elementi raccolti nel luogo:<br />
                foglie, rami, sassi, tracce vegetali<br />
                vengono disposti sul perimetro del corpo<br />
                attraverso un gesto semplice e condiviso.
              </p>

              <p>
                Prende forma una sagoma temporanea:<br />
                qualcosa che emerge,<br />
                resta per un tempo,<br />
                e può dissolversi.
              </p>

              <p>
                La pratica è nata con i bambini,<br />
                dove il sapere corporeo è diretto,<br />
                senza mediazione.
              </p>

              <p>
                Con gli adulti<br />
                diventa un punto di sospensione del fare,<br />
                un ritorno a una percezione non separata.
              </p>

              <p>
                Può essere attivato come gesto intimo,<br />
                come pratica condivisa<br />
                o come azione aperta nello spazio.
              </p>

              <p>
                Rimane essenziale.<br />
                Non spettacolare.
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
                  data-testid={`img-corpo-natura-${index}`}
                />
              </div>
            ))}
          </motion.div>

        </div>
      </main>
    </motion.div>
  );
}
