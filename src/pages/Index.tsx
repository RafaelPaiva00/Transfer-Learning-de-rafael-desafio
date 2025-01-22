import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-black to-background">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-background to-background pointer-events-none" />
      <div className="relative">
        <Header />
        <Hero />
        <Features />
        <Footer />
      </div>
    </div>
  );
};

export default Index;