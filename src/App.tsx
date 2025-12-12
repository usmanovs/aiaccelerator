import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentCanceled from "./pages/PaymentCanceled";
import VibeTools from "./pages/VibeTools";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect root to Russian */}
          <Route path="/" element={<Navigate to="/ru" replace />} />
          
          {/* Language-prefixed routes */}
          <Route path="/:lang" element={<LanguageProvider><Index /></LanguageProvider>} />
          <Route path="/:lang/vibe-tools" element={<LanguageProvider><VibeTools /></LanguageProvider>} />
          <Route path="/:lang/payment-success" element={<LanguageProvider><PaymentSuccess /></LanguageProvider>} />
          <Route path="/:lang/payment-canceled" element={<LanguageProvider><PaymentCanceled /></LanguageProvider>} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
