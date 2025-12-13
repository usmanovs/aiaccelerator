import { useState, useEffect } from 'react';
import { PaymentButton } from '@/components/PaymentButton';
import { useLanguage } from '@/i18n/LanguageContext';

const StickyHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-1 left-0 w-full z-40 backdrop-blur-md bg-background/95 border-b border-border/50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
      dir={t.dir}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <span className="font-bold text-base sm:text-lg text-foreground">
          AI Bootcamp
        </span>
        <PaymentButton size="sm" className="text-sm">
          {t.hero.cta}
        </PaymentButton>
      </div>
    </header>
  );
};

export default StickyHeader;
