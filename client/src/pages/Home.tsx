import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
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
          ref={(el) => {
            if (el) el.playbackRate = 0.25;
          }}
        >
          <source src={waterVideo} type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability if needed, though mix-blend-difference helps */}
        <div className="absolute inset-0 bg-[#0a1520]/20 mix-blend-multiply" />
      </div>

      <main className="relative z-10 flex-1 flex flex-col items-center justify-center min-h-screen p-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
          className="relative w-full max-w-[300px] md:max-w-[380px] aspect-[3/4]"
        >
          {/* Floating animation wrapper */}
          <motion.div
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 0.5, -0.5, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-full h-full relative flex items-center justify-center"
          >
            {/* CSS Constructed Frame */}
            <div className="relative w-full h-full bg-[#fdfdfd] shadow-2xl overflow-hidden">
              {/* Wood Frame Border */}
              <div className="absolute inset-0 border-[12px] md:border-[16px] border-[#8b5a2b] shadow-inner z-20 pointer-events-none" 
                   style={{
                     boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.3)',
                     borderColor: '#966F33', // Warm wood color
                     backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.05)), linear-gradient(45deg, rgba(0,0,0,0.05) 25%, transparent 25%, transparent 75%, rgba(0,0,0,0.05) 75%, rgba(0,0,0,0.05))',
                     backgroundSize: '4px 4px',
                     backgroundPosition: '0 0, 2px 2px'
                   }}
              />
              
              {/* Inner White Canvas with Texture */}
              <div className="absolute inset-[12px] md:inset-[16px] bg-[#fcfcfc] flex items-center justify-center">
                 {/* Paper/Canvas Texture */}
                 <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
                 
                 {/* Subtle Inner Shadow for Depth */}
                 <div className="absolute inset-0 shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)]" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}
