import { HeroSection } from "@/components/HeroSection";
import { SocialProof } from "@/components/SocialProof";
import { InstructorCard } from "@/components/InstructorCard";
import { PaymentButton } from "@/components/PaymentButton";
import { FAQ } from "@/components/FAQ";
import { AnimatedSection } from "@/components/AnimatedSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactSection } from "@/components/ContactSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
const Index = () => {
  const {
    t
  } = useLanguage();
  return <div className="min-h-screen" dir={t.dir}>
      <WhatsAppButton />
      <HeroSection />
      
      

      <TestimonialsSection />

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gradient mb-4">
                {t.instructor.title}
              </h3>
              <p className="text-xl text-muted-foreground">
                {t.instructor.subtitle}
              </p>
            </div>
          </AnimatedSection>
          
          <div className="flex justify-center">
            <div className="max-w-lg">
              <InstructorCard name={t.instructor.name} bio={t.instructor.bio} photo="/lovable-uploads/89ce40cd-3a6f-4627-9f3e-5bbb3711a7f8.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-r from-primary/10 to-secondary/10">
        <AnimatedSection className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-gradient mb-6">
            {t.readyToStart.title}
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t.readyToStart.subtitle}
          </p>
          <PaymentButton className="px-12 py-4 text-xl font-bold hover:scale-105 transition-transform duration-300 shadow-lg">
            {t.readyToStart.cta}
          </PaymentButton>
        </AnimatedSection>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-gradient mb-6">
                {t.program.title}
              </h3>
              <p className="text-xl text-muted-foreground">
                {t.program.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {/* Week 1 */}
            <AnimatedSection delay={100}>
              <div className="border border-border rounded-lg p-6">
                <h4 className="text-2xl font-bold text-gradient mb-6">{t.program.week1.title}</h4>
                
                <Accordion type="single" collapsible className="space-y-3">
                  <AccordionItem value="lesson1" className="bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 px-4">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">1</div>
                        <span className="font-bold text-lg text-left">{t.program.week1.lesson1.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <ul className="text-muted-foreground space-y-1 ml-12">
                        {t.program.week1.lesson1.items.map((item, i) => <li key={i}>• {item}</li>)}
                      </ul>
                      {t.program.week1.lesson1.homework && (
                        <div className="mt-3 ml-12 p-3 bg-accent/10 rounded border border-accent/20">
                          <span className="text-sm font-medium text-accent">📝 {t.lang === 'ru' ? 'Домашнее задание' : t.lang === 'fa' ? 'تکلیف' : 'Homework'}:</span>
                          <p className="text-sm text-muted-foreground mt-1">{t.program.week1.lesson1.homework}</p>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="lesson2" className="bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 px-4">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">2</div>
                        <span className="font-bold text-lg text-left">{t.program.week1.lesson2.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <ul className="text-muted-foreground space-y-1 ml-12">
                        {t.program.week1.lesson2.items.map((item, i) => <li key={i}>• {item}</li>)}
                      </ul>
                      {t.program.week1.lesson2.homework && (
                        <div className="mt-3 ml-12 p-3 bg-accent/10 rounded border border-accent/20">
                          <span className="text-sm font-medium text-accent">📝 {t.lang === 'ru' ? 'Домашнее задание' : t.lang === 'fa' ? 'تکلیف' : 'Homework'}:</span>
                          <p className="text-sm text-muted-foreground mt-1">{t.program.week1.lesson2.homework}</p>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="lesson3" className="bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 px-4">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">3</div>
                        <span className="font-bold text-lg text-left">{t.program.week1.lesson3.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <ul className="text-muted-foreground space-y-1 ml-12">
                        {t.program.week1.lesson3.items.map((item, i) => <li key={i}>• {item}</li>)}
                      </ul>
                      {t.program.week1.lesson3.homework && (
                        <div className="mt-3 ml-12 p-3 bg-accent/10 rounded border border-accent/20">
                          <span className="text-sm font-medium text-accent">📝 {t.lang === 'ru' ? 'Домашнее задание' : t.lang === 'fa' ? 'تکلیف' : 'Homework'}:</span>
                          <p className="text-sm text-muted-foreground mt-1">{t.program.week1.lesson3.homework}</p>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </AnimatedSection>

            {/* Week 2 */}
            <AnimatedSection delay={200}>
              <div className="border border-border rounded-lg p-6">
                <h4 className="text-2xl font-bold text-gradient mb-6">{t.program.week2.title}</h4>
                
                <Accordion type="single" collapsible className="space-y-3">
                  <AccordionItem value="lesson4" className="bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 px-4">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm shrink-0">4</div>
                        <span className="font-bold text-lg text-left">{t.program.week2.lesson4.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <ul className="text-muted-foreground space-y-1 ml-12">
                        {t.program.week2.lesson4.items.map((item, i) => <li key={i}>• {item}</li>)}
                      </ul>
                      {t.program.week2.lesson4.homework && (
                        <div className="mt-3 ml-12 p-3 bg-accent/10 rounded border border-accent/20">
                          <span className="text-sm font-medium text-accent">📝 {t.lang === 'ru' ? 'Домашнее задание' : t.lang === 'fa' ? 'تکلیف' : 'Homework'}:</span>
                          <p className="text-sm text-muted-foreground mt-1">{t.program.week2.lesson4.homework}</p>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="lesson5" className="bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 px-4">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm shrink-0">5</div>
                        <span className="font-bold text-lg text-left">{t.program.week2.lesson5.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <ul className="text-muted-foreground space-y-1 ml-12">
                        {t.program.week2.lesson5.items.map((item, i) => <li key={i}>• {item}</li>)}
                      </ul>
                      {t.program.week2.lesson5.homework && (
                        <div className="mt-3 ml-12 p-3 bg-accent/10 rounded border border-accent/20">
                          <span className="text-sm font-medium text-accent">📝 {t.lang === 'ru' ? 'Домашнее задание' : t.lang === 'fa' ? 'تکلیف' : 'Homework'}:</span>
                          <p className="text-sm text-muted-foreground mt-1">{t.program.week2.lesson5.homework}</p>
                        </div>
                      )}
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="lesson6" className="bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 px-4">
                    <AccordionTrigger className="hover:no-underline py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm shrink-0">6</div>
                        <span className="font-bold text-lg text-left">{t.program.week2.lesson6.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <ul className="text-muted-foreground space-y-1 ml-12">
                        {t.program.week2.lesson6.items.map((item, i) => <li key={i}>• {item}</li>)}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </AnimatedSection>

            {/* What You'll Get */}
            <AnimatedSection delay={250}>
              <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg p-8 border border-accent/20">
                <h4 className="text-2xl font-bold mb-6 text-center">{t.program.whatYouGet.title}</h4>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {t.program.whatYouGet.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-card/30 p-3 rounded-lg">
                      <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm shrink-0">✓</div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
                <h4 className="text-2xl font-bold mb-4">{t.program.included.title}</h4>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <ul className="space-y-3">
                    {t.program.included.items.slice(0, 4).map((item, i) => <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                        {item}
                      </li>)}
                  </ul>
                  <ul className="space-y-3">
                    {t.program.included.items.slice(4).map((item, i) => <li key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-secondary rounded-full shrink-0"></div>
                        {item}
                      </li>)}
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
                {t.appIdeas.title}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t.appIdeas.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-8">
            {/* SaaS Apps */}
            <AnimatedSection delay={100}>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gradient mb-6">{t.appIdeas.saas.title}</h3>
                
                <div className="space-y-4">
                  <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <ul className="text-muted-foreground space-y-2">
                      {t.appIdeas.saas.items.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                    <div className="mt-4 p-3 bg-primary/10 rounded border border-primary/20">
                      <span className="text-sm font-medium">{t.appIdeas.saas.monetization}</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Marketplaces */}
            <AnimatedSection delay={200}>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gradient mb-6">{t.appIdeas.marketplaces.title}</h3>
                
                <div className="space-y-4">
                  <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <ul className="text-muted-foreground space-y-2">
                      {t.appIdeas.marketplaces.items.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                    <div className="mt-4 p-3 bg-accent/10 rounded border border-accent/20">
                      <span className="text-sm font-medium">{t.appIdeas.marketplaces.monetization}</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* AI-Powered Apps */}
            <AnimatedSection delay={300}>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gradient mb-6">{t.appIdeas.ai.title}</h3>
                
                <div className="space-y-4">
                  <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <ul className="text-muted-foreground space-y-2">
                      {t.appIdeas.ai.items.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                    <div className="mt-4 p-3 bg-secondary/10 rounded border border-secondary/20">
                      <span className="text-sm font-medium">{t.appIdeas.ai.monetization}</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Mobile & Web Apps */}
            <AnimatedSection delay={400}>
              <div className="border border-border rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gradient mb-6">{t.appIdeas.mobile.title}</h3>
                
                <div className="space-y-4">
                  <div className="bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                    <ul className="text-muted-foreground space-y-2">
                      {t.appIdeas.mobile.items.map((item, i) => <li key={i}>• {item}</li>)}
                    </ul>
                    <div className="mt-4 p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded border border-primary/20">
                      <span className="text-sm font-medium">{t.appIdeas.mobile.monetization}</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-card/30 backdrop-blur-sm p-8 rounded-xl border border-border/50">
              <h4 className="text-2xl font-bold mb-4">{t.appIdeas.cta.title}</h4>
              <p className="text-muted-foreground mb-6">
                {t.appIdeas.cta.subtitle}
              </p>
              <PaymentButton size="lg" className="px-8 py-4 text-lg font-semibold">
                {t.readyToStart.cta}
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
              {t.quickImpl.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.quickImpl.subtitle}
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-accent/5 backdrop-blur-sm p-8 rounded-2xl border border-border/50">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">{t.quickImpl.ideaTitle}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.quickImpl.steps[0]}</h4>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.quickImpl.steps[1]}</h4>
                    <p className="text-muted-foreground italic">{t.quickImpl.step2Description}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.quickImpl.steps[2]}</h4>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.quickImpl.steps[3]}</h4>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">5</div>
                  <div>
                    <h4 className="font-semibold mb-2">{t.quickImpl.steps[4]}</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-accent/20 to-primary/20 rounded-xl border border-accent/30">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">💰</span>
                <h4 className="text-xl font-bold">{t.quickImpl.result}</h4>
              </div>
              <p className="text-lg font-semibold">
                {t.quickImpl.resultText} <span className="text-accent">{t.quickImpl.resultAmount}</span> {t.quickImpl.resultSuffix}
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
              <h4 className="text-lg font-bold mb-4 text-center">
                {t.quickImpl.offer.title}
              </h4>
              <p className="text-muted-foreground text-center mb-6">
                {t.quickImpl.offer.subtitle}
              </p>
              <div className="text-center">
                <PaymentButton size="lg" className="px-8 py-4 text-lg font-semibold">
                  {t.readyToStart.cta}
                </PaymentButton>
              </div>
            </div>
          </div>
        </div>
      </section>


      <ContactSection />

      <FAQ />
    </div>;
};
export default Index;