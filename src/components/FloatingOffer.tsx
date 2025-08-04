import { Button } from "@/components/ui/button";
import { useCheckoutForm } from "@/hooks/useCheckoutForm";
import { CheckoutForm } from "@/components/CheckoutForm";
import { Check, ArrowRight } from "lucide-react";

const FloatingOffer = () => {
  const { isFormOpen, openCheckoutForm, closeCheckoutForm } = useCheckoutForm();

  return (
    <>
      <div className="fixed bottom-4 right-4 z-40 hidden md:block">
        <div className="glass-card rounded-2xl p-6 w-80 shadow-elegant border border-primary/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
            <span className="text-primary font-semibold text-sm">LOTE 1 ABERTO</span>
          </div>
          <h4 className="font-bold text-xl text-white mb-2">Luz, Câmera e Vendas</h4>
          <p className="text-foreground/70 text-sm mb-4">Domine a arte de vender através da comunicação</p>
          <div className="flex items-center gap-2 text-primary font-medium text-sm mb-5">
            <Check className="w-4 h-4" />
            <span>Acesso ao evento garantido</span>
          </div>
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-black font-bold"
            onClick={openCheckoutForm}
          >
            GARANTIR VAGA
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
      <CheckoutForm isOpen={isFormOpen} onClose={closeCheckoutForm} />
    </>
  );
};

export default FloatingOffer;
