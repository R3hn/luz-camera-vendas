import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useCheckoutForm } from "@/hooks/useCheckoutForm";
import { CheckoutForm } from "@/components/CheckoutForm";

const FinalCTA = () => {
  const { isFormOpen, openCheckoutForm, closeCheckoutForm } = useCheckoutForm();
  return <footer className="relative section-padding">
      <div className="container-custom px-4 sm:px-6">
        {/* Final CTA */}
        <div className="text-center mb-12 sm:mb-20 glass-card p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-3xl border border-primary/20 hover:shadow-blue-glow transition-glow">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-gradient-primary leading-tight px-2 sm:px-0">
            Domine a arte de vender através da comunicação
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 mb-8 sm:mb-12 max-w-5xl mx-auto leading-relaxed px-2 sm:px-0">
            Saia do evento com as ferramentas e estratégias que vão transformar sua presença digital 
            em uma máquina de vendas. Sua jornada para se tornar referência no seu mercado começa aqui.
          </p>
          
          <div className="flex flex-col gap-4 sm:gap-6 justify-center mb-6 sm:mb-10 px-2 sm:px-0">
            <Button variant="default" size="hero" className="font-bold text-lg sm:text-xl md:text-2xl px-8 sm:px-16 bg-gradient-primary hover:shadow-blue-glow w-full sm:w-auto" onClick={openCheckoutForm}>
              Garanta seu ingresso agora
            </Button>
          </div>
        </div>

        {/* Separator Line */}
        <div className="mb-12 sm:mb-20 border-t border-border/30"></div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-20">
          {/* Event Info */}
          <div className="text-center lg:text-left">
            <img src="/lovable-uploads/3ebb2218-2479-4463-8841-0a49085eea55.png" alt="Luz, Câmera e Vendas" className="h-28 sm:h-36 mb-4 mx-auto lg:mx-0" />
            <p className="text-foreground/70 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg px-2 sm:px-0">Destraque sua comunicação,<br />marketing e vendas</p>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8">Contato</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base justify-center lg:justify-start">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span>(81) 99572-2558</span>
              </div>
              <div className="flex items-center gap-3 sm:gap-4 text-sm sm:text-base justify-center lg:justify-start">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a href="mailto:suporte@luzcameraevendas.com.br" className="break-all">luzcameraevendas@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8">Fique conectado</h4>
            <p className="text-foreground/70 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base px-2 sm:px-0">
              Siga nossas redes sociais para conteúdos exclusivos e atualizações do evento.
            </p>
            
            <div className="flex gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
              <a href="https://www.instagram.com/luzcameraevendas/" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-4 bg-gradient-primary rounded-xl sm:rounded-2xl hover:shadow-blue-glow transition-glow hover:scale-110">
                <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border/30 text-center text-foreground/60">
          <div className="flex flex-col gap-4 sm:gap-6 items-center px-2 sm:px-0">
            <p className="text-sm sm:text-base">
              © 2025 Luz, Câmera e Vendas. Todos os direitos reservados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <a href="#" className="hover:text-primary transition-smooth text-xs sm:text-sm">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-smooth text-xs sm:text-sm">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Checkout Form Modal */}
      <CheckoutForm isOpen={isFormOpen} onClose={closeCheckoutForm} />

      {/* Background decorations - hide on mobile for better performance */}
      <div className="hidden sm:block absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-lg opacity-20 blur-2xl rotate-12"></div>
      <div className="hidden sm:block absolute bottom-10 right-10 w-48 h-24 bg-secondary/20 rounded-2xl opacity-20 blur-2xl -rotate-6"></div>
      <div className="hidden sm:block absolute top-1/3 right-1/4 w-20 h-20 bg-accent/20 rounded-full opacity-15 blur-xl"></div>
    </footer>;
};
export default FinalCTA;