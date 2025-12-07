import { AnimatedSection } from "./AnimatedSection";
import testimonial1 from "@/assets/testimonials/testimonial-1.png";
import testimonial2 from "@/assets/testimonials/testimonial-2.png";
import testimonial3 from "@/assets/testimonials/testimonial-3.png";
import testimonial4 from "@/assets/testimonials/testimonial-4.png";
import testimonial5 from "@/assets/testimonials/testimonial-5.png";

const testimonials = [
  { id: 1, image: testimonial1 },
  { id: 2, image: testimonial2 },
  { id: 3, image: testimonial3 },
  { id: 4, image: testimonial4 },
  { id: 5, image: testimonial5 },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gradient mb-4">
              Отзывы Студентов
            </h3>
            <p className="text-xl text-muted-foreground">
              Что говорят наши участники
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="grid gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="rounded-xl overflow-hidden border border-border shadow-card hover:shadow-glow transition-all duration-300"
              >
                <img
                  src={testimonial.image}
                  alt={`Отзыв студента ${testimonial.id}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
