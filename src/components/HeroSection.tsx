import { ToolBadges } from "./ToolBadges";
import { PaymentButton } from "./PaymentButton";
import heroImage from "@/assets/hero-image.jpg";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center">
      <div className="max-w-6xl mx-auto">
        <ToolBadges />
        
        <div className="mb-8">
          <div className="inline-block border border-accent/30 bg-accent/10 px-6 py-3 rounded-lg backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-accent tracking-wide">
              БУТКЕМП ПО СОЗДАНИЮ ПРИЛОЖЕНИЙ С ПОМОЩЬЮ ИИ
            </h2>
          </div>
          <p className="text-muted-foreground text-sm mb-6">
            21 ноября - 5 декабря, 2025
          </p>
        </div>

        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="block">Превратите Идею</span>
            <span className="block">в Реальное Приложение</span>
            <span className="block text-gradient">Используя Только ИИ</span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="border border-border/30 bg-background/20 px-8 py-6 rounded-xl backdrop-blur-sm">
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
                Проверенная методология для превращения идеи в рабочий продукт менее чем за две недели, без написания кода.
              </p>
            </div>
          </div>

          <PaymentButton
            size="lg"
            className="px-12 py-6 text-lg font-semibold"
          >
            Записаться Сейчас
          </PaymentButton>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-card">
            <img
              src={heroImage}
              alt="Профессионал работает над приложением"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};