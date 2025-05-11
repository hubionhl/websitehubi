export const Footer = () => {
  return (
    <footer className="py-12 relative">
      <div className="container mx-auto px-6">
        <div className="flex justify-center items-center">
          <a href="#" className="flex items-center">
            <img 
              src="/assets/hubi-logo.jpeg" 
              alt="$HUBI Logo" 
              className="h-12 w-12 mr-3 rounded-full" 
            />
            <span className="text-4xl font-bold font-['Space_Grotesk'] gradient-text-primary">
              $HUBI
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};
