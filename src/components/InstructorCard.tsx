import { Youtube, Linkedin, Instagram, Music, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface InstructorCardProps {
  name: string;
  bio: string;
  avatar?: string;
  photo?: string;
}

export const InstructorCard = ({ name, bio, avatar, photo }: InstructorCardProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div 
      ref={ref}
      className={`gradient-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className={`flex items-center mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
        {photo ? (
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-accent mr-6">
            <img 
              src={photo} 
              alt={`${name} профиль`}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center text-2xl font-bold text-accent-foreground mr-6">
            {avatar}
          </div>
        )}
        <div>
          <h4 className="text-2xl font-bold text-foreground mb-2">{name}</h4>
        </div>
      </div>
      
      <p className={`text-muted-foreground leading-relaxed mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>{bio}</p>
      
      <div className={`flex gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <a 
          href="https://www.youtube.com/@seyitbek" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-accent text-accent-foreground hover:shadow-glow transition-all duration-300 hover:scale-110"
        >
          <Youtube className="w-5 h-5" />
        </a>
        <a 
          href="https://www.linkedin.com/in/seyitbek/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-accent text-accent-foreground hover:shadow-glow transition-all duration-300 hover:scale-110"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a 
          href="https://www.instagram.com/seyitbek/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-accent text-accent-foreground hover:shadow-glow transition-all duration-300 hover:scale-110"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a 
          href="https://www.tiktok.com/@seyitbbbek" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-accent text-accent-foreground hover:shadow-glow transition-all duration-300 hover:scale-110"
        >
          <Music className="w-5 h-5" />
        </a>
        <a 
          href="https://t.me/salesforcecareer" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-accent text-accent-foreground hover:shadow-glow transition-all duration-300 hover:scale-110"
        >
          <Send className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};