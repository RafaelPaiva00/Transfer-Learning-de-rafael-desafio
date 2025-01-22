export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gradient font-bold text-xl mb-4 md:mb-0">
            Zubi
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-green-400 transition-colors">Termos</a>
            <a href="#" className="hover:text-green-400 transition-colors">Privacidade</a>
            <a href="#" className="hover:text-green-400 transition-colors">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};