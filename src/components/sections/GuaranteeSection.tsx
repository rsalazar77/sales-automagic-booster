import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Shield } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <SectionWrapper variant="alternate" id="guarantee">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-cta/10 rounded-full mb-6">
          <Shield className="w-10 h-10 text-cta" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Garantia Incondicional de{" "}
          <span className="text-cta">7 Dias</span>
        </h2>

        <p className="text-muted-foreground text-lg mb-8">
          Se dentro de 7 dias você sentir que o workshop não entregou o que
          prometeu, basta enviar um email solicitando reembolso.{" "}
          <strong className="text-foreground">
            Devolvemos 100% do seu investimento, sem perguntas.
          </strong>
        </p>

        <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full border border-cta/20 shadow-sm">
          <Shield className="w-5 h-5 text-cta" />
          <span className="font-semibold text-foreground">
            Compra 100% Segura
          </span>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default GuaranteeSection;
