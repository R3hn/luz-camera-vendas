import { AlertTriangle, TrendingDown, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCheckoutForm } from "@/hooks/useCheckoutForm";
import { CheckoutForm } from "@/components/CheckoutForm";

const PainSection = () => {
  const { isFormOpen, openCheckoutForm, closeCheckoutForm } = useCheckoutForm();
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 px-2 sm:px-4 md:px-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight">
            Você sabe <span className="text-gradient-primary">vender</span> o que faz?
          </h2>
        </div>

        {/* Pain Points */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4 sm:px-0">
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 leading-relaxed font-medium">
              O problema não é o seu produto. O problema é a forma como você está comunicando.
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12 md:mb-16 px-4 sm:px-0">
            <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center border-destructive/20 hover:shadow-elegant transition-glow group">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-smooth">
                <TrendingDown className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-destructive" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Você tem algo bom nas mãos...</h3>
              <p className="text-foreground/70 text-base sm:text-lg leading-relaxed">
                Mas não consegue chamar atenção para o que faz. As pessoas não enxergam o valor real do seu trabalho.
              </p>
            </div>

            <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 text-center border-destructive/20 hover:shadow-elegant transition-glow group">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-smooth">
                <AlertTriangle className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-destructive" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">...mas não gera desejo</h3>
              <p className="text-foreground/70 text-base sm:text-lg leading-relaxed">
                Suas vendas são inconsistentes. Você sabe que poderia vender muito mais, mas algo está travando o processo.
              </p>
            </div>
          </div>

          {/* Central Message */}
          <div className="text-center bg-gradient-sober p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-3xl shadow-elegant mx-4 sm:mx-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-white leading-tight">
              A verdade é que você precisa aprender a se comunicar de forma que as pessoas 
              <span className="text-secondary"> queiram</span> comprar de você.
            </h3>
            <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
              E isso não tem nada a ver com ter o produto perfeito. 
              Tem a ver com saber contar a história certa, da forma certa, para as pessoas certas.
            </p>
            <Button 
              className="bg-primary hover:bg-primary/90 text-black font-bold text-sm sm:text-base md:text-lg px-3 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl w-full sm:w-auto max-w-full"
              style={{ whiteSpace: 'normal', wordWrap: 'break-word', lineHeight: '1.4' }}
              onClick={openCheckoutForm}
            >
              QUERO APRENDER ISSO!
            </Button>
          </div>
        </div>
      </div>

      {/* Checkout Form Modal */}
      <CheckoutForm isOpen={isFormOpen} onClose={closeCheckoutForm} />
    </section>
  );
};

export default PainSection;