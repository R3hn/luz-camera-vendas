
import { Shield, Heart, CheckCircle } from "lucide-react";

const Guarantee = () => {
  return (
    <section className="section-padding relative">
      <div className="container-custom px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 px-2 sm:px-0">
              Garantia de <span className="text-gradient-primary">transformação</span>
            </h2>
          </div>

          {/* Main Guarantee Card */}
          <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center border-2 border-primary/20 shadow-blue-glow mb-12 sm:mb-20">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-primary rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-10 shadow-blue-glow">
              <Shield className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-primary-foreground" />
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
              Participe até o fim da manhã
            </h3>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 leading-relaxed mb-6 sm:mb-10 max-w-4xl mx-auto px-2 sm:px-0">
              Se não sentir que o conteúdo está valendo a pena, 
              <span className="text-primary font-semibold"> peça reembolso no local</span> e receba 
              <span className="text-secondary font-semibold"> 100% de volta</span>.
            </p>

            <div className="glass-card rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-10 py-4 sm:py-6 mb-6 sm:mb-10 inline-flex items-center gap-2 sm:gap-4 shadow-yellow-glow max-w-full">
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-secondary flex-shrink-0" />
              <span className="text-secondary font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                Sem burocracia. Sem questionamentos.
              </span>
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground/70 leading-relaxed px-2 sm:px-0">
              Estamos confiantes de que você vai amar a experiência. 
              Mas se por qualquer motivo não atendermos suas expectativas, devolvemos seu investimento integralmente.
            </p>
          </div>

          {/* Why we offer this guarantee */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            <div className="text-center glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 hover:shadow-blue-glow transition-glow">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-primary rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-blue-glow">
                <CheckCircle className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-primary-foreground" />
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Confiança Total</h4>
              <p className="text-foreground/70 text-sm sm:text-base md:text-lg leading-relaxed">
                Temos certeza da qualidade do nosso conteúdo e da transformação que ele proporciona.
              </p>
            </div>

            <div className="text-center glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 hover:shadow-yellow-glow transition-glow">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-secondary rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-yellow-glow">
                <Heart className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-secondary-foreground" />
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Seu Sucesso</h4>
              <p className="text-foreground/70 text-sm sm:text-base md:text-lg leading-relaxed">
                Queremos que você saia do evento com resultados reais e aplicáveis no seu negócio.
              </p>
            </div>

            <div className="text-center glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 hover:shadow-blue-glow transition-glow">
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-primary rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-blue-glow">
                <Shield className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-primary-foreground" />
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Zero Risco</h4>
              <p className="text-foreground/70 text-sm sm:text-base md:text-lg leading-relaxed">
                Sua participação é livre de riscos. Se não gostar, simplesmente peça o reembolso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
