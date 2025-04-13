
import React, { useState } from "react";
import { Zap, LightbulbIcon, CircleDashed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

type PoemStyle = "haiku" | "sonnet" | "free-verse";

interface PoemFormProps {
  onGeneratePoem: (poem: string) => void;
}

const PoemForm = ({ onGeneratePoem }: PoemFormProps) => {
  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState<PoemStyle>("haiku");
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePoem = () => {
    if (!topic.trim()) {
      toast({
        title: "Warning",
        description: "Please enter an engineering topic",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    // Simulate poem generation with different structures based on style
    setTimeout(() => {
      let poem = "";
      const topicLower = topic.toLowerCase();

      if (style === "haiku") {
        poem = `${topicLower.charAt(0).toUpperCase() + topicLower.slice(1)} principles\nMechanics of science and math\nInnovation flows`;
      } else if (style === "sonnet") {
        poem = `The wonders of ${topicLower} now unfold,\nIn circuits, gears, and mental fortitude.\nThrough challenges that engineers behold,\nCreativity and logic both conclude.\n\nThe numbers dance in formulas displayed,\nAs problems yield to thinking sharp and keen.\nIn workshops where the future plans are laid,\nThe blueprints of tomorrow can be seen.\n\nWith careful thought and calculation's might,\nWe build the structures standing proud and tall.\nFrom tiny chips to spans that bridge the night,\n${topicLower.charAt(0).toUpperCase() + topicLower.slice(1)} answers every call.\n\nThrough science, math, and vision intertwined,\nWe craft the world with hands and brilliant mind.`;
      } else {
        poem = `${topicLower.charAt(0).toUpperCase() + topicLower.slice(1)} —\na language of numbers,\nand possibility.\n\nEquations flow like rivers\ncarrying innovation downstream.\nMetals bend, circuits connect,\nproblems transform into solutions.\n\nIn the workshop of imagination,\nwe build the impossible\nwith logic and love,\nprecision and passion.\n\n${topicLower.charAt(0).toUpperCase() + topicLower.slice(1)}:\nthe poetry of progress.`;
      }

      onGeneratePoem(poem);
      setIsGenerating(false);
      toast({
        title: "Success",
        description: "Your engineering poem has been created!",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 circuit-border">
      <div className="grid gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <LightbulbIcon className="h-5 w-5 text-amber-400 animate-flicker" />
            <Label htmlFor="topic" className="text-lg">
              Engineering Topic
            </Label>
          </div>
          <Input
            id="topic"
            placeholder="e.g., robotics, fluid mechanics, electronics"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="bg-muted/50"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <CircleDashed className="h-5 w-5 text-primary animate-spin" />
            <Label htmlFor="style" className="text-lg">
              Poem Style
            </Label>
          </div>
          <Select value={style} onValueChange={(value) => setStyle(value as PoemStyle)}>
            <SelectTrigger id="style" className="bg-muted/50">
              <SelectValue placeholder="Select a poem style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="haiku">Haiku (3 lines)</SelectItem>
              <SelectItem value="sonnet">Sonnet (14 lines)</SelectItem>
              <SelectItem value="free-verse">Free Verse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={generatePoem}
          className="hover-lift bg-gradient-to-r from-primary to-accent text-white font-medium text-lg py-6"
          disabled={isGenerating}
        >
          <Zap className="mr-2 h-5 w-5" />
          {isGenerating ? "Creating Poetry..." : "⚡ Generate My Poem"}
        </Button>
      </div>
    </div>
  );
};

export default PoemForm;
