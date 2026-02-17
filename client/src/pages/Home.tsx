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
        Using a tuned SVG Turbulence filter for a subtle liquid distortion
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
                dur="15s" 
                values="0.01 0.02;0.015 0.025;0.01 0.02" 
                repeatCount="indefinite" 
              />
            </feTurbulence>
            <feDisplacementMap 
              in2="turbulence" 
              in="SourceGraphic" 
              scale="15" 
              xChannelSelector="R" 
              yChannelSelector="G" 
            />
          </filter>
        </svg>

        {/* The Image with the Filter Applied */}
        <motion.div
          className="absolute inset-0 w-[105%] h-[105%] -left-[2.5%] -top-[2.5%]"
          style={{ filter: "url(#water-ripple)" }}
        >
          <img
            src={bgImage}
            alt="Water background"
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
