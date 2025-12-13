import { useState, useEffect } from 'react';
import { PaymentButton } from '@/components/PaymentButton';
import { useLanguage } from '@/i18n/LanguageContext';
import { Clock } from 'lucide-react';

const BOOTCAMP_START = new Date("2025-12-22T00:00:00");

const translations = {
  en: { 
    startsIn: "Bootcamp starts in", 
    days: "d", hours: "h", minutes: "m", seconds: "s",
    nav: {
      testimonials: "Reviews",
      instructor: "Instructor",
      pricing: "Pricing",
      program: "Program",
      contact: "Contact"
    }
  },
  ru: { 
    startsIn: "До начала буткемпа", 
    days: "д", hours: "ч", minutes: "м", seconds: "с",
    nav: {
      testimonials: "Отзывы",
      instructor: "Инструктор",
      pricing: "Цены",
      program: "Программа",
      contact: "Контакт"
    }
  },
  fa: { 
    startsIn: "تا شروع بوت‌کمپ", 
    days: "ر", hours: "س", minutes: "د", seconds: "ث",
    nav: {
      testimonials: "نظرات",
      instructor: "مربی",
      pricing: "قیمت",
      program: "برنامه",
      contact: "تماس"
    }
  }
};

const navItems = [
  { id: 'testimonials', key: 'testimonials' },
  { id: 'instructor', key: 'instructor' },
  { id: 'pricing', key: 'pricing' },
  { id: 'program', key: 'program' },
  { id: 'contact', key: 'contact' },
] as const;

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const { t, lang } = useLanguage();
  const labels = translations[lang as keyof typeof translations] || translations.en;

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = BOOTCAMP_START.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-1 left-0 w-full z-40 backdrop-blur-md bg-background/95 border-b border-border/50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
      dir={t.dir}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-center gap-2 sm:gap-4 lg:gap-6">
        {/* Navigation Links - Hidden on mobile */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="px-2 lg:px-3 py-1.5 text-xs lg:text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent/50"
            >
              {labels.nav[item.key]}
            </button>
          ))}
        </nav>

        {/* Divider - Hidden on mobile */}
        <div className="hidden md:block w-px h-6 bg-border/50" />

        {/* Countdown */}
        <div className="flex items-center gap-2 text-accent">
          <Clock className="h-4 w-4 animate-pulse" />
          <span className="hidden sm:inline text-xs text-muted-foreground">{labels.startsIn}:</span>
          <span className="text-xs sm:text-sm font-mono tabular-nums">
            <span className="font-bold">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="text-muted-foreground">{labels.days}</span>
            <span className="mx-1">:</span>
            <span className="font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-muted-foreground">{labels.hours}</span>
            <span className="mx-1">:</span>
            <span className="font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-muted-foreground">{labels.minutes}</span>
            <span className="mx-1">:</span>
            <span className="font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-muted-foreground">{labels.seconds}</span>
          </span>
        </div>

        <PaymentButton size="sm" className="text-sm">
          {t.hero.cta}
        </PaymentButton>
      </div>
    </header>
  );
};

export default StickyHeader;
