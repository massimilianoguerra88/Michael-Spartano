import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import locandina1 from "@assets/Locandina_1775767650957.png";

const events = [
  {
    src: locandina1,
    title: "La voce della natura",
    subtitle: "Bagno di suoni e parole",
  },
];

export default function News() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen bg-background text-foreground flex flex-col"
    >
      <div className="relative z-50">
        <Navigation />
      </div>

      <main className="flex-1 w-full pt-28 md:pt-48 px-6 md:px-12 pb-16 md:pb-32 max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-2xl md:text-3xl font-normal font-serif text-foreground/90">
            News
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 + index * 0.1 }}
              className="flex flex-col items-start"
              data-testid={`card-event-${index}`}
            >
              <img
                src={event.src}
                alt={event.title}
                className="w-full object-contain rounded-sm"
                data-testid={`img-event-${index}`}
              />
              <div className="mt-4 space-y-1">
                <p className="font-serif text-lg font-normal text-foreground/90">
                  {event.title}
                </p>
                <p className="font-serif text-base italic text-foreground/75">
                  {event.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </main>
    </motion.div>
  );
}
