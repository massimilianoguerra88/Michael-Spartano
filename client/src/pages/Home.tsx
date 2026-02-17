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
      
      {/* Background Image - Solid and Sharp */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ 
            scale: [1.05, 1.08, 1.05],
            x: [0, -10, 0],
            y: [0, -5, 0],
          }}
          transition={{ 
            duration: 18, 
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
            Overlay for Water Surface Effect 
            This creates a subtle moving texture ON TOP of the image
            without distorting the frame underneath.
          */}
          <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none">
            <svg className="w-full h-full opacity-50">
               <filter id="noiseFilter">
                 <feTurbulence 
                   type="fractalNoise" 
                   baseFrequency="0.6" 
                   stitchTiles="stitch" 
                   numOctaves="1"
                 />
               </filter>
               <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
          </div>
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
