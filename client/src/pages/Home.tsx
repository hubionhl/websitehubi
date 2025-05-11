import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { SocialSection } from "@/components/SocialSection";
import { WhereToBySection } from "@/components/WhereToBySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <SocialSection />
        <WhereToBySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
