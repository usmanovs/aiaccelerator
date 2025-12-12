import { useCountUp } from "@/hooks/useCountUp";

interface CountUpNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
  inView: boolean;
  delay?: number;
}

export const CountUpNumber = ({ 
  value, 
  suffix = "", 
  duration = 2000, 
  inView,
  delay = 0
}: CountUpNumberProps) => {
  const count = useCountUp({ end: value, duration, start: inView, delay });

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};
