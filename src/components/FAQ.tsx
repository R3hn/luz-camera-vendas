import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

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
              <MessageCircle className="w-6 h-6" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;