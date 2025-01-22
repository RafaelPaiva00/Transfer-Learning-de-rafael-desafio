import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gradient">
            Transforme Suas Vendas com Zubi
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            A plataforma completa para impulsionar seu negócio com soluções 
            inovadoras e resultados comprovados.
          </p>
          <div className="flex justify-center">
            <Button size="lg" variant="secondary" className="text-lg glass px-16 py-8 text-2xl">
              Demonstração
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};