interface InstructorCardProps {
  name: string;
  bio: string;
  avatar: string;
}

export const InstructorCard = ({ name, bio, avatar }: InstructorCardProps) => {
  return (
    <div className="gradient-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105">
      <div className="flex items-center mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center text-2xl font-bold text-accent-foreground mr-6">
          {avatar}
        </div>
        <div>
          <h4 className="text-2xl font-bold text-foreground mb-2">{name}</h4>
        </div>
      </div>
      
      <p className="text-muted-foreground leading-relaxed">{bio}</p>
    </div>
  );
};