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
      className="relative min-h-screen w-full overflow-hidden bg-[#05101a]"
    >
      <Navigation />
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60 brightness-[0.65] contrast-[1.1] saturate-[0.8]"
          ref={(el) => {
            if (el) el.playbackRate = 0.25;
          }}
        >
          <source src={waterVideo} type="video/mp4" />
        </video>
        {/* Dark Blue Overlay to match reference */}
        <div className="absolute inset-0 bg-[#020b14]/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[#0a1f2e]/20 mix-blend-overlay" />
      </div>

      <main className="relative z-10 flex-1 w-full min-h-screen">
        <div className="absolute inset-0 flex items-center justify-end px-6 md:px-12 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, rotate: 12, x: 50 }}
            animate={{ opacity: 1, scale: 1, rotate: 15, x: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className="relative w-full max-w-[280px] md:max-w-[340px] aspect-[3/4] mr-0 md:mr-16 lg:mr-32"
          >
            {/* Floating animation wrapper */}
            <motion.div
              animate={{ 
                y: [0, -6, 0],
                rotate: [15, 16, 14, 15] 
              }}
              transition={{ 
                duration: 9, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="w-full h-full relative perspective-1000 origin-center"
            >
              {/* 
                Realistic CSS Frame Construction 
                Using real wood texture and multiple shadows for 3D realism 
              */}
              <div 
                className="relative w-full h-full bg-[#fdfdfd] overflow-hidden"
                style={{
                  transform: 'rotate(0deg)', // Rotation handled by parent
                  boxShadow: `
                    10px 30px 60px -10px rgba(0, 0, 0, 0.6), 
                    0 0 0 1px rgba(0,0,0,0.1)
                  `
                }}
              >
                {/* Wood Frame Border with Real Texture - Thinner as per reference */}
                <div className="absolute inset-0 z-20 pointer-events-none border-[12px] md:border-[14px] border-solid"
                     style={{
                       borderImageSource: `url(${woodTexture})`,
                       borderImageSlice: '30 fill',
                       borderImageWidth: '14px',
                       borderImageOutset: '0',
                       borderImageRepeat: 'stretch',
                       borderColor: '#8b5a2b',
                       boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.4), inset 0 0 15px rgba(0,0,0,0.1)'
                     }}
                >
                  {/* Light reflection on frame */}
                  <div className="absolute inset-0 border-[12px] md:border-[14px] border-white/5 mix-blend-overlay" />
                </div>
                
                {/* Inner White Canvas */}
                <div className="absolute inset-[12px] md:inset-[14px] bg-[#f8f8f8] flex items-center justify-center">
                   {/* Paper/Canvas Texture */}
                   <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
                   
                   {/* Inner shadow cast by frame onto canvas - deeper for realism */}
                   <div className="absolute inset-0 shadow-[inset_2px_4px_12px_rgba(0,0,0,0.15)]" />
                   
                   {/* Subtle uneven surface effect */}
                   <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent mix-blend-overlay" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}
