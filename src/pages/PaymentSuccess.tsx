import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <CheckCircle className="w-20 h-20 text-accent mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Успешная Оплата!</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Поздравляем! Вы успешно записались на ИИ Буткемп по Приложениям.
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Что Дальше?</h2>
          <ul className="text-left space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              Вы получите подтверждение на email в течение 5 минут
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              Ссылка на приватное сообщество в Telegram будет отправлена в течение 24 часов
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              Доступ к материалам откроется за 48 часов до начала буткемпа
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              Первый созвон состоится 26 сентября в 19:00 по МСК
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="text-accent font-semibold">
            Добро пожаловать в ИИ Буткемп по Приложениям! 🚀
          </p>
          <Button onClick={() => navigate("/")} variant="outline">
            Вернуться на Главную
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;