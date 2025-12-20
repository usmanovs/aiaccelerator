import { Rocket, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const { lang, languages, switchLanguage, t } = useLanguage();

  const currentLanguage = languages.find((l) => l.code === lang);

  const navItems = [
    { label: t.lang === "ru" ? "Программа" : t.lang === "ky" ? "Программа" : t.lang === "fa" ? "برنامه" : "Program", href: "#program" },
    { label: t.lang === "ru" ? "Отзывы" : t.lang === "ky" ? "Пикирлер" : t.lang === "fa" ? "نظرات" : "Testimonials", href: "#testimonials" },
    { label: t.lang === "ru" ? "Инструктор" : t.lang === "ky" ? "Инструктор" : t.lang === "fa" ? "مربی" : "Instructor", href: "#instructor" },
    { label: t.lang === "ru" ? "Цены" : t.lang === "ky" ? "Баалар" : t.lang === "fa" ? "قیمت" : "Pricing", href: "#pricing" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
            <Rocket className="w-5 h-5 text-accent" />
          </div>
          <span className="font-semibold text-foreground">AI Accelerator</span>
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Language Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 bg-background/50 backdrop-blur-sm border-border/50 hover:bg-background/80"
            >
              <Globe className="w-4 h-4" />
              <span>{currentLanguage?.code.toUpperCase()}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-[120px]">
            {languages.map((language) => (
              <DropdownMenuItem
                key={language.code}
                onClick={() => switchLanguage(language.code)}
                className={`cursor-pointer ${
                  lang === language.code ? "bg-accent/20 font-semibold" : ""
                }`}
              >
                {language.nativeName}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};
