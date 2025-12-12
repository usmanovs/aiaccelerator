import { useEffect, useRef, useState } from "react";
import { ToolBadges } from "./ToolBadges";
import { PaymentButton } from "./PaymentButton";
import { ExternalLink } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";
import { CountdownTimer } from "./CountdownTimer";

const projects = [
  {
    name: "AOiK",
    descriptionKey: "aoik" as const,
    url: "https://ads-aoik.com/",
    image: "https://gckvkbddmtzyyzlfokxx.supabase.co/storage/v1/object/public/project-images/db1652b2-c96b-4685-add0-81f00e28dbdd/1764294312283-0.jpg",
    categoryKey: "architecture" as const
  },
  {
    name: "Climbley",
    descriptionKey: "climbley" as const,
    url: "https://climbley.com/",
    image: "https://climbley.com/assets/1-hYsSMKCc.jpg",
    categoryKey: "saas" as const
  },
  {
    name: "AI Studio App",
    descriptionKey: "aiStudio" as const,
    url: "https://ai.studio/apps/drive/1OmJo4lNYRXjvNdPv4YLSy0sHG5go8R9L?fullscreenApplet=true",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    categoryKey: "aiData" as const
  },
  {
    name: "RoadTalk English",
    descriptionKey: "roadtalk" as const,
    url: "https://roadtalk-english.com/",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
    categoryKey: "edtech" as const
  },
  {
    name: "NoSmoking",
    descriptionKey: "nosmoking" as const,
    url: "https://preview-10a31f29--nosmoking.lovable.app/",
    image: "/images/nosmoking-preview.png",
    categoryKey: "health" as const
  }
];

export const HeroSection = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

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
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center" dir={t.dir}>
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher />
      </div>

      <div className="max-w-6xl mx-auto">
        <ToolBadges />
        
        <div className="mb-8">
          <div className="inline-block border border-accent/30 bg-accent/10 px-6 py-3 rounded-lg backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-accent tracking-wide">
              {t.hero.badge}
            </h2>
          </div>
          <p className="text-muted-foreground text-sm mb-6">
            {t.hero.dates}
          </p>
          <CountdownTimer />
        </div>

        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8">
            <span className="block">{t.hero.title1}</span>
            <span className="block">{t.hero.title2}</span>
            <span className="block text-gradient">{t.hero.title3}</span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-12">
            <div className="border border-border/30 bg-background/20 px-8 py-6 rounded-xl backdrop-blur-sm">
              <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed">
                {t.hero.description}
              </p>
            </div>
          </div>

          <PaymentButton
            size="lg"
            className="px-12 py-6 text-lg font-semibold"
          >
            {t.hero.cta}
          </PaymentButton>
        </div>

        {/* Student Projects */}
        <div ref={projectsRef} className="mt-16">
          <h3 className={`text-3xl font-bold text-gradient mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t.hero.projectsTitle}
          </h3>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {t.hero.projectsSubtitle}
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
                        {t.categories[project.categoryKey]}
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
                      {t.projects[project.descriptionKey]}
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