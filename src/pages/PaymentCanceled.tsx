import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { XCircle } from "lucide-react";

const PaymentCanceled = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <XCircle className="w-20 h-20 text-muted-foreground mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Платеж Отменен
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Ничего страшного! Вы можете попробовать еще раз, когда будете готовы.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Нужна Помощь?</h2>
          <p className="text-muted-foreground mb-4">
            Если у вас возникли вопросы или проблемы с оплатой, свяжитесь с нами:
          </p>
          <div className="space-y-2 text-sm">
            <p>📧 Email: support@aibootcamp.ru</p>
            <p>💬 Telegram: @aibootcamp_support</p>
          </div>
        </div>

        <div className="space-x-4">
          <Button onClick={() => navigate("/")} variant="gradient">
            Попробовать Еще Раз
          </Button>
          <Button onClick={() => navigate("/")} variant="outline">
            Вернуться на Главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentCanceled;