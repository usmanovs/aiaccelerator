import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "12024554575";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5C] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
      aria-label="Написать в WhatsApp"
    >
      {/* Pulse rings */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30"></span>
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-pulse opacity-20"></span>
      
      <MessageCircle className="w-7 h-7 relative z-10" />
    </a>
  );
};
