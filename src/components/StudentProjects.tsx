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
  }
];

export const StudentProjects = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gradient mb-4">
            Проекты Студентов
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Реальные приложения, созданные выпускниками нашего буткемпа
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
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
    </section>
  );
};
