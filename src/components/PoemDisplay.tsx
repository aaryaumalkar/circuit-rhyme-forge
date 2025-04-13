
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface PoemDisplayProps {
  poem: string | null;
}

const PoemDisplay = ({ poem }: PoemDisplayProps) => {
  const [copied, setCopied] = useState(false);

  if (!poem) {
    return null;
  }

  const copyPoem = () => {
    navigator.clipboard.writeText(poem);
    setCopied(true);
    toast({
      title: "Success",
      description: "Poem copied to clipboard!",
      variant: "default",
    });
    
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="notebook-paper animate-fade-in mt-8">
      <div className="poem-container font-mono mb-6 text-lg">
        {poem}
      </div>
      <Button
        onClick={copyPoem}
        variant="outline"
        className="hover-lift"
      >
        {copied ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="mr-2 h-4 w-4" />
            Copy Poem
          </>
        )}
      </Button>
    </div>
  );
};

export default PoemDisplay;
