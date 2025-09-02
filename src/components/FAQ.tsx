import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  return (
    <section className="py-20 px-6 border border-border rounded-2xl mx-6 shadow-card">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Часто Задаваемые Вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="item-1" className="border border-border rounded-lg p-4 bg-card/50">
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              Для кого предназначена эта программа?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/90 pt-4">
              Программа разработана для занятых людей с основной работой или плотным графиком, 
              которые готовы изучить использование ИИ инструментов для создания приложений и 
              воплощения своих идей в жизнь, а не просто пассивно смотреть уроки.
              <br /><br />
              Вам нужно быть готовым создать реальный продукт, который вы хотите развивать, 
              и готовым работать каждый день понемногу.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border border-border rounded-lg p-4 bg-card/50">
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              Какой уровень сложности у этой программы?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/90 pt-4">
              Эта программа разработана для начинающих. Мы предоставляем пошаговое руководство 
              и поддержку, чтобы помочь вам развить навыки с нуля. Никакого опыта программирования 
              не требуется - мы используем исключительно ИИ инструменты.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border border-border rounded-lg p-4 bg-card/50">
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              Какие инструменты или подписки мне понадобятся для буткемпа?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/90 pt-4">
              <div className="space-y-3">
                <p>• Рабочий компьютер или ноутбук</p>
                <p>• <strong>Lovable Pro Plan ($25/месяц)</strong> - Основной инструмент для создания приложения. 
                Хотя есть бесплатная версия, мы настоятельно рекомендуем Pro план для полноценного 
                приложения за 14 дней.</p>
                <p>• <strong>Supabase</strong> - Бесплатно до 2 проектов, что обычно достаточно для 
                запуска вашего приложения без дополнительных затрат.</p>
                <p>• <strong>ChatGPT Plus или Claude Pro</strong> - Для продвинутых возможностей ИИ ($20/месяц)</p>
                <br />
                <p className="text-sm italic">
                  <strong>Примечание:</strong> Мы также предложим несколько дополнительных инструментов 
                  для упрощения разработки. Большинство из них имеют щедрые бесплатные планы, 
                  так что вам не придется тратить много сверх основных подписок.
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border border-border rounded-lg p-4 bg-card/50">
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              Нужен ли мне опыт программирования?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/90 pt-4">
              Абсолютно нет! Весь буткемп построен на использовании ИИ инструментов. 
              Вы научитесь "разговаривать" с ИИ для создания приложений, не написав ни строчки кода. 
              Это революционный подход, который делает разработку приложений доступной для всех.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border border-border rounded-lg p-4 bg-card/50">
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              Сколько времени нужно уделять каждый день?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/90 pt-4">
              Программа разработана для занятых людей. Достаточно 1-2 часов в день для прохождения 
              материала и работы над проектом. Уроки можно проходить в своем темпе, 
              но регулярность - ключ к успеху.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border border-border rounded-lg p-4 bg-card/50">
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              Что если я застряну или у меня возникнут вопросы?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/90 pt-4">
              У вас будет доступ к:
              <br />• Еженедельным live сессиям с инструктором для вопросов и ответов
              <br />• Приватной группе участников для взаимной поддержки
              <br />• Прямому доступу к инструктору через платформу
              <br />• Библиотеке готовых решений типичных проблем
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border border-border rounded-lg p-4 bg-card/50">
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              Гарантируете ли вы результат?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/90 pt-4">
              Если вы пройдете все уроки и выполните задания, но не создадите рабочее приложение, 
              мы вернем 100% стоимости. Наша методология проверена - более 200 студентов уже 
              создали свои первые приложения.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};