import { Clock, Coffee, Users, Award } from "lucide-react";

const Schedule = () => {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient-secondary">Programação</span> do dia
          </h2>
          <div className="inline-flex items-center gap-3 bg-gradient-primary px-6 py-3 rounded-xl text-primary-foreground font-bold text-xl shadow-blue-glow">
            <Clock className="w-6 h-6" />
            <span>🕘 Início às 9h da manhã</span>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Coming Soon Message */}
          <div className="text-center glass-card rounded-3xl p-12 md:p-16">
            <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-10 shadow-blue-glow">
              <Clock className="w-12 h-12 text-primary-foreground" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-8">
              A programação completa será divulgada em breve
            </h3>
            
            <p className="text-lg md:text-xl text-foreground/70 mb-12 leading-relaxed">
              Mas você pode esperar uma jornada intensa e transformadora com conteúdo prático 
              nos três pilares: <span className="text-primary font-semibold">comunicação</span>, 
              <span className="text-secondary font-semibold"> vídeos estratégicos</span> e 
              <span className="text-primary font-semibold"> marketing digital inteligente</span>.
            </p>

            {/* What to expect */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-blue-glow">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold mb-4">Manhã</h4>
                <p className="text-foreground/70">Comunicação e posicionamento estratégico</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-yellow-glow">
                  <Coffee className="w-8 h-8 text-secondary-foreground" />
                </div>
                <h4 className="text-xl font-bold mb-4">Tarde</h4>
                <p className="text-foreground/70">Vídeos práticos e marketing digital</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-blue-glow">
                  <Award className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-bold mb-4">Final</h4>
                <p className="text-foreground/70">Plano de ação personalizado</p>
              </div>
            </div>
          </div>

          {/* Guarantee section */}
          <div className="mt-16 text-center bg-gradient-hero p-10 rounded-2xl shadow-elegant">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">
              🕘 Das 9h às 18h - Um dia inteiro de transformação
            </h3>
            <p className="text-white/90 text-lg">
              Incluindo coffee breaks estratégicos, almoço networking e tempo para prática em tempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;