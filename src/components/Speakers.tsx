import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Youtube, ArrowRight } from "lucide-react";
import { useCheckoutForm } from "@/hooks/useCheckoutForm";
import { CheckoutForm } from "@/components/CheckoutForm";

const speakers = [
  {
    name: "Roberto Montanha",
    role: "Palestrante e Mentor",
    expertise: "Comunicação & Vendas",
    bio: "Roberto Montanha é palestrante, comunicador e especialista em autopotencialização, com mais de 17 anos de experiência no palco e mais de 1 milhão de pessoas impactadas no Brasil e no exterior. Reconhecido internacionalmente, recebeu o Top of Mind Internacional em Lisboa e Londres em comunicação criativa e palestrante mais atuante do Brasil e se destaca por unir conteúdo prático, inspiração e transformação real.\n\nCom uma trajetória de vida versátil, de atendente a diretor de cinema, Roberto conecta palco, empresa e pessoas com uma linguagem direta e envolvente. É referência em comunicação, vendas, atendimento e motivação, com foco em despertar o potencial máximo de cada pessoa ou equipe.\n\nMais do que palestrante, Roberto Montanha ativa potenciais e provoca resultados. Ele transforma atitudes e entrega ferramentas para quem quer fazer acontecer de verdade.",
    image: "/lovable-uploads/b3dc7c58-5950-44ec-9ea4-28065271ceb8.png",
    isMain: true,
    social: {
      linkedin: "#",
      instagram: "#",
      youtube: "#"
    }
  },
  {
    name: "Junior Oliveira",
    role: "Cineasta",
    expertise: "Video Marketing",
    bio: "Cineasta especializado em video marketing de diferenciação, já produziu mais de mil vídeos, incluindo filmes de curta e longa-metragem. É criador do método 'Cinema de Um Homem Só', que reúne técnicas de produção com uma equipe reduzida, mantendo a qualidade e entregando da forma mais rápida do mercado. Ajudou a posicionar marcas como Fiat, Toyota, Roberto Montanha e usa técnicas de cinema e sua estrutura de mensagem pra conectar pessoas e empresas a seu público-alvo.",
    image: "/lovable-uploads/d77ac740-da70-4426-ad00-8c96d37883b2.png",
    isMain: false,
    social: {
      linkedin: "#",
      instagram: "#",
      youtube: "#"
    }
  },
  {
    name: "Adriano Maciel",
    role: "Estrategista Digital",
    expertise: "Marketing Digital",
    bio: "Empreendedor, especialista em estratégia digital, cofundador da Flyer On, Adriano Maciel usa técnicas avançadas de marketing digital para ajudar empreendedores a potencializar os seus negócios. Ele acredita que só existem 2 tipos de empresa: as que fazem negócios pela internet e as que estão fora dos negócios. Sabendo disso, ele ajuda diversas marcas a melhorar suas presenças na internet e, consequentemente, vender mais, utilizando as melhores estratégias do mercado.",
    image: "/lovable-uploads/09f586c8-a7b6-4952-a190-19b2b74ba8d6.png",
    isMain: false,
    social: {
      linkedin: "#",
      instagram: "#",
      youtube: "#"
    }
  }
];

const Speakers = () => {
  const { isFormOpen, openCheckoutForm, closeCheckoutForm } = useCheckoutForm();
  return (
    <section className="py-16 lg:py-20 relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Os <span className="text-gradient-primary">especialistas</span> que vão revelar seus segredos
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto font-medium">
            Os nomes por trás das estratégias que funcionam
          </p>
          <p className="text-base text-foreground/70 max-w-4xl mx-auto mt-4">
            Montanha reuniu os especialistas que estiveram ao seu lado nos bastidores do sucesso, e agora vão abrir o jogo com você, compartilhando estratégias reais, práticas e comprovadas, ao vivo.
          </p>
        </div>

        {/* Main Speaker - Roberto Montanha */}
        <div className="mb-16">
          <div className="glass-card rounded-2xl overflow-hidden max-w-5xl mx-auto shadow-blue-glow border-2 border-primary/20 group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Speaker Image */}
              <div className="relative h-[450px] lg:h-auto overflow-hidden">
                <img 
                  src={speakers[0].image} 
                  alt={speakers[0].name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                  style={{objectPosition: 'center 20%'}}
                />
              </div>

              {/* Speaker Info */}
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <div className="border border-primary/30 rounded-full px-4 py-2 mb-6 w-fit">
                  <span className="text-primary font-semibold text-sm">{speakers[0].expertise}</span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-3" style={{color: 'white'}}>
                  {speakers[0].name}
                </h3>
                
                <p className="text-lg text-primary font-semibold mb-4">{speakers[0].role}</p>
                
                <p className="text-foreground/70 leading-relaxed text-base whitespace-pre-line">
                  {speakers[0].bio}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Other Speakers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {speakers.slice(1).map((speaker, index) => (
            <div key={index} className="glass-card rounded-2xl overflow-hidden group hover:shadow-yellow-glow transition-glow">
              {/* Speaker Image */}
              <div className="relative h-[450px] overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  style={{objectPosition: 'center 10%'}}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent"></div>
              </div>

              {/* Speaker Info */}
              <div className="p-8">
                <div className="bg-gradient-secondary rounded-full px-4 py-2 mb-4 w-fit">
                  <span className="text-secondary-foreground font-semibold text-sm">{speaker.expertise}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-smooth">
                  {speaker.name}
                </h3>
                
                <p className="text-primary font-semibold mb-4">{speaker.role}</p>
                
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {speaker.bio}
                </p>
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
            QUERO ESTAR COM ESSES ESPECIALISTAS
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </div>

      {/* Checkout Form Modal */}
      <CheckoutForm isOpen={isFormOpen} onClose={closeCheckoutForm} />
    </section>
  );
};

export default Speakers;
