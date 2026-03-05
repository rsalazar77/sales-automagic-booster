import { CTAButton } from "@/components/ui/cta-button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Zap, Bot, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const scrollToPrice = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden px-4 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cta/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Bot className="absolute top-[15%] left-[10%] w-8 h-8 text-cta/30 animate-float" />
        <Zap className="absolute top-[25%] right-[15%] w-6 h-6 text-accent/40 animate-float-delayed" />
        <TrendingUp className="absolute bottom-[30%] left-[20%] w-7 h-7 text-primary/30 animate-float" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10 text-center">
        {/* Event badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Domingo, 31/01</span>
          <span className="w-1 h-1 bg-primary/40 rounded-full" />
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">9h–13h (BRT)</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-tight mb-6 animate-slide-up">
          TRANSFORME{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cta to-cta-hover">
            VENDAS PERDIDAS
          </span>{" "}
          EM DINHEIRO NO{" "}
          <span className="relative inline-block">
            AUTOMÁTICO
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
            >
              <path
                d="M2 8C50 2 150 2 198 8"
                stroke="hsl(var(--cta))"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-slide-up-delayed">
          Monte em apenas <strong className="text-foreground">4 horas</strong> seu sistema
          completo de recuperação inteligente com IA e automações que trabalham{" "}
          <strong className="text-foreground">24/7</strong> recuperando vendas
        </p>

        {/* Live badge */}
        <Badge className="bg-destructive/10 text-destructive border-destructive/20 mb-8 animate-pulse-subtle">
          <span className="w-2 h-2 bg-destructive rounded-full mr-2 animate-pulse" />
          AO VIVO E ONLINE
        </Badge>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4 animate-scale-in">
          <CTAButton variant="hero" size="xl" onClick={scrollToPrice}>
            GARANTIR MINHA VAGA
          </CTAButton>
          <p className="text-sm text-muted-foreground">
            De{" "}
            <span className="line-through text-destructive/60">R$ 1.188</span>{" "}
            por apenas{" "}
            <span className="font-bold text-cta text-lg">R$ 97</span>
          </p>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground animate-fade-in-delayed">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-cta" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Garantia de 7 dias
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-cta" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Acesso imediato
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-cta" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Sem programação
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
