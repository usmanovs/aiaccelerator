import { useState, useEffect } from 'react';
import { PaymentButton } from '@/components/PaymentButton';
import { useLanguage } from '@/i18n/LanguageContext';
import { Clock } from 'lucide-react';

const BOOTCAMP_START = new Date("2025-12-22T00:00:00");

const translations = {
  en: { startsIn: "Bootcamp starts in", days: "d", hours: "h", minutes: "m", seconds: "s" },
  ru: { startsIn: "До начала буткемпа", days: "д", hours: "ч", minutes: "м", seconds: "с" },
  fa: { startsIn: "تا شروع بوت‌کمپ", days: "ر", hours: "س", minutes: "د", seconds: "ث" }
};

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

  return (
    <header
      className={`fixed top-1 left-0 w-full z-40 backdrop-blur-md bg-background/95 border-b border-border/50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
      dir={t.dir}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-center gap-3 sm:gap-6">
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
