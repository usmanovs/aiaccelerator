import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";

export const FAQ = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 border border-border rounded-2xl mx-6 shadow-card" dir={t.dir}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {t.faq.title}
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {t.faq.items.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border border-border rounded-lg p-4 bg-card/50"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline text-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/90 pt-4 whitespace-pre-line">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
