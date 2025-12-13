import { useState, useRef } from "react";
import { Play, ExternalLink } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { useLanguage } from "@/i18n/LanguageContext";

export const VideoTestimonial = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { t } = useLanguage();

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-card/30" dir={t.dir}>
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="text-accent font-medium text-sm">
                {t.videoTestimonial?.badge || "Success Story"}
              </span>
            </div>
            <h3 className="text-4xl font-bold text-gradient mb-4">
              {t.videoTestimonial?.title || "From Truck Driver to App Creator"}
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.videoTestimonial?.subtitle || "See what our graduates are building"}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Video Player - Takes more space */}
            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-glow transition-all duration-300 bg-card">
              <div className="aspect-video relative">
                <video
                  ref={videoRef}
                  src="/videos/saltanat-testimonial.mp4"
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={handleVideoClick}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  playsInline
                  preload="metadata"
                />
                
                {/* Play Button Overlay */}
                {!isPlaying && (
                  <button
                    onClick={handlePlayClick}
                    className="absolute inset-0 flex items-center justify-center bg-background/30 backdrop-blur-sm transition-all duration-300 hover:bg-background/20 group"
                    aria-label="Play video"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                      <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                    </div>
                  </button>
                )}
              </div>
            </div>

            {/* Info Card */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    S
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Saltanat</h4>
                    <p className="text-muted-foreground text-sm">
                      {t.videoTestimonial?.role || "Bootcamp Graduate"}
                    </p>
                  </div>
                </div>

                <p className="text-foreground mb-4">
                  {t.videoTestimonial?.description || "Built RoadTalk English — a language learning app for truck drivers. Zero coding experience."}
                </p>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-sm text-accent mb-4">
                  <span>✨</span>
                  <span>{t.videoTestimonial?.badge2 || "Zero coding → Full web app"}</span>
                </div>

                <a
                  href="https://roadtalk-english.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group"
                >
                  <span>{t.videoTestimonial?.viewApp || "View her app"}</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
