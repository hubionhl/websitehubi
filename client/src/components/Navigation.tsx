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
        <div className="flex justify-center items-center py-4">
          <img 
            src="/assets/hubi-logo.jpeg" 
            alt="$HUBI Logo" 
            className="h-8 w-8 mr-2 rounded-full" 
          />
          <span className="text-4xl font-bold font-['Space_Grotesk'] gradient-text-primary">
            $HUBI
          </span>
        </div>
      </div>
    </nav>
  );
};
