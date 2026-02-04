import { SectionWrapper } from "@/components/ui/section-wrapper";
import ruanPhoto from "@/assets/ruan-photo.jpg";

const InstructorSection = () => {
  return (
    <SectionWrapper variant="alternate" id="instructor">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Quem vai te guiar
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <img 
              src={ruanPhoto} 
              alt="Ruan - Especialista em automação com IA"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover flex-shrink-0 border-4 border-cta/20 mx-auto md:mx-0"
            />

            <div className="text-left">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ruan</h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Eu abandonei a faculdade no sétimo semestre. Não porque era rebelde ou irresponsável, mas porque entendi uma coisa cedo: <strong className="text-foreground">diploma não paga boleto e teoria não gera venda.</strong>
                </p>
                
                <p>
                  Desde então, entrei de cabeça no marketing digital. Passei por tudo que você pode imaginar: social media, tráfego pago, design, web design, dropshipping, gestão de lançamentos... Fui virando a chave até encontrar onde realmente me tornei uma máquina: <strong className="text-foreground">automação.</strong>
                </p>
                
                <p>
                  Enquanto a maioria ainda engatinha no básico, eu estava criando automações do zero, do jeito certo – com lógica, inteligência comercial e foco em escalar resultado.
                </p>
                
                <p>
                  Não falo isso pra me exibir. Falo porque foi exatamente isso que me fez sair do zero e começar a ser pago para resolver problemas grandes. E sim, me tornei uma referência na construção de automações personalizadas que vendem.
                </p>
                
                <p>
                  Se você está aqui, provavelmente não é por curiosidade. É porque precisa destravar resultado. <strong className="text-foreground">Eu posso te mostrar como.</strong>
                </p>
                
                <p>
                  Este workshop é pra quem já tem um negócio rodando, mas está cansado de ver venda caindo, lead sumindo, time improdutivo e uma operação travada.
                </p>
                
                <p>
                  Eu vou te mostrar como a automação certa – aplicada com estratégia, funil bem pensado e gatilhos no ponto – pode recuperar as vendas que você já devia estar fazendo.
                </p>
                
                <div className="pt-4 space-y-1">
                  <p className="text-foreground font-semibold">É sobre parar de ser refém do improviso.</p>
                  <p className="text-foreground font-semibold">É sobre construir uma máquina.</p>
                  <p className="text-foreground font-semibold">E é sobre vender mais com menos esforço.</p>
                </div>
                
                <div className="pt-4">
                  <p>
                    Se isso fizer sentido pra você, <strong className="text-cta">bem-vindo.</strong>
                  </p>
                  <p>
                    Se não fizer, continue apostando no achismo. <span className="text-foreground">O mercado cobra.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default InstructorSection;
