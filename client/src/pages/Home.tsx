import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import woodTexture from "@/assets/images/wood-texture-light.jpg";
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
                Fixed: Removed border-image fill to ensure center is transparent
                Used simple div nesting for robustness
              */}
              <div 
                className="relative w-full h-full bg-transparent"
                style={{
                  transform: 'rotate(0deg)', // Rotation handled by parent
                  filter: 'drop-shadow(10px 30px 20px rgba(0,0,0,0.5))'
                }}
              >
                {/* 
                  Frame Container 
                  Background is wood texture. Flex layout centers the canvas.
                */}
                <div 
                  className="w-full h-full relative flex items-center justify-center bg-[#8b5a2b]"
                  style={{
                    backgroundImage: `url(${woodTexture})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)'
                  }}
                >
                  {/* Outer Bevel / Light edge */}
                  <div className="absolute inset-0 border border-white/10 mix-blend-overlay" />

                  {/* 
                    Inner Canvas 
                    White background sits ON TOP of wood, leaving a border around it.
                    This creates the frame effect.
                    calc(100% - 28px) creates a 14px border on each side.
                  */}
                  <div 
                    className="relative bg-[#ffffff] flex items-center justify-center"
                    style={{
                      width: 'calc(100% - 28px)', // 14px border * 2
                      height: 'calc(100% - 28px)', // 14px border * 2
                      boxShadow: 'inset 1px 2px 8px rgba(0,0,0,0.2)' // Inner shadow
                    }}
                  >
                     {/* Paper/Canvas Texture */}
                     <div className="absolute inset-0 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
                     
                     {/* Subtle uneven surface effect */}
                     <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent mix-blend-overlay" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>
    </motion.div>
  );
}
