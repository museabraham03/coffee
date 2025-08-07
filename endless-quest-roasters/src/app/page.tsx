import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LocationsSection } from "@/components/LocationsSection";
import { CoffeeSection } from "@/components/CoffeeSection";
import { ProductGrid } from "@/components/ProductGrid";
import { InstagramSection } from "@/components/InstagramSection";
import { StorySection } from "@/components/StorySection";
import { Footer } from "@/components/Footer";
import { NewsletterModal } from "@/components/NewsletterModal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section id="home">
        <HeroSection />
      </section>
      <section id="locations">
        <LocationsSection />
      </section>
      <section id="coffee">
        <CoffeeSection />
      </section>
      <section id="products">
        <ProductGrid />
      </section>
      <section id="instagram">
        <InstagramSection />
      </section>
      <section id="story">
        <StorySection />
      </section>
      <Footer />
      <NewsletterModal />
    </div>
  );
}
