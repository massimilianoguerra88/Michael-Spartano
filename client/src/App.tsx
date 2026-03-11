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
import Educazione from "@/pages/Educazione";
import NonDualismo from "@/pages/pratica/NonDualismo";
import Arte from "@/pages/pratica/Arte";
import Musica from "@/pages/pratica/Musica";
import FioredellaVita from "@/pages/pratica/FioredellaVita";
import StoneBalancing from "@/pages/pratica/StoneBalancing";
import DipingereNaturalmente from "@/pages/pratica/DipingereNaturalmente";
import TracceDiFango from "@/pages/pratica/TracceDiFango";
import CorpoNatura from "@/pages/pratica/CorpoNatura";
import Meditazione from "@/pages/pratica/Meditazione";
import SessioneIndividuale from "@/pages/pratica/SessioneIndividuale";
import Seminario from "@/pages/pratica/Seminario";
import Performance from "@/pages/opere/Performance";
import Disegni from "@/pages/opere/Disegni";
import Poesie from "@/pages/opere/Poesie";
import Oggetti from "@/pages/opere/Oggetti";
import LandArt from "@/pages/opere/LandArt";
import AMetaNotte from "@/pages/opere/poesie/AMetaNotte";
import MappaVuota from "@/pages/opere/poesie/MappaVuota";
import CaraNatura from "@/pages/opere/poesie/CaraNatura";
import ImmobileComeMe from "@/pages/opere/poesie/ImmobileComeMe";
import IlSilenzioDelleParole from "@/pages/opere/poesie/IlSilenzioDelleParole";
import CioCheSei from "@/pages/opere/poesie/CioCheSei";
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
        <Route path="/opere/poesie/a-meta-notte" component={AMetaNotte} />
        <Route path="/opere/poesie/mappa-vuota" component={MappaVuota} />
        <Route path="/opere/poesie/cara-natura" component={CaraNatura} />
        <Route path="/opere/poesie/immobile-come-me" component={ImmobileComeMe} />
        <Route path="/opere/poesie/il-silenzio-delle-parole" component={IlSilenzioDelleParole} />
        <Route path="/opere/poesie/cio-che-sei" component={CioCheSei} />
        <Route path="/opere/oggetti" component={Oggetti} />
        <Route path="/pratica">
          {() => <Placeholder title="Pratica" />}
        </Route>
        <Route path="/pratica/non-dualismo" component={NonDualismo} />
        <Route path="/pratica/non-dualismo/sessione-individuale" component={SessioneIndividuale} />
        <Route path="/pratica/non-dualismo/seminario" component={Seminario} />
        <Route path="/pratica/non-dualismo/meditazione" component={Meditazione} />
        <Route path="/pratica/arte" component={Arte} />
        <Route path="/pratica/arte/il-fiore-della-vita" component={FioredellaVita} />
        <Route path="/opere/land-art" component={LandArt} />
        <Route path="/pratica/arte/corpo-natura" component={CorpoNatura} />
        <Route path="/pratica/arte/tracce-di-fango" component={TracceDiFango} />
        <Route path="/pratica/arte/dipingere-naturalmente" component={DipingereNaturalmente} />
        <Route path="/pratica/arte/stone-balancing" component={StoneBalancing} />
        <Route path="/pratica/musica" component={Musica} />
        <Route path="/educazione" component={Educazione} />
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
