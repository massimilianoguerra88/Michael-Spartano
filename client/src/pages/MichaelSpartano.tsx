import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import profileImage from "@assets/Mattia_Gianfelici-2-2-Modifica-Modifica_1771234718589.jpg";

export default function MichaelSpartano() {
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

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 pt-48 pb-20 grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Text Column - Aligned exactly under the header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="md:col-span-5 text-left"
        >
          <p className="text-base md:text-lg font-serif text-foreground/80 mb-8">
            Non sono interessato al tuo nome.
          </p>

          <div className="space-y-2">
            <p className="text-base md:text-lg font-serif text-foreground/80 leading-relaxed">
              L’attenzione<br />
              va a ciò che sei,<br />
              che sono.
            </p>
          </div>
        </motion.div>

        {/* Image Column - To the right */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="md:col-span-6 md:col-start-7"
        >
          <img 
            src={profileImage} 
            alt="Michael Spartano" 
            className="w-full h-auto object-cover max-w-md mx-auto md:max-w-full"
          />
        </motion.div>
      </main>
    </motion.div>
  );
}
