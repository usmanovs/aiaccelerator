import { Check, Video, Users } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { PaymentButton } from "./PaymentButton";
import { AnimatedSection } from "./AnimatedSection";

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

  return (
    <section className="py-20 px-6" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              {t.pricing?.title || "Choose Your Path"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.pricing?.subtitle || "Select the learning experience that fits your schedule"}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tiers.map((tier, index) => (
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
                    {t.pricing?.tiers?.[tier.featuresKey]?.name || tier.id}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {t.pricing?.tiers?.[tier.featuresKey]?.description || ""}
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

                <ul className="space-y-3 mb-8 flex-grow">
                  {(t.pricing?.tiers?.[tier.featuresKey]?.features || []).map(
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
                >
                  {t.pricing?.cta || "Enroll Now"}
                </PaymentButton>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
