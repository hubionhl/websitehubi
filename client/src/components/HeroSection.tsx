import { Button } from "@/components/ui/button";
import { smoothScroll } from "@/lib/utils";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 relative overflow-hidden">
      {/* $HUBI background image */}
      <div className="absolute inset-0 z-0">
        <div 
          style={{
            backgroundImage: "url('/assets/hubi-image-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }} 
          className="absolute inset-0 opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/5 via-background/10 to-background/40" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-['Space_Grotesk'] font-bold text-4xl md:text-6xl lg:text-7xl mb-10 leading-tight">
            <span className="text-white text-shadow-lg">Official $HUBI Token</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white font-semibold mb-12" /*bg-background/25 p-4 rounded-lg*/>
            Yeah, I'm fat. I'm lazy. I SELL FENT<br />But at least I buy $HUBI.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => window.open("https://liquidlaunch.app/token/0x8362ebff36f04056f3889e39a5a73624db16eefb", "_blank")}
              className="px-8 py-3 rounded-lg gradient-primary hover-scale font-['Space_Grotesk'] font-medium"
            >
              Buy Now
            </Button>
            <Button 
              onClick={() => smoothScroll('social')}
              variant="outline"
              className="px-8 py-3 rounded-lg glass hover-scale font-['Space_Grotesk'] font-medium border border-secondary/30"
            >
              Socials
            </Button>
          </div>
        </div>
      </div>
      
      {/* Glass-morphic floating elements & Happy Hubi */}
      <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full glass opacity-50 animate-pulse hidden md:block" />
      <div className="absolute top-32 right-24 w-16 h-16 rounded-full glass opacity-40 animate-pulse hidden md:block" />
      {/*<div className="absolute top-60 right-10 w-32 h-32 md:w-48 md:h-48 hidden md:block">
        <img 
          src="/assets/hubi-happy.jpeg" 
          alt="Happy Hubi" 
          className="w-full h-full object-cover rounded-full border-4 border-secondary hover-scale"
        />
      </div>*/}
    </section>
  );
};
