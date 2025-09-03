import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { useCheckoutForm } from "@/hooks/useCheckoutForm";
import { CheckoutForm } from "@/components/CheckoutForm";

const EventHero = () => {
  const { isFormOpen, openCheckoutForm, closeCheckoutForm } = useCheckoutForm();
  return (
    <section className="relative min-h-screen flex flex-col bg-black overflow-hidden">
      {/* Imagem de fundo dos palestrantes */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-black/80 via-black/60 to-black/30">
          {/* Imagem dos palestrantes - desktop */}
          <img 
            src="/lovable-uploads/acad7a71-7112-4d75-93fb-f1c1b4704390.png"
            alt="Palestrantes do evento"
            className="hidden md:block w-full h-full object-cover object-center"
          />
          {/* Imagem dos palestrantes - mobile */}
          <img 
            src="/lovable-uploads/db7f4159-6d7e-4e9a-9555-22cdf75fb313.png"
            alt="Palestrantes do evento"
            className="md:hidden w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Logo no topo - desktop (esquerda) / mobile (centro) */}
      <div className="absolute top-0 left-8 sm:left-6 md:left-8 lg:left-6 xl:left-8 z-20 md:block hidden">
        <img 
          src="/lovable-uploads/66809f69-9c87-4094-b2df-52831d88fba2.png" 
          alt="Luz, Câmera e Vendas" 
          className="h-14 sm:h-18 md:h-20 lg:h-24 xl:h-28 w-auto drop-shadow-2xl"
        />
      </div>

      {/* Logo centralizado - mobile */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 md:hidden">
        <img 
          src="/lovable-uploads/66809f69-9c87-4094-b2df-52831d88fba2.png" 
          alt="Luz, Câmera e Vendas" 
          className="h-20 w-auto drop-shadow-2xl"
        />
      </div>

      {/* Container principal - conteúdo sobreposto */}
      <div className="flex-1 relative z-10 container-custom pt-12 sm:pt-16 md:pt-20 lg:pt-24">

        {/* Conteúdo principal - Desktop (esquerda) / Mobile (centro, na parte inferior) */}
        <div className="md:text-left text-center md:max-w-2xl lg:max-w-3xl xl:max-w-4xl px-4 sm:px-0 md:justify-start flex flex-col md:justify-start justify-end md:min-h-auto min-h-[calc(100vh-8rem)]">
          
          {/* Headline Principal */}
          <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4 md:mt-0 mt-0">
            <div className="px-2 sm:px-0 max-w-lg md:max-w-2xl lg:max-w-3xl md:mx-0 mx-auto">
              <h1 className="text-white font-bold mb-3 sm:mb-4" style={{ hyphens: 'none' }}>
                {/* Versão desktop */}
                <span className="hidden md:block text-3xl lg:text-4xl xl:text-5xl leading-tight">
                  Aprenda a se <br />
                  <span className="text-primary font-extrabold">comunicar</span>, usar a <br />
                  internet e criar <br />
                  vídeos que <span className="text-primary font-extrabold">vendem</span>, <br />
                  mesmo sem <span className="text-primary font-extrabold">experiência</span>.
                </span>
                {/* Versão mobile - menos linhas */}
                <span className="md:hidden block text-2xl leading-tight">
                  Aprenda a se <span className="text-primary font-extrabold">comunicar</span>,<br />
                  usar a internet e criar<br />
                  vídeos que <span className="text-primary font-extrabold">vendem</span>,<br />
                  mesmo sem <span className="text-primary font-extrabold">experiência</span>.
                </span>
              </h1>
              
              {/* Subheadline - apenas desktop */}
              <div className="bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-xl p-3 sm:p-4 backdrop-blur-sm max-w-lg md:max-w-xl lg:max-w-2xl hidden md:block">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-semibold leading-relaxed">
                  Você vai sair desse evento sabendo se posicionar como{" "}
                  <span className="text-primary font-bold">autoridade</span> e transformar seu negócio em uma{" "}
                  <span className="text-primary font-bold">marca irresistível</span>, usando o que já tem e{" "}
                  <span className="text-white bg-primary/20 px-2 py-1 rounded-lg font-bold">sem depender de marketing complicado</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Informações do evento - mobile antes do botão, desktop depois */}
          <div className="md:hidden bg-black/60 backdrop-blur-sm rounded-lg p-4 border border-primary/20 max-w-sm mx-auto mb-4">
            <div className="flex flex-col gap-2 text-white text-center">
              <div className="flex items-center gap-3 justify-center text-sm font-medium">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Mar Hotel Recife</span>
                </div>
                <span className="text-primary">|</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>06/09</span>
                </div>
              </div>
              <div className="text-primary font-bold text-lg">
                Início às 9h da manhã
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-4 sm:mb-5 px-2 sm:px-0 max-w-xs md:mx-0 mx-auto">
            <Button 
              className="bg-primary hover:bg-primary/90 text-black font-bold rounded-xl h-auto w-full md:text-lg md:px-6 md:py-4 text-xl px-8 py-5"
              style={{ whiteSpace: 'normal', wordWrap: 'break-word', lineHeight: '1.4' }}
              onClick={openCheckoutForm}
            >
              QUERO PARTICIPAR!
            </Button>
          </div>

          {/* Informações do evento - desktop depois do botão */}
          <div className="hidden md:block space-y-2 sm:space-y-3 bg-black/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-primary/20 max-w-xs sm:max-w-sm mb-8 sm:mb-12 md:mb-16">
            <div className="flex items-center gap-2 sm:gap-3 text-white justify-start">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium">Mar Hotel Conventions - Recife, PE</span>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 text-white justify-start">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <span className="text-sm sm:text-base font-medium">06 de setembro (sábado)</span>
            </div>
            
            <div className="bg-primary/20 rounded-lg p-2 border border-primary/30">
              <div className="text-primary font-bold text-center">
                Início às 9h da manhã
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-primary/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-primary/30 rounded-full animate-ping delay-1000"></div>
      </div>

      {/* Checkout Form Modal */}
      <CheckoutForm isOpen={isFormOpen} onClose={closeCheckoutForm} />
    </section>
  );
};

export default EventHero;