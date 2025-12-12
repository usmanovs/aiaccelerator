import { useState, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const BOOTCAMP_START = new Date("2025-12-22T00:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const translations = {
  en: { days: "Days", hours: "Hours", minutes: "Min", seconds: "Sec", startsIn: "Bootcamp starts in" },
  ru: { days: "Дней", hours: "Часов", minutes: "Мин", seconds: "Сек", startsIn: "До начала буткемпа" },
  fa: { days: "روز", hours: "ساعت", minutes: "دقیقه", seconds: "ثانیه", startsIn: "تا شروع بوت‌کمپ" }
};

export const CountdownTimer = () => {
  const { lang } = useLanguage();
  const t = translations[lang as keyof typeof translations] || translations.en;
  const isRtl = lang === "fa";
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

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

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-accent/20 border border-accent/30 rounded-lg px-3 py-2 md:px-4 md:py-3 min-w-[60px] md:min-w-[80px] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] shadow-[0_0_15px_rgba(var(--accent-rgb),0.3)]">
        <span className="text-2xl md:text-4xl font-bold text-accent tabular-nums">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs md:text-sm text-muted-foreground mt-1 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );

  return (
    <div className="text-center" dir={isRtl ? "rtl" : "ltr"}>
      <p className="text-sm md:text-base text-muted-foreground mb-3">{t.startsIn}</p>
      <div className="flex justify-center gap-2 md:gap-4">
        <TimeBlock value={timeLeft.days} label={t.days} />
        <div className="text-2xl md:text-4xl font-bold text-accent self-start mt-2 md:mt-3">:</div>
        <TimeBlock value={timeLeft.hours} label={t.hours} />
        <div className="text-2xl md:text-4xl font-bold text-accent self-start mt-2 md:mt-3">:</div>
        <TimeBlock value={timeLeft.minutes} label={t.minutes} />
        <div className="text-2xl md:text-4xl font-bold text-accent self-start mt-2 md:mt-3">:</div>
        <TimeBlock value={timeLeft.seconds} label={t.seconds} />
      </div>
    </div>
  );
};
