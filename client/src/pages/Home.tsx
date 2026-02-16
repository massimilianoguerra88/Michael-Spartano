import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl space-y-12 md:space-y-16"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-lg md:text-xl font-light italic text-muted-foreground"
          >
            è solo un nome
          </motion.p>

          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight"
            >
              Non sono interessato <br/> al tuo nome.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 1 }}
              className="text-xl md:text-2xl font-light text-muted-foreground"
            >
              L’attenzione va a ciò che sei,<br/> che sono.
            </motion.p>
          </div>
        </motion.div>
      </main>

      {/* Abstract Background Element - Optional, keeps it very clean as per request */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-multiply" />
    </div>
  );
}
