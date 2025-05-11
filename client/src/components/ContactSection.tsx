import { Mail, Headset, Briefcase, Users, HelpCircle } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 z-0">
        {/* A futuristic digital network visualization */}
        <div
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 opacity-10"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Space_Grotesk'] font-bold text-3xl md:text-5xl mb-4">
              <span className="gradient-text-accent">Get in Touch</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Have questions or want to learn more? Reach out to our team.
            </p>
          </div>

          <div className="glass rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-['Space_Grotesk'] font-medium text-2xl mb-6">
                  Contact Information
                </h3>

                <div className="flex items-start mb-6">
                  <Mail className="text-secondary h-5 w-5 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href="mailto:contact@cryptohub.com"
                      className="text-white/70 hover:text-secondary transition-colors"
                    >
                      contact@cryptohub.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start mb-6">
                  <Headset className="text-secondary h-5 w-5 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Support</p>
                    <a
                      href="mailto:support@cryptohub.com"
                      className="text-white/70 hover:text-secondary transition-colors"
                    >
                      support@cryptohub.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Briefcase className="text-secondary h-5 w-5 mr-4 mt-1" />
                  <div>
                    <p className="font-medium">Business Inquiries</p>
                    <a
                      href="mailto:business@cryptohub.com"
                      className="text-white/70 hover:text-secondary transition-colors"
                    >
                      business@cryptohub.com
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-['Space_Grotesk'] font-medium text-2xl mb-6">
                  Community
                </h3>
                <p className="text-white/70 mb-6">
                  Join our growing community of over 250,000 members worldwide. Connect, learn, and grow with like-minded crypto enthusiasts.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="px-6 py-2 rounded-lg glass hover-scale border border-secondary/30 flex items-center"
                  >
                    <Users className="h-5 w-5 mr-2" />
                    Community Forum
                  </a>
                  <a
                    href="#"
                    className="px-6 py-2 rounded-lg glass hover-scale border border-secondary/30 flex items-center"
                  >
                    <HelpCircle className="h-5 w-5 mr-2" />
                    FAQ
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
