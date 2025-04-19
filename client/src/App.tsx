import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/services";
import Specialties from "@/pages/specialties";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Insurance from "@/pages/insurance";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { useEffect } from "react";
import { useScroll } from "@/hooks/use-scroll";

function App() {
  const [location] = useLocation();
  const { scrollToTop } = useScroll();

  // Handle navigation changes
  useEffect(() => {
    // If the URL contains a hash, let the browser's default behavior handle it
    if (location.includes('#')) return;
    // Otherwise scroll to top on route change
    scrollToTop();
  }, [location, scrollToTop]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <Header />
          <main className="flex-grow">
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/services" component={Services} />
              <Route path="/specialties" component={Specialties} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/insurance" component={Insurance} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
