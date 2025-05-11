import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";
import { copyToClipboard } from "@/lib/utils";

const CONTRACT_ADDRESS = "0x8362ebff36f04056f3889e39a5a73624db16eefb";

export const WhereToBySection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    const success = await copyToClipboard(CONTRACT_ADDRESS);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="buy" className="py-24 relative">
      <div className="absolute inset-0 z-0">
        {/* $HUBI background image */}
        <div
          style={{
            backgroundImage: "url('/assets/hubi-image-1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl md:text-5xl mb-4">
            <span className="gradient-text-accent">Where to Buy</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Purchase $HUBI token quickly and securely through our official launch partner.
          </p>
        </div>

        <div className="glass rounded-xl p-8 hover-scale">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full flex items-center justify-center gradient-primary mr-4">
                  <ExternalLink className="h-6 w-6" />
                </div>
                <h3 className="font-['Space_Grotesk'] font-medium text-2xl">
                  LiquidLaunch
                </h3>
              </div>
              <p className="text-white/70 mb-6">The premier launchpad for innovative tokens on Base Network. Get in early with $HUBI's official launch partner.</p>
              <div className="flex items-center mb-4">
                <span className="text-white/70 mr-2">Total Raised:</span>
                <span className="font-medium text-secondary">$325K</span>
              </div>
            </div>
            <div className="md:w-1/3">
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

        <div className="mt-16 glass rounded-xl p-8">
          <h3 className="font-['Space_Grotesk'] font-medium text-2xl mb-4 text-center">
            Token Contract Address
          </h3>
          <div className="flex items-center justify-between p-4 bg-background/50 rounded-lg mb-4">
            <code className="text-secondary font-mono text-sm md:text-base overflow-x-auto whitespace-nowrap">
              {CONTRACT_ADDRESS}
            </code>
            <button
              onClick={handleCopyAddress}
              className="ml-4 text-white hover:text-secondary transition-colors"
              aria-label="Copy contract address"
            >
              {copied ? (
                <Check className="h-5 w-5" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </button>
          </div>
          <p className="text-white/70 text-center">
            Always verify the contract address before transacting
          </p>
        </div>
      </div>
    </section>
  );
};
