import { HeroSection } from "@/components/HeroSection";
import { SocialProof } from "@/components/SocialProof";
import { ContentSection } from "@/components/ContentSection";
import { InstructorCard } from "@/components/InstructorCard";
import { FrameworkList } from "@/components/FrameworkList";
import { PaymentButton } from "@/components/PaymentButton";
import { FAQ } from "@/components/FAQ";
import { AnimatedSection } from "@/components/AnimatedSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return <div className="min-h-screen">
      <WhatsAppButton />
      <HeroSection />
      
      <SocialProof />

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gradient mb-4">
                Ваш Инструктор
              </h3>
              <p className="text-xl text-muted-foreground">
                Кто вас учит? Основатель, который действительно создает продукты.
              </p>
            </div>
          </AnimatedSection>
          
          <div className="flex justify-center">
            <div className="max-w-lg">
              <InstructorCard name="Сейитбек Усманов" bio="Эксперт по разработке с ИИ с опытом работы в крупных консалтинговых компаниях Deloitte, Accenture и GDIT. Создатель множества успешных проектов. Специализируется на обучении предпринимателей созданию приложений без программирования с использованием современных ИИ-инструментов." photo="/lovable-uploads/89ce40cd-3a6f-4627-9f3e-5bbb3711a7f8.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-secondary/10">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-gradient mb-6">
            Готовы Начать?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к ИИ Буткемп по Приложениям и создайте свой первый продукт за 2 недели
          </p>
          <PaymentButton className="px-12 py-4 text-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
            Записаться Сейчас
          </PaymentButton>
        </AnimatedSection>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gradient mb-6">
                Программа Обучения
              </h3>
              <p className="text-xl text-muted-foreground">
                14 дней • 4 инструмента • 1 готовое приложение
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {/* Week 1 */}
            <AnimatedSection delay={100}>
              <div className="border border-border rounded-lg p-6">
                <h4 className="text-2xl font-bold text-gradient mb-6">Неделя 1: Основы и Создание</h4>
                
                <div className="grid gap-6">
                  <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">День 1-2: Знакомство и Планирование</h5>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Введение в программу и знакомство с Lovable</li>
                        <li>• Как генерировать идеи для приложений</li>
                        <li>• Выбор и документирование вашей идеи</li>
                        <li>• Настройка проекта и первые шаги</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">День 3-4: Начало Разработки</h5>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Создание базовой структуры приложения</li>
                        <li>• Настройка пользовательского интерфейса</li>
                        <li>• Основы работы с компонентами</li>
                        <li>• Первый прототип функциональности</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">День 5-6: Основная Функциональность</h5>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Создание ключевых функций приложения</li>
                        <li>• Интеграция с базой данных Supabase</li>
                        <li>• Работа с пользовательскими данными</li>
                        <li>• Тестирование основного функционала</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">4</div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">День 7: Отладка и Исправление Ошибок</h5>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Методы диагностики проблем</li>
                        <li>• Фреймворк решения багов 4x4</li>
                        <li>• Оптимизация производительности</li>
                        <li>• Контрольная точка прогресса</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Week 2 */}
            <AnimatedSection delay={200}>
              <div className="border border-border rounded-lg p-6">
                <h4 className="text-2xl font-bold text-gradient mb-6">Неделя 2: Дизайн и Запуск</h4>
                
                <div className="grid gap-6">
                  <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm">5</div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">День 8-9: Дизайн и Полировка</h5>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Улучшение дизайна интерфейса</li>
                        <li>• Работа с библиотеками компонентов</li>
                        <li>• Адаптивная верстка</li>
                        <li>• UX оптимизация</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm">6</div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">День 10-11: Интеграции и Платежи</h5>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Настройка системы платежей Stripe</li>
                        <li>• Интеграция с внешними API</li>
                        <li>• Настройка email уведомлений</li>
                        <li>• Система аутентификации</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm">7</div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">День 12-13: Деплой и SEO</h5>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Развертывание приложения</li>
                        <li>• Настройка SEO параметров</li>
                        <li>• Подключение аналитики</li>
                        <li>• Финальные настройки брендинга</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm">8</div>
                    <div>
                      <h5 className="font-bold text-lg mb-2">День 14: Запуск и Следующие Шаги</h5>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Финальная подготовка к запуску</li>
                        <li>• Стратегии продвижения продукта</li>
                        <li>• Планы развития приложения</li>
                        <li>• Празднование запуска! 🎉</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
                <h4 className="text-2xl font-bold mb-4">Что Включено</h4>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      14-дневный онлайн буткемп
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Еженедельные групповые созвоны
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      Доступ к системе Deep Work OS
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      Приватное сообщество в Telegram
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      Пожизненный доступ к материалам
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      Персональная поддержка инструктора
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* App Ideas Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                💡 Идеи для Разработки
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Примеры приложений, которые вы сможете создать после буткемпа
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8">
            {/* SaaS Apps */}
            <AnimatedSection delay={100}>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gradient mb-6">1. SaaS Сервисы</h3>
                
                <div className="space-y-4">
                  <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <ul className="text-muted-foreground space-y-2">
                      <li>• CRM для салонов красоты и фитнес-клубов</li>
                      <li>• Система управления задачами для малого бизнеса</li>
                      <li>• Платформа для онлайн-обучения</li>
                      <li>• Аналитические дашборды для маркетинга</li>
                    </ul>
                    <div className="mt-4 p-3 bg-primary/10 rounded border border-primary/20">
                      <span className="text-sm font-medium">💰 Монетизация: подписка $10-50/месяц</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Marketplaces */}
            <AnimatedSection delay={200}>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gradient mb-6">2. Маркетплейсы</h3>
                
                <div className="space-y-4">
                  <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Платформа для аренды техники и оборудования</li>
                      <li>• Биржа услуг (репетиторы, фрилансеры, мастера)</li>
                      <li>• Онлайн-магазин с комиссией с продаж</li>
                      <li>• Платформа бронирования для местного бизнеса</li>
                    </ul>
                    <div className="mt-4 p-3 bg-accent/10 rounded border border-accent/20">
                      <span className="text-sm font-medium">💰 Монетизация: комиссия 5-15%, платные аккаунты</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* AI-Powered Apps */}
            <AnimatedSection delay={300}>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gradient mb-6">3. ИИ-Приложения</h3>
                
                <div className="space-y-4">
                  <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Генератор контента для социальных сетей</li>
                      <li>• Персональный помощник для планирования</li>
                      <li>• Анализатор документов и отчетов</li>
                      <li>• Чат-боты для клиентского сервиса</li>
                    </ul>
                    <div className="mt-4 p-3 bg-secondary/10 rounded border border-secondary/20">
                      <span className="text-sm font-medium">💰 Монетизация: freemium модель, API доступ</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Mobile & Web Apps */}
            <AnimatedSection delay={400}>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gradient mb-6">4. Веб и Мобильные Приложения</h3>
                
                <div className="space-y-4">
                  <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <ul className="text-muted-foreground space-y-2">
                      <li>• Трекеры привычек и целей</li>
                      <li>• Социальные сети для ниш</li>
                      <li>• Приложения для здоровья и фитнеса</li>
                      <li>• Инструменты для продуктивности</li>
                    </ul>
                    <div className="mt-4 p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded border border-primary/20">
                      <span className="text-sm font-medium">💰 Монетизация: реклама, премиум функции, покупки в приложении</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-card/30 backdrop-blur-sm p-8 rounded-xl border border-border/50">
              <h4 className="text-2xl font-bold mb-4">Готовы Начать?</h4>
              <p className="text-muted-foreground mb-6">
                Выберите идею и воплотите её в жизнь за 14 дней
              </p>
              <PaymentButton
                size="lg"
                className="px-8 py-4 text-lg font-semibold"
              >
                Записаться Сейчас
              </PaymentButton>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Implementation Example */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              ⚡ Пример Быстрой Реализации
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Как превратить идею в прибыльный бизнес за несколько дней
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">💡 Идея: "CRM для частных репетиторов"</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">Берём идею: "CRM для частных репетиторов"</h4>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">На Lovable описываем:</h4>
                    <p className="text-muted-foreground italic">"Создать приложение для репетиторов с профилями, календарём занятий и оплатой через Stripe"</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">Получаем прототип за несколько часов</h4>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold mb-2">Тестируем на 5-10 знакомых репетиторах</h4>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold mb-2">Делаем сайт и продаём подписку по $15/мес</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl border border-accent/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💰</span>
                <h4 className="text-xl font-bold">Результат:</h4>
              </div>
              <p className="text-lg font-semibold">
                Уже при 50 клиентах — <span className="text-accent">$750/мес</span> пассивного дохода
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
              <h4 className="text-lg font-bold mb-4 text-center">
                Хотите составлю для вас ТОП-10 самых простых и прибыльных идей?
              </h4>
              <p className="text-muted-foreground text-center mb-6">
                Которые реально можно реализовать на Lovable за 1-2 дня с примерным уровнем дохода
              </p>
              <div className="text-center">
                <PaymentButton
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold"
                >
                  Записаться Сейчас
                </PaymentButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </div>;
};
export default Index;