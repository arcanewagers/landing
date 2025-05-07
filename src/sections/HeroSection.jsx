import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          transform: `translateY(${offsetY * 0.5}px)`,
          filter: "brightness(0.4) saturate(1.2)",
        }}
      />

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900 z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Arcane Wagers:</span>
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-teal-400 bg-clip-text text-transparent">
              Battle, Wager, Collect
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Craft decks, stake Solana, and own rare NFT cards in a thrilling
            card game.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <Button variant="primary" size="lg">
              Play Now
            </Button>
          </div>

          <div className="flex justify-center items-center gap-8 py-4">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-1">$11.95B</div>
              <div className="text-sm text-gray-400">TCG Market (2022)</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-1">$31.47B</div>
              <div className="text-sm text-gray-400">Projected by 2030</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold mb-1">$65.7B</div>
              <div className="text-sm text-gray-400">Blockchain Gaming</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 animate-bounce">
        <a
          href="#features"
          className="text-white/70 hover:text-white transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
