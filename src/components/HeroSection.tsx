import { useEffect, useRef, useState, useMemo } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";
import { Calendar, Target, User, Rocket, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

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

  // Generate floating particles with memoization - reduced count for subtlety
  const particles = useMemo(() => Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: `${Math.random() * 5}s`,
    duration: `${Math.random() * 4 + 6}s`,
    type: Math.random() > 0.8 ? 'glow' : 'dot',
  })), []);

  // Generate grid intersection dots - reduced for cleaner look
  const gridDots = useMemo(() => Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${(i % 8) * 13 + 6}%`,
    top: `${Math.floor(i / 8) * 18 + 10}%`,
    delay: `${Math.random() * 4}s`,
  })), []);

  // Generate orb glows - more subtle
  const orbs = useMemo(() => [
    { left: '5%', top: '15%', size: 250, color: 'hsl(180 100% 50% / 0.04)', delay: '0s' },
    { left: '85%', top: '25%', size: 200, color: 'hsl(280 80% 60% / 0.03)', delay: '2s' },
    { left: '15%', top: '75%', size: 220, color: 'hsl(280 80% 60% / 0.03)', delay: '4s' },
    { left: '75%', top: '85%', size: 180, color: 'hsl(180 100% 50% / 0.04)', delay: '1s' },
  ], []);

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
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center overflow-hidden"
      dir={t.dir}
    >
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-animated pointer-events-none" />

      {/* Scanning Line Effect */}
      <div className="scan-line pointer-events-none" />

      {/* Orb Glows */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="orb-glow pointer-events-none"
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
            background: orb.color,
            animationDelay: orb.delay,
          }}
        />
      ))}

      {/* Grid Intersection Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {gridDots.map((dot) => (
          <div
            key={dot.id}
            className="particle particle-dot"
            style={{
              left: dot.left,
              top: dot.top,
              width: 3,
              height: 3,
              animationDelay: dot.delay,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`particle ${particle.type === 'glow' ? 'particle-glow' : 'particle-dot'}`}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.type === 'glow' ? particle.size * 8 : particle.size,
              height: particle.type === 'glow' ? particle.size * 8 : particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Radial Vignette */}
      <div className="absolute inset-0 bg-vignette pointer-events-none" />

      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Badge */}
        <div
          className={`mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-2 border border-accent/40 bg-accent/10 px-6 py-3 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent tracking-wide">
              {t.hero.badge}
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="mb-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
            <span
              className={`block text-foreground transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t.hero.title1}
            </span>
            <span
              className={`block text-gradient-cyan transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {t.hero.title2}
            </span>
            <span
              className={`block text-gradient-purple transition-all duration-700 delay-300 ${
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
          className={`mb-16 max-w-2xl mx-auto transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t.hero.description}{" "}
            <span className="text-accent font-semibold">{t.hero.descriptionHighlight}</span>
            {t.hero.descriptionEnd}
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-2">
            {t.hero.subtitle}
          </p>
        </div>

        {/* Info Cards */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {infoCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-accent/30 transition-all duration-300"
            >
              <card.icon className="w-6 h-6 text-accent mb-3" />
              <span className="text-xs text-muted-foreground tracking-wider mb-1">
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
            className="gradient-cta hover:opacity-90 text-foreground px-10 py-6 text-lg font-semibold rounded-full shadow-lg shadow-purple-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105"
          >
            {t.hero.cta}
            <Rocket className="w-5 h-5 ml-2" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`mt-16 transition-all duration-700 delay-800 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={scrollToProgram}
            className="flex flex-col items-center text-muted-foreground hover:text-accent transition-colors"
          >
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
