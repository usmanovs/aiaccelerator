export const SocialProof = () => {
  // Generate avatar placeholders
  const avatars = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    name: `Участник ${i + 1}`,
  }));

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center mb-6 -space-x-2">
          {avatars.map((avatar) => (
            <div
              key={avatar.id}
              className="w-12 h-12 rounded-full bg-gradient-card border-2 border-background flex items-center justify-center text-sm font-semibold shadow-card"
            >
              {avatar.id}
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