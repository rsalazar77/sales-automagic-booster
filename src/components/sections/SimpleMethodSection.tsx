import { SectionWrapper } from "@/components/ui/section-wrapper";
import { LogIn, Copy, Power } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: LogIn,
    title: "Entrar",
    description: "Acesse o workshop ao vivo e acompanhe tela a tela",
  },
  {
    number: "2",
    icon: Copy,
    title: "Copiar & Colar",
    description: "Copie os templates prontos e personalize para seu negócio",
  },
  {
    number: "3",
    icon: Power,
    title: "Ativar",
    description: "Publique os fluxos e comece a recuperar vendas imediatamente",
  },
];

const SimpleMethodSection = () => {
  return (
    <SectionWrapper id="method">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          O Método é{" "}
          <span className="text-cta">Simples</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Sem complicação, sem programação. Você vai fazer junto comigo,
          passo a passo.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative text-center group"
          >
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-cta/40 to-transparent" />
            )}

            <div className="relative inline-flex items-center justify-center w-24 h-24 mb-6">
              {/* Number badge */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-cta text-cta-foreground rounded-full flex items-center justify-center font-bold text-sm shadow-lg z-10">
                {step.number}
              </div>
              {/* Icon container */}
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-cta/10 rounded-2xl flex items-center justify-center group-hover:from-primary/20 group-hover:to-cta/20 transition-all duration-300 group-hover:scale-110">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
            </div>

            <h3 className="font-bold text-xl text-foreground mb-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SimpleMethodSection;
