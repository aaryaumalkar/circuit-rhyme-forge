
import { Lightbulb, Cable } from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-12 mb-6 text-center text-muted-foreground">
      <div className="flex items-center justify-center gap-3">
        <Lightbulb className="w-4 h-4 animate-flicker" />
        <p className="text-sm md:text-base">
          Powered by rhymes, resistors, and a little imagination.
        </p>
        <Cable className="w-4 h-4" />
      </div>
    </footer>
  );
};

export default Footer;
