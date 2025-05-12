import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { copyToClipboard } from "@/lib/utils";

const CONTRACT_ADDRESS = "0x8362ebff36f04056f3889e39a5a73624db16eefb";

export const WhereToBySection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    const success = await copyToClipboard(CONTRACT_ADDRESS);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
``    }
  };

  return (
    <section id="buy" className="py-60 relative">
      <div className="absolute inset-0 z-0">
        {/* $HUBI background image */}
        <div
          style={{
            backgroundColor: "#050f12"
          }}
          className="absolute inset-0"
            />
        {/* Focused foreground image (not blurred, smaller, centered) */}
        <div
          style={{
            backgroundImage: "url('/assets/hubi-friends.jpeg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            transform: "scale(0.99)",
          }}
          className="absolute inset-0 opacity-100"
        />

        {/* Optional overlay to darken the scene slightly */}
        <div className="absolute inset-0 bg-background/30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl md:text-5xl mb-4">
            <span className="text-white">Where to Buy</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto text-xl font-medium">
            Just Buy FENT. <br/> $HUBI*
          </p>
        </div>

        <div className="glass rounded-xl p-8 hover-scale">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <div className="h-14 w-14 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                  <img 
                    src="/assets/liquidlaunch-logo.png" 
                    alt="LiquidLaunch Logo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-['Space_Grotesk'] font-medium text-2xl">
                  LiquidLaunch
                </h3>
              </div>
              <p className="text-white/70 mb-6">The official FENT warehouse and marketplace <br/> Get your share now</p>
              <div className="flex items-center mb-4">
                {/*<span className="text-white/70 mr-2">Total Raised:</span>
                <span className="font-medium text-secondary">$325K</span>*/}
              </div>
            </div>
            <div className="md:w-1/3 relative">
              {<div className="absolute -top-16 -right-10 w-20 h-20 hidden md:block">
                <img
                  src="/assets/hubi-happy.jpeg"
                  alt="Happy Hubi"
                  className="w-full h-full object-cover rounded-full border-2 border-secondary rotate-12"
                />
              </div>}
              <a
                href="https://liquidlaunch.app/token/0x8362ebff36f04056f3889e39a5a73624db16eefb"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 px-6 text-center rounded-lg gradient-primary font-medium text-lg"
              >
                Buy on LiquidLaunch
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};
