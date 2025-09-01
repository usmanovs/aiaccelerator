import { Users, GraduationCap, Star } from "lucide-react";

export const StudentsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-secondary/5 to-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-gradient mb-4">
            Мои Студенты из Montgomery College
          </h3>
          <p className="text-xl text-muted-foreground">
            Успешные выпускники, которые уже создают свои приложения
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Students Photo */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card border border-border">
              <img 
                src="/lovable-uploads/dea12150-3a46-462d-9026-988ed25ea9bf.png"
                alt="Студенты Montgomery College после успешного завершения программы обучения"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-gradient-accent rounded-full p-3 shadow-glow">
              <GraduationCap className="w-6 h-6 text-accent-foreground" />
            </div>
          </div>

          {/* Success Stats */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="gradient-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground">45+</h4>
                    <p className="text-muted-foreground">Успешных студентов</p>
                  </div>
                </div>
              </div>

              <div className="gradient-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center">
                    <Star className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground">4.9/5</h4>
                    <p className="text-muted-foreground">Рейтинг программы</p>
                  </div>
                </div>
              </div>

              <div className="gradient-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-accent flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground">100%</h4>
                    <p className="text-muted-foreground">Завершили проекты</p>
                  </div>
                </div>
              </div>
            </div>

            <blockquote className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-border/50">
              <p className="text-lg italic text-muted-foreground mb-4">
                "Этот курс изменил мое понимание того, как можно быстро создавать приложения. 
                За две недели я создал полноценный продукт, который раньше казался невозможным."
              </p>
              <footer className="text-sm font-semibold text-foreground">
                — Студент Montgomery College
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};