import { Laptop, Shield, Zap } from "lucide-react";

const features = [
  {
    icon: <Laptop className="h-8 w-8" />,
    title: "Design Moderno",
    description: "Interface elegante e responsiva para todos os dispositivos"
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Alta Performance",
    description: "Otimizado para oferecer a melhor experiência possível"
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Segurança",
    description: "Proteção avançada para seus dados e informações"
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recursos Incríveis
          </h2>
          <p className="text-muted-foreground">
            Tudo que você precisa para começar
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass p-6 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};