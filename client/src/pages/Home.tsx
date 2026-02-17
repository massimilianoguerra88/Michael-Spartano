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
        Water Ripple Effect 
        Solution: We layer the image twice.
        1. Bottom Layer: Static image (provides the clean, undistorted frame).
        2. Top Layer: Rippled image, but with a radial mask so the effect only shows in the center (water),
           fading out before it hits the frame edges.
      */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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

        {/* 2. Rippled Water Layer - Masked to center */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ 
            filter: "url(#water-ripple)",
            // Mask fades out the edges so the distorted frame is hidden, revealing the static frame below
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 70%)"
          }}
        >
          <img
            src={bgImage}
            alt="Water animation"
            className="w-full h-full object-cover opacity-90"
          />
        </motion.div>
        
        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-[0.3]" />
        
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <main className="relative z-10 flex-1 w-full min-h-screen">
        {/* Content can go here if needed */}
      </main>
    </motion.div>
  );
}
