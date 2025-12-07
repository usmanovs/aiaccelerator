import { useEffect, useRef, useState } from "react";
import { ToolBadges } from "./ToolBadges";
import { PaymentButton } from "./PaymentButton";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "AOiK",
    description: "Архитектурная и Дизайнерская Студия",
    url: "https://ads-aoik.com/",
    image: "https://gckvkbddmtzyyzlfokxx.supabase.co/storage/v1/object/public/project-images/db1652b2-c96b-4685-add0-81f00e28dbdd/1764294312283-0.jpg",
    category: "Архитектура"
  },
  {
    name: "Climbley",
    description: "Grow Your Audience with AI Coaching",
    url: "https://climbley.com/",
    image: "https://climbley.com/assets/1-hYsSMKCc.jpg",
    category: "SaaS"
  },
  {
    name: "AI Studio App",
    description: "Интерактивное AI приложение для работы с данными",
    url: "https://ai.studio/apps/drive/1OmJo4lNYRXjvNdPv4YLSy0sHG5go8R9L?fullscreenApplet=true",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    category: "AI / Data"
  },
  {
    name: "RoadTalk English",
    description: "Learn English. Drive Confidently.",
    url: "https://roadtalk-english.com/",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
    category: "EdTech"
  },
  {
    name: "NoSmoking",
    description: "Приложение для отказа от курения",
    url: "https://preview-10a31f29--nosmoking.lovable.app/",
    image: "/images/nosmoking-preview.png",
    category: "Здоровье"
  }
];

export const HeroSection = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

        {/* Student Projects */}
        <div ref={projectsRef} className="mt-16">
          <h3 className={`text-3xl font-bold text-gradient mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Проекты Студентов
          </h3>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Реальные приложения, созданные выпускниками нашего буткемпа
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms' }}
              >
                <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {project.name}
                      </h4>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};