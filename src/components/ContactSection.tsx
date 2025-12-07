import { MessageCircle, Send, Instagram } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const contacts = [
  {
    name: "WhatsApp",
    description: "Напишите нам напрямую",
    href: "https://wa.me/12024554575",
    icon: MessageCircle,
    color: "bg-green-500/10 text-green-500 border-green-500/30",
  },
  {
    name: "Telegram",
    description: "@salesforcecareer",
    href: "https://t.me/salesforcecareer",
    icon: Send,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/30",
  },
  {
    name: "Instagram",
    description: "@getforce_bootcamp",
    href: "https://www.instagram.com/getforce_bootcamp/",
    icon: Instagram,
    color: "bg-pink-500/10 text-pink-500 border-pink-500/30",
  },
];

export const ContactSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gradient mb-4">
              Свяжитесь с Нами
            </h3>
            <p className="text-muted-foreground">
              Есть вопросы? Мы всегда на связи
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="grid md:grid-cols-3 gap-6">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.name}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group gradient-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-glow text-center"
                >
                  <div className={`w-14 h-14 rounded-full ${contact.color} border flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-1">
                    {contact.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {contact.description}
                  </p>
                </a>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
