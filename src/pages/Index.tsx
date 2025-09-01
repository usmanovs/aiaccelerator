import { HeroSection } from "@/components/HeroSection";
import { SocialProof } from "@/components/SocialProof";
import { ContentSection } from "@/components/ContentSection";
import { InstructorCard } from "@/components/InstructorCard";
import { FrameworkList } from "@/components/FrameworkList";
import { PaymentButton } from "@/components/PaymentButton";
const Index = () => {
  return <div className="min-h-screen">
      <HeroSection />
      
      <SocialProof />

      <ContentSection number="01" title="Сдвиг Парадигмы">
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Большинство людей думают, что для создания приложения нужно уметь программировать и иметь глубокие технические знания.
          </p>
          <p className="text-xl font-semibold">
            Это не так.
          </p>
          <p>
            При правильном подходе ИИ может создать приложение за вас — вам нужно только знать, как его направлять.
          </p>
          <p>
            Именно поэтому мы создали <strong>ИИ Буткемп по Приложениям</strong> — двухнедельный спринт, где вы:
          </p>
          <ul className="list-disc list-inside space-y-3 ml-6">
            <li>Научитесь использовать инструменты ИИ для решения любых задач</li>
            <li>Научитесь думать как разработчик, дизайнер <strong>и</strong> предприниматель</li>
            <li><strong>Создадите реальный, рабочий продукт</strong></li>
          </ul>
          <p>всё это вместе с группой единомышленников.</p>
        </div>
      </ContentSection>

      <ContentSection number="02" title="Действие">
        <div className="space-y-6 text-lg leading-relaxed text-left">
          <p className="text-xl font-bold text-left">
            Фокус, выполнение, повторение, победа.
          </p>
          <p className="text-left">
            ИИ Буткемп по Приложениям — это НЕ хак. Это про <strong>ДЕЙСТВИЕ</strong>.
          </p>
          <p>
            Большинство новичков тратят месяцы, застревая на технических препятствиях, настраивая кнопки и сомневаясь в себе.
          </p>
          <p className="text-xl font-semibold text-gradient">
            Основатели, которые зарабатывают деньги, фокусируются на создании и запуске продуктов.
          </p>
          <p>
            Lovable делает это возможным — без необходимости сначала осваивать программирование.
          </p>
          <p>
            Всего за две недели вы пройдете путь от идеи до реального приложения быстрее, чем когда-либо.
          </p>
          <p>
            И вы не будете делать это в одиночку. Вы станете частью группы основателей, которые будут делиться отзывами, идеями и поддержкой на каждом этапе пути.
          </p>
        </div>
      </ContentSection>

      <ContentSection number="03" title="Методология">
        <div className="space-y-8">
          <div className="text-lg leading-relaxed space-y-6">
            <h4 className="text-2xl font-bold text-gradient">
              Овладейте Искусством (и Наукой) Создания с ИИ
            </h4>
            <p>
              Вместо того чтобы тратить время на руководства, показывающие, как создать случайное приложение, которое вы никогда не будете использовать, этот спринт учит вас думать как разработчик и фактически использовать инструменты ИИ для создания реальных, рабочих продуктов.
            </p>
            
            <h5 className="text-xl font-bold mt-8 mb-6">Что Вы Изучите</h5>
          </div>
          
          <FrameworkList />
        </div>
      </ContentSection>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gradient mb-4">
              Ваш Инструктор
            </h3>
            <p className="text-xl text-muted-foreground">
              Кто вас учит? Основатель, который действительно создает продукты.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="max-w-lg">
              <InstructorCard name="Сейитбек Усманов" bio="Эксперт по разработке с ИИ с опытом работы в крупных консалтинговых компаниях Deloitte, Accenture и GDIT. Создатель множества успешных проектов. Специализируется на обучении предпринимателей созданию приложений без программирования с использованием современных ИИ-инструментов." photo="/lovable-uploads/89ce40cd-3a6f-4627-9f3e-5bbb3711a7f8.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-gradient mb-6">
            Готовы Начать?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Присоединяйтесь к ИИ Буткемп по Приложениям и создайте свой первый продукт за 2 недели
          </p>
          <PaymentButton className="px-12 py-4 text-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
            Записаться Сейчас - $300
          </PaymentButton>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gradient mb-6">
              Программа Обучения
            </h3>
            <p className="text-xl text-muted-foreground">
              14 дней • 28 уроков • 4 инструмента • 1 готовое приложение
            </p>
          </div>

          <div className="space-y-8">
            {/* Week 1 */}
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

            {/* Week 2 */}
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
          </div>
        </div>
      </section>

      {/* App Ideas Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
              💡 Идеи для Разработки
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Примеры приложений, которые вы сможете создать после буткемпа
            </p>
          </div>

          <div className="grid gap-8">
            {/* SaaS Apps */}
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

            {/* Marketplaces */}
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

            {/* AI-Powered Apps */}
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

            {/* Mobile & Web Apps */}
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
                Записаться на Буткемп
              </PaymentButton>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;