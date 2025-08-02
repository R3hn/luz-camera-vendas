import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Pedro Oliveira",
    role: "CEO, VideoAgency",
    content: "Após participar do evento, nosso faturamento aumentou 300% em 6 meses. As estratégias apresentadas são realmente transformadoras.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=80&h=80&fit=crop&crop=face",
    result: "300% de crescimento"
  },
  {
    name: "Juliana Ferreira",
    role: "Founder, CreativeHub",
    content: "O networking foi incrível! Fechei 3 parcerias estratégicas no próprio evento. O ROI foi imediato.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=80&h=80&fit=crop&crop=face",
    result: "3 parcerias fechadas"
  },
  {
    name: "Marco Silva",
    role: "Head of Marketing, TechCorp",
    content: "As técnicas de storytelling visual que aprendi revolucionaram nossas campanhas. Nunca vi resultados tão expressivos.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    result: "ROI 500% maior"
  },
  {
    name: "Carla Santos",
    role: "Diretora, Visual Studio",
    content: "Um investimento que se pagou em 30 dias. O conteúdo é extremamente prático e aplicável.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    result: "ROI em 30 dias"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            O que dizem os <span className="text-gradient-primary">participantes</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Histórias reais de transformação e resultados extraordinários de quem já viveu a experiência.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-0">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 p-6 sm:p-8 hover:shadow-blue-glow transition-glow group">
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4 sm:mb-6">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/30" />
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-secondary text-secondary" />
                  ))}
                </div>
              </div>

              {/* Content */}
              <blockquote className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 group-hover:text-foreground transition-smooth">
                "{testimonial.content}"
              </blockquote>

              {/* Result Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-secondary rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary-foreground rounded-full"></div>
                <span className="text-xs sm:text-sm font-semibold text-secondary-foreground">
                  {testimonial.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div>
                  <p className="text-sm sm:text-base font-semibold group-hover:text-primary transition-smooth">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
            <div className="p-4 sm:p-6 bg-gradient-card rounded-lg border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-gradient-primary mb-1 sm:mb-2">95%</div>
              <p className="text-sm sm:text-base text-muted-foreground">dos participantes recomendam o evento</p>
            </div>
            
            <div className="p-4 sm:p-6 bg-gradient-card rounded-lg border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-gradient-secondary mb-1 sm:mb-2">4.9/5</div>
              <p className="text-sm sm:text-base text-muted-foreground">nota média de satisfação</p>
            </div>
            
            <div className="p-4 sm:p-6 bg-gradient-card rounded-lg border border-border/50">
              <div className="text-2xl sm:text-3xl font-bold text-gradient-primary mb-1 sm:mb-2">2000+</div>
              <p className="text-sm sm:text-base text-muted-foreground">profissionais já transformados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;