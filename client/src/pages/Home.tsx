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
      
      {/* 
        Water Ripple + Raft Effect 
        1. The entire background floats gently (Raft effect).
        2. The water ripples, but the frame stays solid (Masking).
      */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{ scale: 1.1 }} // Slight scale to avoid edges showing during movement
        animate={{ 
          x: [0, -15, 0],
          y: [0, -8, 0],
          rotate: [0, 0.5, 0]
        }}
        transition={{ 
          duration: 18, 
          ease: "easeInOut", 
          repeat: Infinity,
          repeatType: "mirror" 
        }}
      >
        {/* SVG Filter Definition */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="water-ripple">
            <feTurbulence 
              type="turbulence" 
              baseFrequency="0.01 0.02" 
              numOctaves="2" 
              result="turbulence" 
              seed="5"
            >
              <animate 
                attributeName="baseFrequency" 
                dur="120s" 
                values="0.01 0.02;0.015 0.025;0.01 0.02" 
                repeatCount="indefinite" 
              />
            </feTurbulence>
            <feDisplacementMap 
              in2="turbulence" 
              in="SourceGraphic" 
              scale="10" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </svg>

        {/* 1. Base Static Image (The Frame) - Undistorted */}
        <div className="absolute inset-0 w-full h-full">
           <img
            src={bgImage}
            alt="Background Frame"
            className="w-full h-full object-cover opacity-90"
          />
        </div>

        {/* 2. Rippled Water Layer - Masked OUT in the center */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ 
            filter: "url(#water-ripple)",
            // INVERTED MASK: 
            // Center is transparent (hides ripples, shows solid frame)
            // Edges are black (shows ripples, water moves)
            maskImage: "radial-gradient(ellipse at center, transparent 35%, black 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, transparent 35%, black 70%)"
          }}
        >
          <img
            src={bgImage}
            alt="Water animation"
            className="w-full h-full object-cover opacity-90"
          />
        </motion.div>
        
        {/* Subtle Texture Overlay - Moving with the raft for realism */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-[0.3]" />
        
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>

      <main className="relative z-10 flex-1 w-full min-h-screen">
        {/* Content can go here if needed */}
      </main>
    </motion.div>
  );
}
