import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import Placeholder from "@/pages/Placeholder";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/opere">
        {() => <Placeholder title="Opere" />}
      </Route>
      <Route path="/pratica">
        {() => <Placeholder title="Pratica" />}
      </Route>
      <Route path="/educazione">
        {() => <Placeholder title="Educazione" />}
      </Route>
      <Route path="/spazio-sorgente">
        {() => <Placeholder title="Spazio Sorgente" />}
      </Route>
      <Route path="/contatti">
        {() => <Placeholder title="Contatti" />}
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
