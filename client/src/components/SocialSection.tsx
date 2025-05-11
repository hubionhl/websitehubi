import { MessageSquareLock, Twitter, MessageSquare, MessageSquareShare } from "lucide-react";

interface SocialPlatform {
  icon: React.ReactNode;
  name: string;
  description: string;
  buttonText: string;
  url: string;
}

const socialPlatforms: SocialPlatform[] = [
  {
    icon: <MessageSquareLock className="h-8 w-8" />,
    name: "MessageSquareLock",
    description: "Join our 24/7 community chat",
    buttonText: "Join Channel",
    url: "https://t.me/cryptohub",
  },
  {
    icon: <Twitter className="h-8 w-8" />,
    name: "Twitter",
    description: "Follow for daily updates & news",
    buttonText: "Follow Us",
    url: "https://twitter.com/cryptohub",
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    name: "Discord",
    description: "Join our developer community",
    buttonText: "Join Server",
    url: "https://discord.gg/cryptohub",
  },
  {
    icon: <MessageSquareShare className="h-8 w-8" />,
    name: "MessageSquareShare",
    description: "Join discussions & share ideas",
    buttonText: "Join Subreddit",
    url: "https://reddit.com/r/cryptohub",
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
            <span className="gradient-text-primary">Connect With Us</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Join our thriving community across multiple platforms to stay updated with the latest news and announcements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {socialPlatforms.map((platform) => (
            <div key={platform.name} className="glass rounded-xl p-6 hover-scale">
              <div className="social-icon h-16 w-16 rounded-full flex items-center justify-center gradient-primary mb-6 mx-auto">
                {platform.icon}
              </div>
              <h3 className="font-['Space_Grotesk'] font-medium text-xl text-center mb-2">
                {platform.name}
              </h3>
              <p className="text-white/70 text-center mb-4">
                {platform.description}
              </p>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 text-center rounded-lg gradient-primary font-medium"
              >
                {platform.buttonText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
