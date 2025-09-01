import profile1 from "@/assets/profiles/profile-1.jpg";
import profile2 from "@/assets/profiles/profile-2.jpg";
import profile3 from "@/assets/profiles/profile-3.jpg";
import profile4 from "@/assets/profiles/profile-4.jpg";
import profile5 from "@/assets/profiles/profile-5.jpg";
import profile6 from "@/assets/profiles/profile-6.jpg";
import profile7 from "@/assets/profiles/profile-7.jpg";
import profile8 from "@/assets/profiles/profile-8.jpg";
import profile9 from "@/assets/profiles/profile-9.jpg";

export const SocialProof = () => {
  // Profile images for diverse participants
  const avatars = [
    { id: 1, name: "Участник 1", image: profile1 },
    { id: 2, name: "Участник 2", image: profile2 },
    { id: 3, name: "Участник 3", image: profile3 },
    { id: 4, name: "Участник 4", image: profile4 },
    { id: 5, name: "Участник 5", image: profile5 },
    { id: 6, name: "Участник 6", image: profile6 },
    { id: 7, name: "Участник 7", image: profile7 },
    { id: 8, name: "Участник 8", image: profile8 },
    { id: 9, name: "Участник 9", image: profile9 },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center mb-6 -space-x-2">
          {avatars.map((avatar) => (
            <div
              key={avatar.id}
              className="w-12 h-12 rounded-full border-2 border-background overflow-hidden shadow-card hover:scale-110 transition-smooth"
            >
              <img
                src={avatar.image}
                alt={avatar.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-2xl md:text-3xl font-bold mb-2">
            Присоединяйтесь к <span className="text-gradient">10,067 разработчикам</span>
          </p>
          <p className="text-lg text-muted-foreground">
            создающим приложения с ИИ
          </p>
          <p className="text-lg text-muted-foreground">
            без программистов и дизайнеров.
          </p>
        </div>
      </div>
    </section>
  );
};