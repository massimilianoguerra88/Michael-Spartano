import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import frameImg from "@/assets/images/frame-isolated-generated.png";
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
             {/* 
                 Canvas Background Layer 
                 Placed behind the frame image. 
                 Sized slightly smaller (inset) to fit inside the frame border.
             */}
             <div className="absolute inset-[14%] bg-[#fcfcfc] shadow-inner" />

             {/* 
                 Frame Image Layer
                 mix-blend-multiply makes the white background (and white canvas area) transparent,
                 leaving only the dark wood frame visible.
                 The white div behind fills the canvas area.
             */}
             <img 
               src={frameImg} 
               alt="Frame floating on water" 
               className="w-full h-auto relative z-10 mix-blend-multiply drop-shadow-2xl opacity-90"
             />
          </motion.div>
        </motion.div>
      </main>
    </motion.div>
  );
}
