import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Monitor, MessageSquare, FileSpreadsheet, Lightbulb, Code2 } from "lucide-react";

const requirements = [
  {
    icon: Monitor,
    title: "Conta no n8n",
    description: "Gratuita, você cria em minutos",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Business",
    description: "Conta ativa para automações",
  },
  {
    icon: FileSpreadsheet,
    title: "Google Sheets",
    description: "Conta Google para métricas",
  },
  {
    icon: Lightbulb,
    title: "Noções básicas",
    description: "Saber usar computador e internet",
  },
];

const RequirementsSection = () => {
  return (
    <SectionWrapper id="requirements">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          O que você precisa
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ferramentas simples e gratuitas. Nada complexo.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
        {requirements.map((req, index) => (
          <div
            key={index}
            className="bg-card rounded-xl p-6 text-center border border-border hover:border-primary/30 transition-colors"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <req.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground text-sm mb-1">
              {req.title}
            </h3>
            <p className="text-muted-foreground text-xs">{req.description}</p>
          </div>
        ))}
      </div>

      {/* No programming badge */}
      <div className="flex justify-center">
        <div className="inline-flex items-center gap-3 bg-cta/10 border border-cta/20 rounded-full px-6 py-3">
          <Code2 className="w-5 h-5 text-cta" />
          <span className="font-semibold text-cta">
            Zero programação necessária
          </span>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default RequirementsSection;
