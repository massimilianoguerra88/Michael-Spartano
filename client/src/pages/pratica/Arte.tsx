import { Navigation } from "@/components/Navigation";

export default function Arte() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
       <div className="relative z-50">
         <Navigation />
      </div>
      <main className="flex-1 flex items-center justify-center p-6">
        <h1 className="text-3xl font-serif opacity-50">Pratica: Arte</h1>
      </main>
    </div>
  );
}
