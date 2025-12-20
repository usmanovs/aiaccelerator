// Language context for i18n support
import { createContext, useContext, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Language, Translations, getTranslation, languages } from "./index";

interface LanguageContextType {
  lang: Language;
  t: Translations;
  languages: typeof languages;
  switchLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Extract language from URL path (e.g., "/ru" → "ru")
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const pathLang = pathSegments[0];
  
  // Default to English, validate language code
  const currentLang: Language = (pathLang && ["en", "ru", "fa", "ky"].includes(pathLang)) 
    ? (pathLang as Language) 
    : "en";
  
  const t = getTranslation(currentLang);

  const switchLanguage = (newLang: Language) => {
    const currentPath = window.location.pathname;
    const pathParts = currentPath.split("/").filter(Boolean);
    
    // Remove old language prefix if exists
    if (pathParts[0] && ["en", "ru", "fa", "ky"].includes(pathParts[0])) {
      pathParts.shift();
    }
    
    // Add new language prefix
    const newPath = `/${newLang}${pathParts.length > 0 ? "/" + pathParts.join("/") : ""}`;
    navigate(newPath);
  };

  return (
    <LanguageContext.Provider value={{ lang: currentLang, t, languages, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
