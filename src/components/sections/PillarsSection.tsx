import { SectionWrapper } from "@/components/ui/section-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Target, ShoppingCart, RefreshCw, Bot, Zap } from "lucide-react";

const pillars = [
  {
    icon: Target,
    emoji: "🎯",
    title: "Pilar 1 — Resposta Relâmpago Inteligente",
    description:
      "Sistema que responde leads em segundos, qualifica automaticamente e encaminha para o próximo passo da jornada. Enquanto seu concorrente está digitando, você já fechou.",
    result: "Resposta em menos de 30 segundos, 24 horas por dia",
  },
  {
    icon: ShoppingCart,
    emoji: "🛒",
    title: "Pilar 2 — Recuperador de Oportunidades Abandonadas",
    description:
      "Sequência inteligente que detecta carrinhos abandonados e inicia uma conversa persuasiva via WhatsApp. Mensagens personalizadas com timing perfeito.",
    result: "30-40% de recuperação de carrinhos abandonados",
  },
  {
    icon: RefreshCw,
    emoji: "♻️",
    title: "Pilar 3 — Reativador de Leads Frios",
    description:
      "Identifica leads que esfriaram e reativa a conversa com ofertas e conteúdos relevantes. Transforma contatos esquecidos em oportunidades reais.",
    result: "Reative leads que você achava que tinha perdido para sempre",
  },
  {
    icon: Bot,
    emoji: "🤖",
    title: "Pilar 4 — Agente de IA Negociador",
    description:
      "IA treinada para conversar naturalmente, responder objeções, negociar e conduzir o lead até a compra. Funciona enquanto você dorme.",
    result: "Vendas automáticas 24/7 sem intervenção humana",
  },
  {
    icon: Zap,
    emoji: "⚡",
    title: "Pilar 5 — Radar de Oportunidades Quentes",
    description:
      "Detecta sinais de interesse: visitou o site novamente, abriu email várias vezes, clicou em link. Alerta você ou ativa uma sequência automática.",
    result: "Nunca mais perca o timing perfeito de uma venda",
  },
];

const PillarsSection = () => {
  return (
    <SectionWrapper variant="alternate" id="pillars">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Os 5 Pilares do{" "}
          <span className="text-cta">Sistema de Recuperação</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Cada pilar foi desenvolvido para atacar um ponto específico de perda de
          vendas. Juntos, formam uma máquina de conversão imparável.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {pillars.map((pilar, index) => (
            <AccordionItem
              key={index}
              value={`pilar-${index}`}
              className="bg-card border border-border rounded-2xl px-6 shadow-sm hover:shadow-md transition-shadow data-[state=open]:border-cta/30 data-[state=open]:shadow-lg"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <span className="text-2xl">{pilar.emoji}</span>
                  <span className="font-bold text-foreground">{pilar.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-muted-foreground mb-4 pl-12">
                  {pilar.description}
                </p>
                <div className="pl-12">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-cta bg-cta/10 px-4 py-2 rounded-full">
                    <Zap className="w-4 h-4" />
                    {pilar.result}
                  </span>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>
  );
};

export default PillarsSection;
