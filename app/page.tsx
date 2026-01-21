import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ProductSection from "@/components/home/ProductSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProductSection title="New Products" />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  );
}
