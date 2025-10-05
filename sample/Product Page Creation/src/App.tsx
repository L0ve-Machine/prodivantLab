import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProductsSection } from "./components/ProductsSection";
import { StatsSection } from "./components/StatsSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
}