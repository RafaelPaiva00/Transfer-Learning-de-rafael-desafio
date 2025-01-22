import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">DarkSite</div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-purple-400 transition-colors">Features</a>
            <a href="#about" className="text-sm hover:text-purple-400 transition-colors">Sobre</a>
            <a href="#contact" className="text-sm hover:text-purple-400 transition-colors">Contato</a>
            <Button variant="secondary" className="glass">
              Começar
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </nav>
      </div>
    </header>
  );
};