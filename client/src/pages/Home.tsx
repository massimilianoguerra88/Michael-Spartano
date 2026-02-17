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
      <svg className="hidden">
        <filter id="water-ripple">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.005 0.005" 
            numOctaves="2" 
            result="noise" 
          >
            <animate 
              attributeName="baseFrequency" 
              dur="60s" 
              values="0.005 0.005;0.008 0.008;0.005 0.005" 
              repeatCount="indefinite" 
            />
          </feTurbulence>
          <feDisplacementMap 
            in="SourceGraphic" 
            in2="noise" 
            scale="30" 
            xChannelSelector="R" 
            yChannelSelector="G" 
          />
        </filter>
      </svg>

      {/* Background Image with Filter applied */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ 
            scale: [1.1, 1.15, 1.1],
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
