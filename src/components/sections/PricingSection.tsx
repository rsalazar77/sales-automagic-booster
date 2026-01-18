import { SectionWrapper } from "@/components/ui/section-wrapper";
import { CTAButton } from "@/components/ui/cta-button";
import { Check, Shield, Clock } from "lucide-react";

const includedItems = [
  { name: "Workshop ao vivo (4h)", value: "R$ 497" },
  { name: "Templates n8n prontos", value: "R$ 297" },
  { name: "Agente de IA configurado", value: "R$ 297" },
  { name: "Gravação por 30 dias", value: "R$ 97" },
];

const PricingSection = () => {
  return (
    <SectionWrapper variant="gradient" id="pricing">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          O que está incluso
        </h2>
      </div>

      <div className="max-w-lg mx-auto">
        <div className="relative bg-card rounded-3xl overflow-hidden shadow-2xl border border-cta/30">
          {/* Highlight banner */}
          <div className="bg-gradient-to-r from-cta to-cta-hover text-cta-foreground text-center py-3 font-bold text-sm uppercase tracking-wide">
            🔥 Oferta Especial de Lançamento
          </div>

          <div className="p-8">
            {/* Price breakdown */}
            <div className="space-y-4 mb-8">
              {includedItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-cta" />
                    <span className="text-foreground">{item.name}</span>
                  </div>
                  <span className="text-muted-foreground line-through text-sm">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-6 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Valor total:</span>
                <span className="text-muted-foreground line-through">R$ 1.188</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg text-foreground">Hoje:</span>
                <div className="text-right">
                  <span className="text-4xl font-black text-cta">R$ 97</span>
                  <span className="text-muted-foreground ml-2 text-sm">à vista</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <CTAButton variant="hero" size="xl" className="w-full mb-6">
              GARANTIR MINHA VAGA AGORA
            </CTAButton>

            {/* Trust elements */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-cta" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-border rounded-full" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cta" />
                <span>Acesso imediato</span>
              </div>
            </div>
          </div>
        </div>

        {/* Urgency */}
        <p className="text-center mt-6 text-sm text-muted-foreground">
          ⚠️ Vagas limitadas para garantir qualidade na mentoria ao vivo
        </p>
      </div>
    </SectionWrapper>
  );
};

export default PricingSection;
