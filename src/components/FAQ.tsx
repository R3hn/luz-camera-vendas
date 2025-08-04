import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "📌 Como recebo meu ingresso?",
    answer: "Você receberá seu ingresso por e-mail logo após a confirmação da compra. Para acessar o evento, basta apresentar o ingresso impresso ou mostrar o QR Code na tela do seu celular."
  },
  {
    question: "📌 O evento será gravado?",
    answer: "Não. O Luz, Câmera e Vendas é um evento 100% presencial e não será gravado. Queremos que você viva uma experiência exclusiva, imersiva e inesquecível, ali, ao vivo."
  },
  {
    question: "📌 Posso comprar mais de um ingresso?",
    answer: "Sim, claro! Você pode adquirir quantos ingressos quiser, inclusive para sua equipe ou grupo de trabalho. É uma ótima forma de aprender e crescer juntos."
  },
  {
    question: "📌 Terá estacionamento no local?",
    answer: "Sim. O Mar Hotel Convention oferece estacionamento pago para os participantes do evento, com acesso direto ao local."
  },
  {
    question: "📌 Preciso levar algum material?",
    answer: "Não é obrigatório, mas recomendamos levar notebook, tablet ou caderno para fazer anotações e participar dos exercícios práticos. Você também receberá um kit exclusivo do participante."
  }
];

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);


const FAQ = () => {
  return (
    <section className="section-padding relative">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
            Perguntas <span className="text-gradient-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-4xl mx-auto font-medium">
            Esclarecemos as principais dúvidas sobre o evento. Não encontrou sua pergunta? Entre em contato conosco!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-5xl mx-auto mb-20">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card rounded-2xl border-0 px-8 hover:shadow-blue-glow transition-glow"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-smooth py-8 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 leading-relaxed pb-8 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center glass-card rounded-3xl p-12 md:p-16 border border-primary/20 hover:shadow-blue-glow transition-glow">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">
            Está com alguma dúvida para comprar?
          </h3>
          <p className="text-lg md:text-xl text-foreground/70 mb-10 leading-relaxed">
            Minha equipe está aqui para te ajudar!
          </p>
          <div className="flex justify-center">
            <a 
              href="https://wa.me/+5581995722558" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] px-10 py-5 rounded-2xl font-semibold hover:shadow-lg transition-all inline-flex items-center justify-center gap-4 text-xl text-white hover:scale-105"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
