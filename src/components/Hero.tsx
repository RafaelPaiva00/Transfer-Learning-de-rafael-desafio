import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent" />
      <div className="container px-4 mx-auto text-center relative animate-fade-in">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient animate-fade-in">
            Transforme Suas Vendas com Zubi
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            A plataforma completa para impulsionar seu negócio com soluções 
            inovadoras e resultados comprovados.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-base glass hover:scale-105 transition-transform duration-300 px-8 py-6"
            >
              Demonstração
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};