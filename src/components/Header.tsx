
import { Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="text-center py-8 md:py-12">
      <div className="flex items-center justify-center gap-3 mb-2">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient tracking-tight">
          Verse of the Volt
        </h1>
        <Zap className="w-8 h-8 text-amber-400 animate-flicker" />
      </div>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
        Engineering meets poetry—spark your creativity in circuits and sonnets.
      </p>
    </header>
  );
};

export default Header;
