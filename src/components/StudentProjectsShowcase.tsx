import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

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

export const StudentProjectsShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden" dir={t.dir}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(180 100% 50% / 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">{t.hero.projectsTitle?.split(' ')[0]} </span>
            <span className="text-gradient-cyan">{t.hero.projectsTitle?.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.hero.projectsSubtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: isVisible ? `${150 + index * 100}ms` : '0ms' }}
            >
              <div className="relative bg-card/30 border border-border/30 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5 hover:-translate-y-2">
                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent/20 backdrop-blur-sm text-accent text-xs font-medium rounded-full border border-accent/30">
                      {t.categories[project.categoryKey]}
                    </span>
                  </div>

                  {/* External link icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {t.projects[project.descriptionKey]}
                  </p>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -inset-px bg-gradient-to-r from-accent/10 via-transparent to-purple-500/10 rounded-2xl" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
