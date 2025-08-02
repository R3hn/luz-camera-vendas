import { Check, Users, Target, Video, TrendingUp, Megaphone, Star, Briefcase, UserCheck, Building, Calculator, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCheckoutForm } from "@/hooks/useCheckoutForm";
import { CheckoutForm } from "@/components/CheckoutForm";

const targetGoals = [
  {
    icon: TrendingUp,
    text: "Aumentar suas vendas e atrair mais clientes todos os dias, tornando seu negócio desejado e irresistível no digital."
  },
  {
    icon: Megaphone,
    text: "Se comunicar com mais confiança, ser lembrado com autoridade e transformar sua comunicação em uma arma de vendas"
  },
  {
    icon: Video,
    text: "Criar vídeos simples e criativos que fortalecem sua marca, conectam com o público e geram resultados reais."
  },
  {
    icon: Star,
    text: "Usar o que você já tem, sua história, sua presença e seu celular, para crescer com consistência no mercado digital."
  }
];

const targetProfiles = [
  {
    icon: Briefcase,
    text: "Empresário/Empreendedor (dono(a) de negócio físico ou digital)"
  },
  {
    icon: UserCheck,
    text: "Profissional liberal (médico, dentista, advogado, nutricionista, etc)"
  },
  {
    icon: Users,
    text: "Autônomo (prestador de serviço, freelancer, etc.)"
  },
  {
    icon: Target,
    text: "Vendedor ou gerente de vendas"
  },
  {
    icon: Phone,
    text: "Atendente, recepcionista ou secretário(a)"
  },
  {
    icon: Star,
    text: "Influenciador ou criador de conteúdo"
  }
];

const TargetAudience = () => {
  const { isFormOpen, openCheckoutForm, closeCheckoutForm } = useCheckoutForm();
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 px-2 sm:px-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 sm:mb-6 md:mb-8">
            Esse evento é <span className="text-gradient-primary">pra você</span> que quer...
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Target Goals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20 px-2 sm:px-0">
            {targetGoals.map((item, index) => (
              <div key={index} className="glass-card rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-blue-glow transition-glow group">
                <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-smooth shadow-blue-glow">
                    <item.icon className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-primary-foreground" />
                  </div>
                  <div className="pt-1 sm:pt-2">
                    <p className="text-base sm:text-lg md:text-lg font-medium leading-relaxed group-hover:text-primary transition-smooth">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Seja você section */}
          <div className="text-center mb-12 sm:mb-16 px-2 sm:px-0">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 md:mb-12">
              Seja você...
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-14 md:mb-16 px-2 sm:px-0">
              {targetProfiles.map((profile, index) => (
                <div key={index} className="glass-card rounded-xl p-4 sm:p-6 md:p-8 hover:shadow-blue-glow transition-glow group">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <profile.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <p className="text-sm sm:text-base md:text-base font-medium group-hover:text-primary transition-smooth text-left">
                      {profile.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-secondary p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl sm:rounded-3xl shadow-yellow-glow mx-2 sm:mx-0">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 text-black leading-tight">
                Se o que você quer é comunicar, vender e crescer,
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black">
                o <span className="text-black font-bold">Luz, Câmera e Vendas</span> é para você!
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="mt-12 sm:mt-16 md:mt-20">
              <Button 
                className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground font-bold text-sm sm:text-base md:text-lg px-3 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl w-full sm:w-auto max-w-full inline-flex items-center justify-center gap-2"
                style={{ whiteSpace: 'normal', wordWrap: 'break-word', lineHeight: '1.4' }}
                onClick={openCheckoutForm}
              >
                GARANTIR MINHA VAGA AGORA
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Form Modal */}
      <CheckoutForm isOpen={isFormOpen} onClose={closeCheckoutForm} />
    </section>
  );
};

export default TargetAudience;