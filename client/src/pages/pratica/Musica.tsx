import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import img1 from "@/assets/images/musica-1.jpg";
import img2 from "@/assets/images/musica-2.jpg";

export default function Musica() {
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

      <main className="flex-1 w-full flex flex-col pt-48 px-6 md:px-12 pb-32">
        {/* Title Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="max-w-3xl mx-auto w-full text-center mb-24 md:mb-32"
        >
          <h1 className="text-2xl md:text-3xl font-serif text-foreground/90 mb-4">
            Bagno di suoni e parole
          </h1>
          <p className="text-lg md:text-xl font-serif text-foreground/70 italic">
            La voce della natura
          </p>
        </motion.div>

        {/* Content Section 1 */}
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32 md:mb-48">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 w-full"
          >
            <img 
              src={img1} 
              alt="Strumenti armonici" 
              className="w-full h-[40vh] md:h-[60vh] object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full text-left mt-8 md:mt-0"
          >
            <p className="text-base md:text-lg font-serif text-foreground/80 leading-relaxed space-y-2">
              <span className="block">Un incontro di vibrazioni,</span>
              <span className="block ml-6 md:ml-12">silenzi</span>
              <span className="block ml-12 md:ml-24">e poesia.</span>
            </p>
            
            <p className="text-base md:text-lg font-serif text-foreground/80 leading-relaxed mt-12 md:mt-16 space-y-2">
              <span className="block">Strumenti armonici</span>
              <span className="block ml-6 md:ml-12">e voci</span>
              <span className="block ml-12 md:ml-24">in dialogo con elementi naturali.</span>
            </p>
          </motion.div>
        </div>

        {/* Content Section 2 */}
        <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-1 w-full"
          >
            <img 
              src={img2} 
              alt="Silenzi e natura" 
              className="w-full h-[50vh] md:h-[70vh] object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full text-left md:text-right mt-8 md:mt-0"
          >
            <p className="text-base md:text-lg font-serif text-foreground/80 leading-relaxed space-y-2">
              <span className="block">Sono proposte sessioni</span>
              <span className="block md:mr-6">individuali o di gruppo,</span>
              <span className="block md:mr-12">in cui il suono sorge</span>
              <span className="block md:mr-18">nel silenzio</span>
              <span className="block md:mr-24">e genera risonanze interiori.</span>
            </p>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}
