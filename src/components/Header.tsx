import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass backdrop-blur-lg">
      <div className="container mx-auto px-4 py-3">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient hover:scale-105 transition-transform">
            Zubi
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm hover:text-green-400 transition-colors hover:scale-105 transform">Produtos</a>
            <a href="#benefits" className="text-sm hover:text-green-400 transition-colors hover:scale-105 transform">Benefícios</a>
            <a href="#contact" className="text-sm hover:text-green-400 transition-colors hover:scale-105 transform">Contato</a>
            <Button 
              variant="secondary" 
              className="glass hover:scale-105 transition-transform text-sm px-6"
            >
              Comprar Agora
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden hover:bg-green-500/10">
            <Menu className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </header>
  );
};