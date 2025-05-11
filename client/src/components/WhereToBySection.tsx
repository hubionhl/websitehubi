import { useState } from "react";
import { Copy, Check, Repeat, Cake, DollarSign } from "lucide-react";
import { copyToClipboard } from "@/lib/utils";

interface Exchange {
  name: string;
  icon: React.ReactNode;
  description: string;
  metric: string;
  metricValue: string;
  url: string;
}

const exchanges: Exchange[] = [
  {
    name: "Uniswap",
    icon: <Repeat className="h-6 w-6" />,
    description: "Decentralized exchange with deep liquidity pools",
    metric: "Liquidity:",
    metricValue: "$2.45M",
    url: "https://app.uniswap.org/",
  },
  {
    name: "PancakeSwap",
    icon: <Cake className="h-6 w-6" />,
    description: "BSC-based DEX with low transaction fees",
    metric: "Liquidity:",
    metricValue: "$1.85M",
    url: "https://pancakeswap.finance/",
  },
  {
    name: "Binance",
    icon: <DollarSign className="h-6 w-6" />,
    description: "Leading centralized exchange with high volume",
    metric: "Volume (24h):",
    metricValue: "$4.2M",
    url: "https://www.binance.com/",
  },
];

const CONTRACT_ADDRESS = "0x7e5F4552091A69125d5DfCb7b8C2659029395Bdf";

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
        {/* A memecoin culture inspired abstract art background */}
        <div
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 opacity-10"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl md:text-5xl mb-4">
            <span className="gradient-text-accent">Where to Buy</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Purchase our token easily through these trusted exchanges and platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exchanges.map((exchange) => (
            <div key={exchange.name} className="glass rounded-xl p-6 hover-scale">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-['Space_Grotesk'] font-medium text-2xl">
                  {exchange.name}
                </h3>
                <div className="h-12 w-12 rounded-full flex items-center justify-center gradient-primary">
                  {exchange.icon}
                </div>
              </div>
              <p className="text-white/70 mb-6">{exchange.description}</p>
              <div className="flex items-center justify-between mb-6">
                <span className="text-white/70">{exchange.metric}</span>
                <span className="font-medium text-secondary">{exchange.metricValue}</span>
              </div>
              <a
                href={exchange.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 text-center rounded-lg gradient-primary font-medium"
              >
                Trade Now
              </a>
            </div>
          ))}
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
