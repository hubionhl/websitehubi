import { Button } from "@/components/ui/button";
import { smoothScroll } from "@/lib/utils";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      {/* Abstract blockchain background elements */}
      <div className="absolute inset-0 z-0">
        <div 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }} 
          className="absolute inset-0 opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-['Space_Grotesk'] font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            <span className="gradient-text-primary">Your Crypto</span>
            <br />
            <span className="gradient-text-accent">Social Hub</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            A central platform for all your crypto presence needs, connecting your community across the digital landscape.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => smoothScroll('social')}
              className="px-8 py-3 rounded-lg gradient-primary hover-scale font-['Space_Grotesk'] font-medium"
            >
              Explore Social
            </Button>
            <Button 
              onClick={() => smoothScroll('buy')}
              variant="outline"
              className="px-8 py-3 rounded-lg glass hover-scale font-['Space_Grotesk'] font-medium border border-secondary/30"
            >
              Where to Buy
            </Button>
          </div>
        </div>
      </div>
      
      {/* Glass-morphic floating elements */}
      <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full glass opacity-50 animate-pulse hidden md:block" />
      <div className="absolute top-32 right-24 w-16 h-16 rounded-full glass opacity-40 animate-pulse hidden md:block" />
    </section>
  );
};
