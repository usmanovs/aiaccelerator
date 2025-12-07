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
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};
