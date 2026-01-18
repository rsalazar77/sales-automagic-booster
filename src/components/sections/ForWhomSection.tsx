import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Check, X } from "lucide-react";

const forYou = [
  "Vende produtos ou serviços online e perde vendas diariamente",
  "Quer automatizar atendimento e recuperação sem contratar mais gente",
  "Está disposto a implementar junto no workshop (não só assistir)",
  "Busca resultados práticos e rápidos, não teoria",
];

const notForYou = [
  "Procura um curso teórico para assistir depois",
  "Não tem disposição para implementar durante o workshop",
  "Espera resultados sem aplicar o que aprender",
];

const ForWhomSection = () => {
  return (
    <SectionWrapper variant="alternate" id="for-whom">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Para quem é{" "}
          <span className="text-cta">(e para quem não é)</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* For you */}
        <div className="bg-card rounded-2xl p-6 border-2 border-cta/30 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-cta/10 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-cta" />
            </div>
            <h3 className="font-bold text-lg text-foreground">É para você se...</h3>
          </div>
          <ul className="space-y-4">
            {forYou.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Not for you */}
        <div className="bg-card rounded-2xl p-6 border-2 border-destructive/20 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center">
              <X className="w-5 h-5 text-destructive" />
            </div>
            <h3 className="font-bold text-lg text-foreground">Não é para você se...</h3>
          </div>
          <ul className="space-y-4">
            {notForYou.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-foreground text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ForWhomSection;
