import { Lightbulb, Video, Brain, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCheckoutForm } from "@/hooks/useCheckoutForm";
import { CheckoutForm } from "@/components/CheckoutForm";

const AboutEvent = () => {
  const { isFormOpen, openCheckoutForm, closeCheckoutForm } = useCheckoutForm();
  return <section className="section-padding relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            O que é o <span className="text-gradient-secondary">Luz, Câmera e Vendas?</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Description */}
          <div className="text-center mb-20">
            <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed mb-12 font-medium">
              Uma <span className="text-primary font-semibold">imersão prática</span> para <span className="text-secondary font-semibold">destravar sua comunicação</span>, dominar vídeos estratégicos e <span className="text-primary font-semibold">vender com consistência</span> usando <span className="text-secondary font-semibold">internet e IA</span>.
            </p>
            
            <div className="glass-card rounded-2xl px-10 py-8 inline-flex items-center gap-4 shadow-yellow-glow">
              <Lightbulb className="w-8 h-8 text-secondary flex-shrink-0" />
              <span className="text-secondary font-semibold text-lg md:text-xl">
                Mesmo que você nunca tenha aparecido na câmera ou estudado marketing!
              </span>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="glass-card rounded-2xl p-10 hover:shadow-blue-glow transition-glow h-full">
                <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-smooth shadow-blue-glow">
                  <Users className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-primary transition-smooth">
                  Comunicação
                </h3>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  Aprenda a encantar com palavras, criar conexão real e vender com verdade, 
                  mesmo se você é tímido ou nunca falou em público.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="glass-card rounded-2xl p-10 hover:shadow-yellow-glow transition-glow h-full">
                <div className="w-24 h-24 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-smooth shadow-yellow-glow">
                  <Video className="w-12 h-12 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-secondary transition-smooth">
                  Vídeos Estratégicos
                </h3>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  Descubra como criar vídeos simples com seu celular que realmente geram resultado, 
                  sem precisar de equipamentos caros ou conhecimento técnico.
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="glass-card rounded-2xl p-10 hover:shadow-blue-glow transition-glow h-full">
                <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-smooth shadow-blue-glow">
                  <Brain className="w-12 h-12 text-primary-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-primary transition-smooth">
                  Marketing + IA
                </h3>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  Use o marketing digital do jeito certo e aproveite a IA para vender com consistência, 
                  sem perder tempo com estratégias que não funcionam.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="bg-gradient-sober p-12 md:p-16 rounded-3xl shadow-elegant">
              <h3 className="text-2xl md:text-4xl font-bold mb-6 text-white leading-tight">Um dia que vai mudar sua forma de se comunicar e vender para sempre.</h3>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">
                Conteúdo prático, aplicável e com resultados reais desde o primeiro dia.
              </p>
              <Button 
                className="bg-primary hover:bg-primary/90 text-black font-bold text-sm sm:text-base md:text-lg lg:text-xl px-3 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 md:py-6 rounded-xl w-full sm:w-auto max-w-full"
                style={{ whiteSpace: 'normal', wordWrap: 'break-word', lineHeight: '1.4' }}
                onClick={openCheckoutForm}
              >
                GARANTIR MINHA VAGA AGORA
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Checkout Form Modal */}
      <CheckoutForm isOpen={isFormOpen} onClose={closeCheckoutForm} />
    </section>;
};
export default AboutEvent;