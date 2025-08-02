import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const sponsors = [
  {
    name: "Roberto Montanha",
    logo: "/lovable-uploads/9c178c79-5cf3-45ed-9b5b-4bf4a4bdcb3e.png"
  },
  {
    name: "FlyerOn",
    logo: "/lovable-uploads/9693c0ca-e819-4555-8129-1563b2c3a7a6.png"
  },
  {
    name: "CINE",
    logo: "/lovable-uploads/20bb6e44-ea7d-4f76-9835-d5e1a4d3577d.png"
  }
];

const Sponsors = () => {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Quem está <span className="text-gradient-secondary">por trás</span> do evento
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto font-medium">
            Parceiros e realizadores que tornaram este evento possível.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="text-center group">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name}
                  className="w-full h-48 md:h-40 object-contain opacity-80 group-hover:opacity-100 transition-smooth"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Partner opportunity */}
        <div className="text-center glass-card rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-4 text-foreground">
            Quer ser nosso parceiro?
          </h3>
          <p className="text-foreground/80 mb-6 text-base leading-relaxed">
            Estamos sempre abertos a novas parcerias estratégicas.
          </p>
          <a 
            href="https://wa.me/+5581995722558" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold text-base transition-all hover:scale-105 hover:shadow-yellow-glow inline-block"
          >
            Espaço para parceiros futuros
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;