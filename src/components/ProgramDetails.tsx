import { Heart, Database, CreditCard, Bot } from "lucide-react";

interface DetailItemProps {
  label: string;
  value: string;
  highlight?: boolean;
}

const DetailItem = ({ label, value, highlight }: DetailItemProps) => (
  <div className="flex flex-col space-y-2">
    <span className="text-muted-foreground text-sm uppercase tracking-wider">{label}</span>
    <span className={`text-lg font-semibold ${highlight ? 'text-gradient' : 'text-foreground'}`}>
      {value}
    </span>
  </div>
);

export const ProgramDetails = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gradient mb-4">
            Детали Программы
          </h3>
          <p className="text-xl text-muted-foreground">
            Всё что нужно знать о буткемпе
          </p>
        </div>

        <div className="gradient-card rounded-2xl p-8 md:p-12 shadow-card">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DetailItem label="Первое занятие" value="26 сентября, 2025" />
            <DetailItem label="Demo Day" value="15 октября, 2025" />
            <DetailItem label="Длительность" value="14 дней" />
            <DetailItem label="Дни занятий" value="Пн, Ср, Пт" />
            <DetailItem label="Время" value="4pm - 5pm NY" />
            <DetailItem label="Цель" value="$10,000/месяц" highlight />
            <DetailItem label="Стоимость" value="$300" highlight />
            <DetailItem label="Инструктор" value="Seyitbek Usmanov" />
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="mb-8">
              <h4 className="text-xl font-bold text-foreground mb-4">О Цели $10,000/месяц</h4>
              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Наша цель — научить вас создавать приложения, которые могут генерировать $10,000 в месяц. Это реалистичная цель для SaaS-продукта с 200-300 пользователями, платящими $30-50/месяц. За 14 дней вы изучите не только создание приложения, но и стратегии монетизации, маркетинг и масштабирование бизнеса.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Инструменты</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Loveable', icon: Heart },
                    { name: 'Supabase', icon: Database },
                    { name: 'Stripe', icon: CreditCard },
                    { name: 'ChatGPT', icon: Bot }
                  ].map((tool) => {
                    const IconComponent = tool.icon;
                    return (
                      <span 
                        key={tool.name}
                        className="px-4 py-2 bg-accent/10 text-accent border border-accent/30 rounded-lg font-medium flex items-center gap-2"
                      >
                        <IconComponent className="w-4 h-4" />
                        {tool.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold text-foreground mb-4">Этапы</h4>
                <div className="space-y-3">
                  {['Ideation', 'Building', 'Marketing', 'Monetization'].map((stage, index) => (
                    <div key={stage} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-accent text-accent-foreground flex items-center justify-center text-sm font-bold mr-4">
                        {index + 1}
                      </div>
                      <span className="text-foreground font-medium">{stage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};