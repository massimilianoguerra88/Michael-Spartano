import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";

export default function Performance() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-background text-foreground flex flex-col"
    >
      <Navigation />
      <main className="flex-1 flex items-center justify-center p-6">
        <h1 className="text-3xl font-serif opacity-50">Performance</h1>
      </main>
    </motion.div>
  );
}
