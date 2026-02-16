import { Navigation } from "@/components/Navigation";

export default function NonDualismo() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
       <div className="relative z-50">
         <style>{`
           nav { 
             mix-blend-mode: normal !important; 
             color: black !important;
             background: transparent !important;
             position: relative !important;
           }
           nav a { opacity: 1 !important; }
           nav span { color: black !important; }
         `}</style>
         <Navigation />
      </div>
      <main className="flex-1 flex items-center justify-center p-6">
        <h1 className="text-3xl font-serif opacity-50">Pratica: Non-Dualismo</h1>
      </main>
    </div>
  );
}
