import { SectionWrapper } from "@/components/ui/section-wrapper";
import { CTAButton } from "@/components/ui/cta-button";
import { Check, Shield, Clock, CreditCard } from "lucide-react";

const includes = [
  "Workshop ao vivo de 4 horas",
  "5 fluxos de automação prontos",
  "Agente de IA configurado",
  "Templates de mensagens",
  "Planilha de métricas",
  "Gravação por 30 dias",
  "Certificado de conclusão",
];

const FinalCTASection = () => {
  return (
    <SectionWrapper variant="dark" id="final-cta">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Última Chance de Garantir sua Vaga
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Sábado, 21/03, às 9h. Você sai com um sistema completo de recuperação
          de vendas funcionando.
        </p>

        {/* Price */}
        <div className="mb-8">
          <p className="text-gray-400 line-through text-xl mb-2">R$ 1.188</p>
          <p className="text-5xl font-black text-cta mb-2">R$ 97</p>
          <p className="text-gray-400 text-sm">pagamento único</p>
        </div>

        {/* Includes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10">
          {includes.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-left text-sm"
            >
              <Check className="w-4 h-4 text-cta flex-shrink-0" />
              <span className="text-gray-300">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <CTAButton variant="hero" size="xl" className="mb-8">
          GARANTIR MINHA VAGA AGORA
        </CTAButton>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-cta" />
            <span>Garantia de 7 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-cta" />
            <span>Acesso imediato</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-cta" />
            <span>Pagamento seguro</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FinalCTASection;
