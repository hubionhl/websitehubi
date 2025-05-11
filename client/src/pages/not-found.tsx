import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HomeIcon, AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#141414] to-[#0a1a16]">
      <Card className="w-full max-w-md mx-4 border-teal-400/30 bg-black/30 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center mb-6">
            <AlertCircle className="h-16 w-16 text-teal-400 mb-4" />
            <h1 className="text-3xl font-bold gradient-text-primary">404 Not Found</h1>
            <p className="mt-4 text-white/70">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex justify-center mt-6">
            <Link href="/">
              <Button className="gradient-primary text-white hover:opacity-90 flex items-center gap-2">
                <HomeIcon className="h-4 w-4" />
                Return to Homepage
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
