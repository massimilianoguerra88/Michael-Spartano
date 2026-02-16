import { Navigation } from "@/components/Navigation";

export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center p-6">
        <h1 className="text-3xl font-serif opacity-50">{title}</h1>
      </main>
    </div>
  );
}
