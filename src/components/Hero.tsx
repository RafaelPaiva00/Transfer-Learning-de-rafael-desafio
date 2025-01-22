import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient">
            Design Moderno & Elegante
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Uma experiência única com interface moderna e minimalista,
            perfeita para seus projetos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Começar Agora
            </Button>
            <Button size="lg" variant="secondary" className="text-lg glass">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};