import { ShieldCheck } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const GuaranteeBadge = () => {
  const { t, lang } = useLanguage();
  const isRTL = lang === "fa";

  return (
    <div
      className={`relative w-full max-w-md mx-auto ${isRTL ? "rtl" : ""}`}
    >
      <div className="relative rounded-xl border border-accent/30 bg-card/50 backdrop-blur-sm p-4 sm:p-5">
        {/* Gradient glow effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/10 via-transparent to-accent/10 pointer-events-none" />
        
        <div className={`relative flex items-start gap-3 sm:gap-4 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
          {/* Shield icon with animation */}
          <div className="flex-shrink-0">
            <div className="relative">
              <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-accent animate-pulse" />
              <div className="absolute inset-0 w-8 h-8 sm:w-10 sm:h-10 bg-accent/20 rounded-full blur-md animate-pulse" />
            </div>
          </div>
          
          {/* Text content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-sm sm:text-base font-bold text-foreground uppercase tracking-wide mb-1">
              {t.guarantee?.title || "Build Your First App or Money Back"}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {t.guarantee?.description || "We're so confident in our program that if you don't build a working app by the end of the bootcamp, we'll refund your payment. No questions asked."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
