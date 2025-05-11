import { useState } from "react";
import { Menu, X } from "lucide-react";
import { smoothScroll } from "@/lib/utils";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "home" },
  { label: "Social", href: "social" },
  { label: "Where to Buy", href: "buy" },
  { label: "Contact", href: "contact" },
];

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (id: string) => {
    smoothScroll(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 glass">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center py-4">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-bold font-['Space_Grotesk'] gradient-text-primary">
              CryptoHub
            </span>
          </a>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-white hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-white"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden w-full glass ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="text-white hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
