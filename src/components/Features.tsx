import { TrendingUp, Users2, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Aumento nas Vendas",
    description: "Aumente sua receita com automação de vendas e gestão de leads qualificados"
  },
  {
    icon: <Users2 className="h-6 w-6" />,
    title: "Gestão de Clientes",
    description: "Gerencie relacionamentos e acompanhe o histórico completo dos seus clientes"
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Segurança Total",
    description: "Proteção completa para seus dados e informações de clientes em conformidade com a LGPD"
  }
];

export const Features = () => {
  return (
    <section id="benefits" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent" />
      <div className="container px-4 mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Por Que Escolher Zubi?
          </h2>
          <p className="text-lg text-muted-foreground">
            O CRM que impulsiona seu sucesso
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-base text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};