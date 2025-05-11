import { MessageSquareLock, Twitter } from "lucide-react";

interface SocialPlatform {
  icon: React.ReactNode;
  name: string;
  description: string;
  handle?: string;
  buttonText: string;
  url: string;
}

const socialPlatforms: SocialPlatform[] = [
  {
    icon: <Twitter className="h-8 w-8" />,
    name: "Twitter (X)",
    description: "Follow for daily updates & news",
    handle: "@hubertliquid",
    buttonText: "Follow Us",
    url: "https://x.com/hubertliquid",
  },
  {
    icon: <MessageSquareLock className="h-8 w-8" />,
    name: "Telegram",
    description: "Join our 24/7 community chat",
    buttonText: "Join Channel",
    url: "https://t.me/+7hAhbUfBwnlhMmY0",
  },
];

export const SocialSection = () => {
  return (
    <section id="social" className="py-24 relative">
      <div className="absolute inset-0 z-0">
        {/* An abstract crypto-themed background with digital patterns */}
        <div
          style={{
            backgroundImage: "url('https://pixabay.com/get/g985ed2f40153d155e23edca3b75b1588803d0e3451a7184004712e24407c862f0141e6ed28f5d6f7eb965873a645fb181495ecac79245b1ee7660ca0cc66f4eb_1280.jpg')",
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
            <span className="gradient-text-primary">Join the $HUBI Community</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Connect with $HUBI holders and stay updated with the latest token developments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {socialPlatforms.map((platform) => (
            <div key={platform.name} className="glass rounded-xl p-8 hover-scale">
              <div className="flex flex-col items-center">
                <div className="social-icon h-20 w-20 rounded-full flex items-center justify-center gradient-primary mb-6">
                  {platform.icon}
                </div>
                <h3 className="font-['Space_Grotesk'] font-medium text-2xl text-center mb-2">
                  {platform.name}
                </h3>
                {platform.handle && (
                  <div className="text-secondary font-mono text-lg mb-3">{platform.handle}</div>
                )}
                <p className="text-white/70 text-center mb-6">
                  {platform.description}
                </p>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 text-center rounded-lg gradient-primary font-medium text-lg"
                >
                  {platform.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
