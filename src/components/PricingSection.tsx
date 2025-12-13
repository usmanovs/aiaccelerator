import { Check, Video, Users, AlertCircle, Quote, Shield, Clock, Users2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { PaymentButton } from "./PaymentButton";
import { AnimatedSection } from "./AnimatedSection";

interface ValueItem {
  name: string;
  value: number;
}

export const PricingSection = () => {
  const { t, lang } = useLanguage();
  const isRTL = lang === "fa";

  const tiers = [
    {
      id: "recordings",
      icon: Video,
      price: 149,
      popular: false,
      featuresKey: "recordings" as const,
    },
    {
      id: "live",
      icon: Users,
      price: 300,
      popular: true,
      featuresKey: "live" as const,
    },
  ];

  const calculateTotalValue = (valueItems: ValueItem[] = []) => {
    return valueItems.reduce((sum, item) => sum + item.value, 0);
  };

  const calculateSavingsPercent = (totalValue: number, price: number) => {
    return Math.round(((totalValue - price) / totalValue) * 100);
  };

  return (
    <section className="py-20 px-6" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 text-destructive border border-destructive/20 mb-6 animate-pulse">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">
                {t.pricing?.limitedSpots || "Limited spots available"}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              {t.pricing?.title || "Choose Your Path"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.pricing?.subtitle || "Select the learning experience that fits your schedule"}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => {
            const tierData = t.pricing?.tiers?.[tier.featuresKey];
            const valueItems: ValueItem[] = tierData?.valueItems || [];
            const totalValue = calculateTotalValue(valueItems);
            const savingsPercent = calculateSavingsPercent(totalValue, tier.price);

            return (
              <AnimatedSection key={tier.id} delay={index * 100}>
                <div
                  className={`relative rounded-2xl border p-8 h-full flex flex-col ${
                    tier.popular
                      ? "border-primary bg-gradient-to-b from-primary/10 to-transparent shadow-lg shadow-primary/10"
                      : "border-border bg-card/50"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                        {t.pricing?.popular || "Most Popular"}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 ${
                        tier.popular
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <tier.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">
                      {tierData?.name || tier.id}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {tierData?.description || ""}
                    </p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold">${tier.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {t.pricing?.oneTime || "one-time payment"}
                    </p>
                  </div>

                  {/* Value Breakdown */}
                  {valueItems.length > 0 && (
                    <div className="mb-6 p-4 rounded-xl bg-muted/30 border border-border/50">
                      <div className="space-y-2 mb-3">
                        {valueItems.map((item, i) => (
                          <div key={i} className={`flex justify-between text-sm ${isRTL ? "flex-row-reverse" : ""}`}>
                            <span className="text-muted-foreground">{item.name}</span>
                            <span className="font-medium">${item.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-border/50 pt-3 space-y-1">
                        <div className={`flex justify-between text-sm ${isRTL ? "flex-row-reverse" : ""}`}>
                          <span className="text-muted-foreground">{t.pricing?.totalValue || "Total Value"}</span>
                          <span className="line-through text-muted-foreground">${totalValue}</span>
                        </div>
                        <div className={`flex justify-between text-sm ${isRTL ? "flex-row-reverse" : ""}`}>
                          <span className="text-muted-foreground">{t.pricing?.youPay || "You Pay"}</span>
                          <span className="font-bold text-foreground">${tier.price}</span>
                        </div>
                        <div className={`flex justify-between items-center ${isRTL ? "flex-row-reverse" : ""}`}>
                          <span className="text-sm text-muted-foreground">{t.pricing?.youSave || "You Save"}</span>
                          <span className="text-sm font-bold text-accent bg-accent/20 px-3 py-1 rounded-full animate-pulse shadow-lg shadow-accent/30">
                            {savingsPercent}%
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <ul className="space-y-3 mb-8 flex-grow">
                    {(tierData?.features || []).map(
                      (feature: string, i: number) => (
                        <li key={i} className={`flex items-start gap-3 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                          <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                          <span className="text-foreground/90">{feature}</span>
                        </li>
                      )
                    )}
                  </ul>

                  <PaymentButton
                    className={`w-full py-4 text-lg font-semibold ${
                      tier.popular
                        ? ""
                        : "bg-muted text-foreground hover:bg-muted/80"
                    }`}
                    variant={tier.popular ? "default" : "secondary"}
                    tier={tier.featuresKey}
                  >
                    {t.pricing?.cta || "Enroll Now"}
                  </PaymentButton>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Trust Section */}
        <AnimatedSection delay={300}>
          <div className="mt-16 max-w-3xl mx-auto">
            {/* Testimonial Quote */}
            <div className="relative bg-card/50 border border-border rounded-2xl p-8 mb-8">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/20" />
              <p className={`text-lg text-foreground/80 italic mb-4 ${isRTL ? "text-right pr-8" : "pl-8"}`}>
                "{t.pricing?.trust?.quote || "This bootcamp changed my perspective on building products. I launched my first app in just 10 days!"}"
              </p>
              <p className={`text-sm font-semibold text-muted-foreground ${isRTL ? "text-right" : "text-left"}`}>
                — {t.pricing?.trust?.author || "Alex K., Bootcamp Graduate"}
              </p>
            </div>

            {/* Trust Badges */}
            <div className={`flex flex-wrap justify-center gap-6 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{t.pricing?.trust?.students || "200+ students"}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{t.pricing?.trust?.satisfaction || "100% money-back guarantee"}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{t.pricing?.trust?.support || "Lifetime access"}</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
