import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, Brain, Award, Gift, Zap, HandHeart, ArrowRight } from "lucide-react";
import { useCheckoutForm } from "@/hooks/useCheckoutForm";
import { CheckoutForm } from "@/components/CheckoutForm";

const experiences = [
  {
    icon: BookOpen,
    title: "Técnicas de vendas e comunicação",
    description: "Estratégias comprovadas para se posicionar como autoridade e vender com naturalidade."
  },
  {
    icon: Zap,
    title: "Vídeos estratégicos na palma da sua mão",
    description: "Como criar conteúdo em vídeo que converte usando apenas seu celular."
  },
  {
    icon: Users,
    title: "Estratégias reais de marketing digital e IA",
    description: "Use a tecnologia ao seu favor para automatizar e escalar suas vendas."
  },
  {
    icon: Users,
    title: "Networking com empreendedores e especialistas",
    description: "Conecte-se com pessoas que estão no mesmo caminho de crescimento que você."
  },
  {
    icon: HandHeart,
    title: "Experiência mágica diferente de tudo que você já viveu",
    description: "Uma vivência única e transformadora que você não encontra em nenhum outro lugar."
  },
  {
    icon: Brain,
    title: "Conteúdo direto, aplicável e sem enrolação",
    description: "Nada de teoria solta: você aprende, testa, anota e leva ferramentas que funcionam no mundo real."
  }
];

const EventExperience = () => {
  const { isFormOpen, openCheckoutForm, closeCheckoutForm } = useCheckoutForm();
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Mais que um evento. <span className="text-gradient-primary">Uma experiência</span> completa.
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto font-medium">
            9 horas intensas com conteúdo prático, networking estratégico e tudo que você precisa para sair aplicando imediatamente.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {experiences.map((experience, index) => (
            <div key={index} className="glass-card rounded-2xl p-8 hover:shadow-blue-glow transition-glow group">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-primary rounded-2xl group-hover:scale-110 transition-smooth shadow-blue-glow flex-shrink-0">
                  <experience.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-smooth leading-tight">
                    {experience.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {experience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 sm:mt-16 md:mt-20">
          <Button 
            className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground font-bold text-sm sm:text-base md:text-lg px-3 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl w-full sm:w-auto max-w-full inline-flex items-center justify-center gap-2"
            style={{ whiteSpace: 'normal', wordWrap: 'break-word', lineHeight: '1.4' }}
            onClick={openCheckoutForm}
          >
            VIVER ESSA EXPERIÊNCIA ÚNICA
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>

      </div>
      
      {/* Checkout Form Modal */}
      <CheckoutForm isOpen={isFormOpen} onClose={closeCheckoutForm} />
    </section>
  );
};

export default EventExperience;