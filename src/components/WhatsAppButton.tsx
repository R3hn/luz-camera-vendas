
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+5581995722558', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-[8.5rem] right-4 sm:bottom-[8.5rem] sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
    </button>
  );
};

export default WhatsAppButton;
