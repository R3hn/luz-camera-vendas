import { Calendar, MapPin, Star, Wifi, Car, Coffee, ArrowRight, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useCheckoutForm } from "@/hooks/useCheckoutForm";
import { CheckoutForm } from "@/components/CheckoutForm";

const Venue = () => {
  const { isFormOpen, openCheckoutForm, closeCheckoutForm } = useCheckoutForm();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const venueImages = [{
    src: "/lovable-uploads/a583b5d7-3734-462a-aa29-af4bf2576f84.png",
    alt: "Auditório do Mar Hotel - Vista principal do evento"
  }, {
    src: "/lovable-uploads/d7b9ffab-53e2-4573-969a-b76848784b0d.png",
    alt: "Auditório do Mar Hotel - Vista lateral com equipamentos"
  }];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % venueImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [venueImages.length]);
  const nextImage = () => {
    setCurrentImageIndex(prev => (prev + 1) % venueImages.length);
  };
  const prevImage = () => {
    setCurrentImageIndex(prev => (prev - 1 + venueImages.length) % venueImages.length);
  };
  return <section className="section-padding relative bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-2 sm:px-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Uma experiência <span className="text-gradient-primary">incrível</span> no melhor hotel de Recife!
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            O evento acontecerá em um dos locais mais prestigiados da cidade, oferecendo toda a infraestrutura e conforto que você merece.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Event Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 px-2 sm:px-0">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-primary/20 hover:shadow-blue-glow transition-glow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary">Data do Evento</h3>
                  <p className="text-base sm:text-lg font-semibold">06 de setembro (sábado)</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-primary/20 hover:shadow-blue-glow transition-glow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-secondary">Local</h3>
                  <p className="text-base sm:text-lg font-semibold">Mar Hotel Conventions - Recife, PE</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-primary/20 hover:shadow-blue-glow transition-glow bg-gradient-primary/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-primary">Horário</h3>
                  <p className="text-base sm:text-lg font-semibold text-primary">🕘 Início às 9h da manhã</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Venue Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            {/* Venue Carousel */}
            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-primary/20 hover:shadow-blue-glow transition-glow">
                <img src={venueImages[currentImageIndex].src} alt={venueImages[currentImageIndex].alt} className="w-full h-full object-cover transition-all duration-500" />
              </div>
              
              {/* Navigation Arrows */}
              <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-primary/20" aria-label="Imagem anterior">
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
              
              <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 hover:bg-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm border border-primary/20" aria-label="Próxima imagem">
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {venueImages.map((_, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-primary w-6' : 'bg-primary/40 hover:bg-primary/60'}`} aria-label={`Ir para imagem ${index + 1}`} />)}
              </div>
            </div>

            {/* Venue Description */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center lg:text-left">
                O <span className="text-gradient-secondary">local perfeito</span> para sua experiência
              </h3>
              
              <div className="bg-gradient-to-r from-primary/10 to-transparent rounded-xl p-6 sm:p-8">
                <p className="text-base sm:text-lg leading-relaxed text-foreground/90 text-center lg:text-left">
                  O Mar Hotel Conventions oferece um ambiente sofisticado e acolhedor, 
                  proporcionando o cenário ideal para uma experiência de aprendizado única e transformadora.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Venue Placeholders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
            
            
            
            
            
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <Button className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground font-bold text-sm sm:text-base md:text-lg px-3 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl w-full sm:w-auto max-w-full inline-flex items-center justify-center gap-2" style={{
          whiteSpace: 'normal',
          wordWrap: 'break-word',
          lineHeight: '1.4'
        }} onClick={openCheckoutForm}>
            RESERVAR MINHA VAGA NO MAR HOTEL
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>
      
      {/* Checkout Form Modal */}
      <CheckoutForm isOpen={isFormOpen} onClose={closeCheckoutForm} />
    </section>;
};
export default Venue;