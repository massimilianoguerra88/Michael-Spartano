import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import img1 from "@/assets/images/pratica/tracce_di_fango/tdf_1.jpg";
import img2 from "@/assets/images/pratica/tracce_di_fango/tdf_2.jpg";
import img3 from "@/assets/images/pratica/tracce_di_fango/tdf_3.jpg";
import img4 from "@/assets/images/pratica/tracce_di_fango/tdf_4.jpg";
import img5 from "@/assets/images/pratica/tracce_di_fango/tdf_5.jpg";
import img6 from "@/assets/images/pratica/tracce_di_fango/tdf_6.jpg";

const photos = [
  { src: img1, alt: "Foglietto bianco appeso su struttura di rami" },
  { src: img2, alt: "Bambino dipinge con pennello e fango" },
  { src: img3, alt: "Mani che lavorano il fango sulla carta" },
  { src: img4, alt: "Dettaglio della mano sulla pittura di fango" },
  { src: img5, alt: "Bambina lavora con ciotola di fango e opera appesa" },
  { src: img6, alt: "Foglietto colorato con tracce di fango appeso" },
];

export default function TracceDiFango() {
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
            Tracce di Fango
          </h1>
          <p className="text-lg font-serif text-foreground/80 italic">
            Materia e gesto
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
                Un incontro con la terra, da vicino.<br />
                In un suo stato spesso evitato.
              </p>

              <p>
                Il fango diventa superficie<br />
                e strumento insieme.
              </p>

              <p>
                Con le mani<br />
                o con un pennello,<br />
                si tracciano segni semplici,<br />
                diretti.
              </p>

              <p>
                Non si disegna per rappresentare.<br />
                Si lascia una traccia.
              </p>

              <p>
                Ciò che emerge<br />
                può restare nel tempo,<br />
                seccandosi e trasformandosi,<br />
                oppure sgretolarsi lentamente.
              </p>

              <p>
                Non è importante ciò che rimane.<br />
                È importante ciò che è accaduto.
              </p>

              <p>
                La pratica può essere proposta<br />
                a bambini e adulti,<br />
                in forma individuale<br />
                o condivisa.
              </p>

              <p>
                Rimane essenziale.<br />
                Alla terra.
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
                  data-testid={`img-tracce-di-fango-${index}`}
                />
              </div>
            ))}
          </motion.div>

        </div>
      </main>
    </motion.div>
  );
}
