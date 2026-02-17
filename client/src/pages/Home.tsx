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
      
      {/* SVG Filter for Water Ripple Effect */}
      {/* Hidden SVG that defines the filter */}
      <svg className="hidden">
        <defs>
          <filter id="water-ripple" x="0" y="0" width="100%" height="100%">
            <feTurbulence 
              type="fractalNoise" 
              baseFrequency="0.01 0.01" 
              numOctaves="1" 
              result="noise" 
            >
              <animate 
                attributeName="baseFrequency" 
                dur="30s" 
                values="0.01 0.01;0.015 0.015;0.01 0.01" 
                repeatCount="indefinite" 
              />
            </feTurbulence>
            <feDisplacementMap 
              in="SourceGraphic" 
              in2="noise" 
              scale="20" 
            />
          </filter>
        </defs>
      </svg>

      {/* Background Image with Filter applied */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ 
            scale: [1.05, 1.1, 1.05],
          }}
          transition={{ 
            duration: 20, 
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
            style={{ filter: 'url(#water-ripple)' }}
          />
        </motion.div>
        
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <main className="relative z-10 flex-1 w-full min-h-screen">
        {/* Content can go here if needed */}
      </main>
    </motion.div>
  );
}
