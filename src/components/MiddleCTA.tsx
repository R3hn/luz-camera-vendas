
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import { useCheckoutForm } from "@/hooks/useCheckoutForm";
import { CheckoutForm } from "@/components/CheckoutForm";

const MiddleCTA = () => {
  const { isFormOpen, openCheckoutForm, closeCheckoutForm } = useCheckoutForm();
  return (
    <section className="section-padding relative bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-primary/20 shadow-elegant">
            <div className="mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 bg-primary/20 px-3 sm:px-4 py-2 rounded-full">
                <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                <span className="text-primary font-semibold text-xs sm:text-sm">ÚLTIMAS VAGAS DO LOTE 1</span>
              </div>
            </div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              Não deixe para depois o que pode transformar 
              <span className="text-gradient-primary"> seu negócio hoje</span>
            </h3>
            
            <p className="text-foreground/80 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
              Cada dia que você adia é uma oportunidade perdida de se comunicar melhor 
              e vender com mais consistência.
            </p>
            
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-black font-bold text-sm sm:text-base md:text-lg lg:text-xl px-3 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-6 rounded-xl group w-full max-w-full"
              style={{ whiteSpace: 'normal', wordWrap: 'break-word', lineHeight: '1.4' }}
              onClick={openCheckoutForm}
            >
              GARANTIR MINHA VAGA AGORA
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
            </Button>
          </div>
        </div>
      </div>

      {/* Checkout Form Modal */}
      <CheckoutForm isOpen={isFormOpen} onClose={closeCheckoutForm} />
    </section>
  );
};

export default MiddleCTA;
