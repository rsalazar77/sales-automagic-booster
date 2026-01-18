const FooterSection = () => {
  return (
    <footer className="bg-background border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center text-sm text-muted-foreground">
          <p className="mb-2">CNPJ: 49.598.655/0001-00</p>
          <p className="mb-4">
            Suporte:{" "}
            <a
              href="mailto:suporte@seudominio.com.br"
              className="text-primary hover:underline"
            >
              suporte@seudominio.com.br
            </a>
          </p>
          <div className="flex justify-center gap-4 mb-4">
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <span>|</span>
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
          </div>
          <p>© 2025 — Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
