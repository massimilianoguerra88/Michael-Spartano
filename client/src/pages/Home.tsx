import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import bgImage from "@assets/unnamed_1771316738230.jpg";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen w-full overflow-hidden bg-[#05101a]"
    >
      <Navigation />
      
      {/* Background Image - Subtle pan only, no zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }} // Slight scale to allow movement without showing edges
          animate={{ 
            x: [0, -20, 0],
            y: [0, -10, 0],
          }}
          transition={{ 
            duration: 25, 
            ease: "easeInOut", 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
          className="w-full h-full"
        >
          <img
            src={bgImage}
            alt="Water background with frame"
            className="w-full h-full object-cover"
          />
          
          {/* 
            Subtle Texture Overlay
            Adds a slight grain/noise to make it feel less static
          */}
          <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-[0.3]" />
        </motion.div>
        
        {/* Subtle dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <main className="relative z-10 flex-1 w-full min-h-screen">
        {/* Content can go here if needed */}
      </main>
    </motion.div>
  );
}
