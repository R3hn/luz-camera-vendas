import { Button } from "@/components/ui/button";
import { useCheckoutForm } from "@/hooks/useCheckoutForm";
import { CheckoutForm } from "@/components/CheckoutForm";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Shield, Users } from "lucide-react";

const Pricing = () => {
  const { isFormOpen, openCheckoutForm, closeCheckoutForm } = useCheckoutForm();
  return (
    <section className="section-padding relative">
      <div className="container-custom px-2 sm:px-4 md:px-0">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Garanta seu ingresso com <span className="text-gradient-secondary">preço promocional</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto font-medium">
            Invista no seu crescimento profissional com condições especiais do Lote 1.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="glass-card rounded-3xl p-10 md:p-12 border-2 border-secondary/30 shadow-yellow-glow">
            {/* Badge */}
            <div className="text-center mb-10">
              <div className="bg-gradient-secondary px-8 py-4 rounded-full shadow-yellow-glow inline-block">
                <span className="text-secondary-foreground font-bold text-lg">LOTE 1 - PROMOÇÃO ESPECIAL</span>
              </div>
            </div>

            {/* Price */}
            <div className="text-center mb-12">
              <div className="text-lg md:text-xl text-foreground/60 mb-2 line-through">
                De R$548,88
              </div>
              <div className="text-lg md:text-xl text-foreground/80 mb-4">
                por
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
                12x de R$17,47
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-6">ou R$168,88 à vista</div>
            </div>


            {/* CTA Button */}
            <Button 
              variant="default" 
              size="hero" 
              className="w-full text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold max-w-full px-3 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6"
              style={{ whiteSpace: 'normal', wordWrap: 'break-word', lineHeight: '1.4' }}
              onClick={openCheckoutForm}
            >
              GARANTIR MEU INGRESSO AGORA
            </Button>

          </div>
        </div>

        {/* Urgency Section */}
        <div className="text-center mb-8">
          <div className="bg-gradient-secondary p-12 md:p-16 rounded-3xl max-w-5xl mx-auto shadow-yellow-glow">
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-secondary-foreground leading-tight">
              ⚠️ Vagas limitadas
            </h3>
            <p className="text-secondary-foreground/90 text-lg md:text-xl mb-8 leading-relaxed">
              Garantimos um ambiente exclusivo e networking de alta qualidade. 
              Por isso, limitamos o número de participantes.
            </p>
            <div className="glass-card px-8 py-4 rounded-full inline-flex items-center gap-4">
              <Users className="w-6 h-6 text-white" />
              <span className="text-white font-semibold text-lg">Restam poucas vagas do Lote 1</span>
            </div>
          </div>
        </div>

      </div>

      {/* Checkout Form Modal */}
      <CheckoutForm isOpen={isFormOpen} onClose={closeCheckoutForm} />
    </section>
  );
};

export default Pricing;