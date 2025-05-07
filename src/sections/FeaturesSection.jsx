import { Coins, Gamepad2, Shield, Sword, Users } from "lucide-react";
import React from "react";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card>
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </Card>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Gamepad2 className="h-8 w-8 text-purple-400" />,
      title: "Strategic Gameplay",
      description: "Outwit opponents with custom decks and tactical plays.",
    },
    {
      icon: <Coins className="h-8 w-8 text-purple-400" />,
      title: "Solana Wagering",
      description: "Bet SOL securely with transparent smart contract payouts.",
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-400" />,
      title: "NFT Marketplace",
      description: "Trade and collect unique card NFTs with true ownership.",
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-purple-600/10 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Game Features"
          subtitle="Discover the innovative features that make Arcane Wagers a revolutionary card game on the blockchain."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="relative rounded-xl overflow-hidden border border-purple-500/20 max-w-5xl mx-auto">
            <img
              src="https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Arcane Wagers Gameplay"
              className="w-full object-cover h-96 md:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/70 to-gray-900/70 flex items-center justify-center">
              <div className="p-6 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Dive into strategic battles
                </h3>
                <p className="text-lg text-gray-300 mb-6 max-w-xl mx-auto">
                  Where every move counts in this thrilling card game.
                </p>
                <a
                  href="#play"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  Play Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
