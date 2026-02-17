import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";
import Home from "@/pages/Home";
import Opere from "@/pages/Opere";
import Placeholder from "@/pages/Placeholder";
import MichaelSpartano from "@/pages/MichaelSpartano";
import SpazioSorgente from "@/pages/SpazioSorgente";
import Contatti from "@/pages/Contatti";
import NonDualismo from "@/pages/pratica/NonDualismo";
import Arte from "@/pages/pratica/Arte";
import Musica from "@/pages/pratica/Musica";
import Performance from "@/pages/opere/Performance";
import Disegni from "@/pages/opere/Disegni";
import Poesie from "@/pages/opere/Poesie";
import Oggetti from "@/pages/opere/Oggetti";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location}>
        <Route path="/" component={Home} />
        <Route path="/michael-spartano" component={MichaelSpartano} />
        <Route path="/opere" component={Opere} />
        <Route path="/opere/performance" component={Performance} />
        <Route path="/opere/disegni" component={Disegni} />
        <Route path="/opere/poesie" component={Poesie} />
        <Route path="/opere/oggetti" component={Oggetti} />
        <Route path="/pratica">
          {() => <Placeholder title="Pratica" />}
        </Route>
        <Route path="/pratica/non-dualismo" component={NonDualismo} />
        <Route path="/pratica/arte" component={Arte} />
        <Route path="/pratica/musica" component={Musica} />
        <Route path="/educazione">
          {() => <Placeholder title="Educazione" />}
        </Route>
        <Route path="/spazio-sorgente" component={SpazioSorgente} />
        <Route path="/contatti" component={Contatti} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
      <div className="fixed inset-0 pointer-events-none opacity-[0.07] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-multiply" />
    </QueryClientProvider>
  );
}

export default App;
