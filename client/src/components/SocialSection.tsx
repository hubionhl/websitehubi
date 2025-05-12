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
    name: "",
    description: "Just follow Bozzo",
    handle: "@hubertliquid",
    buttonText: "Follow Us",
    url: "https://x.com/hubertliquid",
  },
  {
    icon: <MessageSquareLock className="h-8 w-8" />,
    name: "Telegram",
    description: "Join FentHouse",
    buttonText: "Join Channel",
    url: "https://t.me/+7hAhbUfBwnlhMmY0",
  },
];

export const SocialSection = () => {
  return (
    <section id="social" className="py-60 relative">
      <div className="absolute inset-0 z-0">
        {/* Blurred background version (stretched) */}
        <div
          style={{
            backgroundImage: "url('/assets/hubi-moon.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
            transform: "scale(1.1)", // a bit zoomed so blur doesn't leave edges
          }}
          className="absolute inset-0 opacity-60"
        />
        {/* Feather gradient to blend sharp and blurred background smoothly */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.8))",
            zIndex: 5,
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-[15]"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(24,24,24,1) 100%)",
          }}
        />

        {/* Focused foreground image (not blurred, smaller, centered) */}
        <div
          style={{
            backgroundImage: "url('/assets/hubi-moon.jpeg')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 opacity-100"
        />

        {/* Optional overlay to darken the scene slightly */}
        <div className="absolute inset-0 bg-background/30" />
      </div>


      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-['Space_Grotesk'] font-bold text-3xl md:text-5xl mb-4">
            <span className="gradient-text-primary">Join the CRACK House</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Connect with other Addicts. $HUBI 
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
