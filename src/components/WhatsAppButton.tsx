
import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+5581995722558', '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
      aria-label="Falar no WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 sm:w-7 sm:h-7" />
    </button>
  );
};

export default WhatsAppButton;
