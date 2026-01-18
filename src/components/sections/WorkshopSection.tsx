import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Wrench, Play, Rocket } from "lucide-react";

const WorkshopSection = () => {
  return (
    <SectionWrapper id="workshop">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          O que vai acontecer no{" "}
          <span className="text-cta">Workshop</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Este não é um curso teórico. É uma construção ao vivo, passo a passo,
          onde você vai montar seu sistema completo.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cta via-primary to-accent hidden md:block -translate-x-1/2" />

        {/* Steps */}
        <div className="space-y-8 md:space-y-0">
          {/* Step 1 */}
          <div className="relative flex flex-col md:flex-row items-center md:gap-8">
            <div className="flex-1 md:text-right order-2 md:order-1">
              <div className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg text-foreground mb-2">
                  Fase 1: Arquitetura e Diagnóstico
                </h3>
                <p className="text-muted-foreground text-sm">
                  Mapeamos seus pontos de perda e desenhamos a estratégia de
                  recuperação personalizada para seu negócio.
                </p>
                <span className="inline-block mt-3 text-xs font-semibold text-cta bg-cta/10 px-3 py-1 rounded-full">
                  30 minutos
                </span>
              </div>
            </div>
            <div className="w-14 h-14 bg-cta rounded-full flex items-center justify-center z-10 shadow-lg shadow-cta/30 order-1 md:order-2 mb-4 md:mb-0">
              <Wrench className="w-6 h-6 text-cta-foreground" />
            </div>
            <div className="flex-1 order-3 hidden md:block" />
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col md:flex-row items-center md:gap-8 md:pt-8">
            <div className="flex-1 hidden md:block" />
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center z-10 shadow-lg shadow-primary/30 mb-4 md:mb-0">
              <Play className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg text-foreground mb-2">
                  Fase 2: Construção Guiada
                </h3>
                <p className="text-muted-foreground text-sm">
                  Construímos juntos, ao vivo, os 5 fluxos de automação com IA.
                  Você copia, cola e adapta em tempo real.
                </p>
                <span className="inline-block mt-3 text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                  2h30 minutos
                </span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col md:flex-row items-center md:gap-8 md:pt-8">
            <div className="flex-1 md:text-right order-2 md:order-1">
              <div className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="font-bold text-lg text-foreground mb-2">
                  Fase 3: Ativação e Monitoramento
                </h3>
                <p className="text-muted-foreground text-sm">
                  Ativamos tudo, configuramos métricas e garantimos que seu
                  sistema está funcionando e gerando resultados.
                </p>
                <span className="inline-block mt-3 text-xs font-semibold text-accent bg-accent/20 px-3 py-1 rounded-full">
                  1 hora
                </span>
              </div>
            </div>
            <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center z-10 shadow-lg shadow-accent/30 order-1 md:order-2 mb-4 md:mb-0">
              <Rocket className="w-6 h-6 text-accent-foreground" />
            </div>
            <div className="flex-1 order-3 hidden md:block" />
          </div>
        </div>
      </div>

      <div className="text-center mt-16 p-8 bg-gradient-to-r from-cta/10 via-cta/5 to-cta/10 rounded-2xl border border-cta/20">
        <p className="text-xl md:text-2xl font-bold text-foreground">
          Você entra sem sistema.{" "}
          <span className="text-cta">Sai com tudo funcionando.</span>
        </p>
      </div>
    </SectionWrapper>
  );
};

export default WorkshopSection;
