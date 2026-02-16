import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import frameImg from "@/assets/images/frame.png";
import waterVideo from "@/assets/videos/water-bg.mp4";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen w-full overflow-hidden bg-[#0a1520]"
    >
      <Navigation />
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80 brightness-75 contrast-125"
        >
          <source src={waterVideo} type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability if needed, though mix-blend-difference helps */}
        <div className="absolute inset-0 bg-[#0a1520]/20 mix-blend-multiply" />
      </div>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center min-h-screen p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="relative max-w-sm md:max-w-md lg:max-w-lg w-full aspect-[3/4]"
        >
          {/* Floating animation wrapper */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 1, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-full relative"
          >
             <img 
               src={frameImg} 
               alt="Frame" 
               className="w-full h-full object-contain drop-shadow-2xl"
             />
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}
