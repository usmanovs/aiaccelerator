import { useCountUp } from "@/hooks/useCountUp";

interface CountUpNumberProps {
  value: number;
  suffix?: string;
  duration?: number;
  inView: boolean;
}

export const CountUpNumber = ({ 
  value, 
  suffix = "", 
  duration = 2000, 
  inView 
}: CountUpNumberProps) => {
  const count = useCountUp({ end: value, duration, start: inView });

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};
