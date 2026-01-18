import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Award, Zap } from "lucide-react";

const InstructorSection = () => {
  return (
    <SectionWrapper variant="alternate" id="instructor">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Quem vai te guiar
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="bg-card rounded-3xl p-8 shadow-xl border border-border">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Avatar placeholder */}
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-cta rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-4xl font-bold text-white">R</span>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-foreground mb-2">Ruan</h3>
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Award className="w-5 h-5 text-cta" />
                <span className="text-cta font-semibold">
                  +4 anos em automação de vendas
                </span>
              </div>
              <p className="text-muted-foreground mb-4">
                Especialista em automação com IA e sistemas de vendas. Já ajudou
                centenas de negócios a pararem de perder vendas com sistemas
                inteligentes que trabalham 24/7.
              </p>
              <blockquote className="border-l-4 border-cta pl-4 italic text-foreground">
                "Minha missão é democratizar a automação inteligente para que
                qualquer negócio possa competir de igual pra igual."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default InstructorSection;
