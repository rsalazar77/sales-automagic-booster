import { SectionWrapper } from "@/components/ui/section-wrapper";
import { CTAButton } from "@/components/ui/cta-button";
import { Calculator, ArrowRight, TrendingDown, TrendingUp } from "lucide-react";

const ROISection = () => {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <SectionWrapper id="roi">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Faça a conta — <span className="text-cta">ROI</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-destructive/5 to-destructive/10 rounded-2xl p-8 border border-destructive/20 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingDown className="w-6 h-6 text-destructive" />
            <h3 className="font-bold text-lg text-foreground">
              O que você perde hoje:
            </h3>
          </div>
          <div className="space-y-3 text-foreground">
            <p className="flex items-center gap-2">
              <span className="text-muted-foreground">2 vendas/semana perdidas ×</span>
              <span className="font-semibold">R$ 197</span>
              <span className="text-muted-foreground">=</span>
            </p>
            <p className="text-3xl font-black text-destructive">
              R$ 1.576/mês <span className="text-lg font-normal text-muted-foreground">deixados na mesa</span>
            </p>
          </div>
        </div>

        <div className="flex justify-center my-6">
          <ArrowRight className="w-8 h-8 text-muted-foreground rotate-90" />
        </div>

        <div className="bg-gradient-to-br from-cta/5 to-cta/10 rounded-2xl p-8 border border-cta/20">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-cta" />
            <h3 className="font-bold text-lg text-foreground">
              Seu investimento:
            </h3>
          </div>
          <div className="space-y-4">
            <p className="text-4xl font-black text-cta">
              R$ 97 <span className="text-lg font-normal text-muted-foreground">único</span>
            </p>
            <p className="text-foreground">
              <strong>Recuperou 1 venda?</strong> Já pagou o workshop.
            </p>
            <p className="text-muted-foreground text-sm">
              E o sistema continua trabalhando por você todos os dias, sem custo adicional.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <CTAButton variant="hero" size="xl" onClick={scrollToPrice}>
            EU QUERO PARAR DE PERDER DINHEIRO
          </CTAButton>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ROISection;
