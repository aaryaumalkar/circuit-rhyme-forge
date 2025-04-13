
import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import PoemForm from "@/components/PoemForm";
import PoemDisplay from "@/components/PoemDisplay";
import Footer from "@/components/Footer";

const Index = () => {
  const [poem, setPoem] = useState<string | null>(null);

  return (
    <div className="min-h-screen py-8 px-4">
      <Toaster position="top-center" />
      
      <div className="max-w-3xl mx-auto">
        <Header />
        
        <main className="mt-8">
          <PoemForm onGeneratePoem={setPoem} />
          <PoemDisplay poem={poem} />
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
