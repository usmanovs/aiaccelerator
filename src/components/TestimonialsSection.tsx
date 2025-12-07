import { useState, useEffect, useCallback } from "react";
import { AnimatedSection } from "./AnimatedSection";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import testimonial1 from "@/assets/testimonials/testimonial-1.png";
import testimonial2 from "@/assets/testimonials/testimonial-2.png";
import testimonial3 from "@/assets/testimonials/testimonial-3.png";
import testimonial4 from "@/assets/testimonials/testimonial-4.png";
import testimonial5 from "@/assets/testimonials/testimonial-5.png";
import testimonial6 from "@/assets/testimonials/testimonial-6.png";

const testimonials = [
  { id: 1, image: testimonial1 },
  { id: 2, image: testimonial2 },
  { id: 3, image: testimonial3 },
  { id: 4, image: testimonial4 },
  { id: 5, image: testimonial5 },
  { id: 6, image: testimonial6 },
];

export const TestimonialsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

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
          <div className="px-12">
            <Carousel
              setApi={setApi}
              opts={{ 
                loop: true,
                dragFree: false,
                skipSnaps: false,
                align: "center",
              }}
              className="w-full touch-pan-y"
            >
              <CarouselContent>
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id}>
                    <div className="rounded-xl overflow-hidden border border-border shadow-card hover:shadow-glow transition-all duration-300 bg-card">
                      <img
                        src={testimonial.image}
                        alt={`Отзыв студента ${testimonial.id}`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 -translate-x-full" />
              <CarouselNext className="right-0 translate-x-full" />
            </Carousel>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
