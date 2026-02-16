import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import woodTexture from "@/assets/images/wood-texture.jpg";
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
          className="relative w-full max-w-[320px] md:max-w-[400px] aspect-[3/4]"
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
            className="w-full h-full relative flex items-center justify-center perspective-1000"
          >
            {/* 
              Realistic CSS Frame Construction 
              Using real wood texture and multiple shadows for 3D realism 
            */}
            <div 
              className="relative w-full h-full bg-[#fdfdfd] overflow-hidden"
              style={{
                boxShadow: `
                  0 25px 50px -12px rgba(0, 0, 0, 0.5), 
                  0 0 0 1px rgba(0,0,0,0.1)
                `
              }}
            >
              {/* Wood Frame Border with Real Texture */}
              <div className="absolute inset-0 z-20 pointer-events-none border-[16px] md:border-[20px] border-solid"
                   style={{
                     borderImageSource: `url(${woodTexture})`,
                     borderImageSlice: '30 fill',
                     borderImageWidth: '20px',
                     borderImageOutset: '0',
                     borderImageRepeat: 'stretch',
                     // Fallback color if image fails
                     borderColor: '#8b5a2b',
                     // Inner shadow for depth
                     boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.4), inset 0 0 20px rgba(0,0,0,0.2)'
                   }}
              >
                {/* 3D bevel effect overlay */}
                <div className="absolute inset-0 border-[16px] md:border-[20px] border-white/10 mix-blend-overlay border-t-white/20 border-l-white/20 border-b-black/20 border-r-black/20" />
              </div>
              
              {/* Inner White Canvas */}
              <div className="absolute inset-[16px] md:inset-[20px] bg-[#fcfcfc] flex items-center justify-center">
                 {/* Paper/Canvas Texture */}
                 <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
                 
                 {/* Inner shadow cast by frame onto canvas */}
                 <div className="absolute inset-0 shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)]" />
                 
                 {/* Optional: Slight texture for the canvas itself */}
                 <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px]" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}
