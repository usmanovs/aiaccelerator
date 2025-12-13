import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface PaymentButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "gradient";
  tier?: "live" | "recordings";
}

export const PaymentButton = ({ children, className, size, variant = "gradient", tier = "live" }: PaymentButtonProps) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handlePayment = async () => {
    try {
      setLoading(true);
      console.log("Starting payment process for tier:", tier);

      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: { email: "guest@example.com", tier }
      });

      if (error) {
        console.error("Payment error:", error);
        toast({
          title: "Ошибка",
          description: "Не удалось создать платежную сессию. Попробуйте еще раз.",
          variant: "destructive",
        });
        return;
      }

      if (data?.url) {
        console.log("Redirecting to Stripe checkout:", data.url);
        window.open(data.url, '_blank');
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (error) {
      console.error("Payment process error:", error);
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при обработке платежа.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handlePayment}
      disabled={loading}
      className={`${className} btn-shimmer animate-glow-pulse hover:animate-none hover:scale-105 transition-transform`}
      size={size}
      variant={variant}
    >
      {loading ? "Обрабатывается..." : children}
    </Button>
  );
};