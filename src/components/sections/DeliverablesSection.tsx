import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Check } from "lucide-react";

const deliverables = [
  "Sistema de recuperação de vendas pronto e funcionando",
  "5 fluxos de automação publicados no n8n",
  "Biblioteca de mensagens de alta conversão",
  "Prompts do Agente de IA otimizados",
  "Planilha de métricas e acompanhamento",
  "Gravação do workshop por 30 dias",
  "Certificado de conclusão",
];

const DeliverablesSection = () => {
  return (
    <SectionWrapper variant="alternate" id="deliverables">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Você sai do workshop com{" "}
          <span className="text-cta">tudo isso</span>
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-3xl p-8 shadow-xl border border-cta/20">
          <ul className="space-y-4">
            {deliverables.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 group"
              >
                <div className="w-6 h-6 bg-cta/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-cta group-hover:scale-110 transition-all">
                  <Check className="w-4 h-4 text-cta group-hover:text-cta-foreground" />
                </div>
                <span className="text-foreground font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default DeliverablesSection;
