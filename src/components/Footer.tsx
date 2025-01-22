export const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/10 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 via-transparent to-transparent" />
      <div className="container px-4 mx-auto relative">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gradient font-bold text-2xl mb-6 md:mb-0 hover:scale-105 transition-transform">
            Zubi
          </div>
          <div className="flex gap-12 text-base text-muted-foreground">
            <a href="#" className="hover:text-green-400 transition-colors hover:scale-105 transform">Termos</a>
            <a href="#" className="hover:text-green-400 transition-colors hover:scale-105 transform">Privacidade</a>
            <a href="#" className="hover:text-green-400 transition-colors hover:scale-105 transform">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};