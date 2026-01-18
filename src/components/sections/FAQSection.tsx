import { SectionWrapper } from "@/components/ui/section-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Tem garantia?",
    answer:
      "Sim! Você tem 7 dias de garantia incondicional. Se não gostar, devolvemos 100% do valor sem perguntas.",
  },
  {
    question: "Como acesso o workshop?",
    answer:
      "Após a compra, você recebe imediatamente o link de acesso por email. No dia do evento, basta clicar e entrar na transmissão ao vivo.",
  },
  {
    question: "Funciona para qualquer nicho?",
    answer:
      "Sim! O sistema funciona para qualquer negócio que vende online: e-commerce, infoprodutos, serviços, consultorias, etc. Vamos adaptar os templates para sua realidade.",
  },
  {
    question: "E se eu não puder participar ao vivo?",
    answer:
      "Você terá acesso à gravação por 30 dias. Mas recomendo fortemente participar ao vivo para tirar dúvidas e fazer junto comigo em tempo real.",
  },
  {
    question: "Preciso pagar ferramentas caras?",
    answer:
      "Não! Usamos ferramentas gratuitas ou com versões free generosas: n8n (gratuito), WhatsApp Business (gratuito) e Google Sheets (gratuito).",
  },
  {
    question: "É muito técnico? Preciso saber programar?",
    answer:
      "Zero programação necessária. Você vai copiar, colar e adaptar. Se sabe usar WhatsApp e planilhas, consegue fazer.",
  },
];

const FAQSection = () => {
  return (
    <SectionWrapper id="faq">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Perguntas Frequentes
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="hover:no-underline py-5 text-left">
                <span className="font-semibold text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
};

export default FAQSection;
