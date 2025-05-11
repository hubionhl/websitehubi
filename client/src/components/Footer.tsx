export const Footer = () => {
  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <a href="#" className="flex items-center">
              <img 
                src="/assets/hubi-logo.jpeg" 
                alt="$HUBI Logo" 
                className="h-8 w-8 mr-2 rounded-full" 
              />
              <span className="text-2xl font-bold font-['Space_Grotesk'] gradient-text-primary">
                $HUBI
              </span>
            </a>
            <p className="text-white/50 mt-2">
              &copy; {new Date().getFullYear()} $HUBI. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-secondary transition-colors">
              Terms
            </a>
            <a href="#" className="text-white/70 hover:text-secondary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-white/70 hover:text-secondary transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
