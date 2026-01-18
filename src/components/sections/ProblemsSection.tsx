import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FeatureCard } from "@/components/ui/feature-card";
import { Clock, ShoppingCart, MessageSquareOff, Eye } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Leads novos esfriam",
    description:
      "Enquanto você demora para responder, seu concorrente já fechou a venda. Cada minuto conta.",
  },
  {
    icon: ShoppingCart,
    title: "Carrinhos abandonados acumulam",
    description:
      "70% dos carrinhos são abandonados. São vendas prontas que você está deixando escapar todos os dias.",
  },
  {
    icon: MessageSquareOff,
    title: "Conversas morrem no meio",
    description:
      "Leads param de responder e você não tem tempo nem sistema para recuperá-los de forma consistente.",
  },
  {
    icon: Eye,
    title: "Oportunidades passam despercebidas",
    description:
      "Leads quentes que voltam ao site, abrem emails ou clicam em links. Você nem sabe quando isso acontece.",
  },
];

const ProblemsSection = () => {
  return (
    <SectionWrapper variant="alternate" id="problems">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Por que seu negócio está{" "}
          <span className="text-destructive">perdendo vendas</span>?
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Se você se identifica com pelo menos um desses problemas, você está
          deixando dinheiro na mesa todos os dias.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {problems.map((problem, index) => (
          <FeatureCard
            key={index}
            icon={problem.icon}
            title={problem.title}
            description={problem.description}
            variant="problem"
          />
        ))}
      </div>

      <div className="text-center p-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl border border-primary/20">
        <p className="text-lg md:text-xl text-foreground font-medium">
          O problema não é você.{" "}
          <span className="font-bold text-primary">
            É a falta de um SISTEMA que trabalhe por você 24/7.
          </span>
        </p>
      </div>
    </SectionWrapper>
  );
};

export default ProblemsSection;
