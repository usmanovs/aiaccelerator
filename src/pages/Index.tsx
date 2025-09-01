import { HeroSection } from "@/components/HeroSection";
import { SocialProof } from "@/components/SocialProof";
import { ContentSection } from "@/components/ContentSection";
import { InstructorCard } from "@/components/InstructorCard";
import { FrameworkList } from "@/components/FrameworkList";

const Index = () => {
  return (
    <div className="min-h-screen">
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
        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-xl font-bold text-center">
            Фокус, выполнение, повторение, победа.
          </p>
          <p>
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
              <InstructorCard
                name="Сейитбек Усманов"
                bio="Эксперт по разработке с ИИ, создатель множества успешных проектов. Специализируется на обучении предпринимателей созданию приложений без программирования с использованием современных ИИ-инструментов."
                photo="/lovable-uploads/89ce40cd-3a6f-4627-9f3e-5bbb3711a7f8.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
