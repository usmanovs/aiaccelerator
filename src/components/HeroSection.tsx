import { useEffect, useRef, useState, useMemo } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Calendar, Target, User, Rocket, Mouse } from "lucide-react";
import { Button } from "./ui/button";
import { Header } from "./Header";

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToProgram = () => {
    const programSection = document.getElementById("program");
    if (programSection) {
      programSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Generate subtle grid dots
  const gridDots = useMemo(() => Array.from({ length: 200 }, (_, i) => ({
    id: i,
    left: `${(i % 20) * 5 + 2.5}%`,
    top: `${Math.floor(i / 20) * 10 + 5}%`,
  })), []);

  const infoCards = [
    {
      icon: Calendar,
      label: t.hero.startLabel,
      value: t.hero.startDate,
    },
    {
      icon: Target,
      label: t.hero.goalLabel,
      value: t.hero.goalValue,
    },
    {
      icon: User,
      label: t.hero.instructorLabel,
      value: t.hero.instructorName,
    },
    {
      icon: Rocket,
      label: t.hero.demoDayLabel,
      value: t.hero.demoDayDate,
    },
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-12 text-center overflow-hidden"
      dir={t.dir}
    >
      {/* Header */}
      <Header />

      {/* Subtle Grid Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {gridDots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-[2px] h-[2px] rounded-full bg-accent/10"
            style={{ left: dot.left, top: dot.top }}
          />
        ))}
      </div>

      {/* Subtle Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(180 100% 50% / 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(180 100% 50% / 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-vignette pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <div
          className={`mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 border border-accent/50 bg-transparent px-6 py-2.5 rounded-full">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent tracking-wide">
              {t.hero.badge}
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight">
            <span
              className={`block text-foreground italic transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t.hero.title1}
            </span>
            <span
              className={`block text-gradient-cyan italic transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t.hero.title2}
            </span>
            <span
              className={`block text-gradient-purple italic transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t.hero.title3}
            </span>
            <span
              className={`block text-foreground transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span>{t.hero.title4?.split(" ").slice(0, -1).join(" ")} </span>
              <span className="text-gradient-cyan">{t.hero.title4?.split(" ").slice(-1)}</span>
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`mb-14 max-w-2xl mx-auto transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t.hero.description}{" "}
            <span className="text-accent font-semibold">{t.hero.descriptionHighlight}</span>
            {t.hero.descriptionEnd}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-1">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Info Cards */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 max-w-4xl mx-auto transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-5 md:p-6 rounded-xl border border-border/30 bg-card/20 backdrop-blur-sm hover:border-accent/20 transition-all duration-300"
            >
              <card.icon className="w-5 h-5 text-accent mb-3" />
              <span className="text-[10px] md:text-xs text-muted-foreground tracking-widest uppercase mb-1">
                {card.label}
              </span>
              <span className="text-sm md:text-base font-semibold text-foreground">
                {card.value}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            onClick={scrollToProgram}
            size="lg"
            className="gradient-cta hover:opacity-90 text-foreground px-12 py-6 text-lg font-semibold rounded-full shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105"
          >
            {t.hero.cta}
            <Rocket className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Scroll Indicator - Mouse Icon */}
        <div
          className={`mt-14 transition-all duration-700 delay-800 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={scrollToProgram}
            className="flex flex-col items-center text-muted-foreground/50 hover:text-accent transition-colors group"
          >
            <div className="relative w-6 h-10 border-2 border-current rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
