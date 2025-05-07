import React from "react";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { Coins, TrendingUp, Landmark, Shield, Target, Zap } from "lucide-react";

const TokenAllocation = ({ label, percentage, color }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-gray-300">{label}</span>
        <span className="text-sm font-medium text-gray-300">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const MarketStat = ({ icon, title, value, description }) => {
  return (
    <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/20">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <div className="text-3xl font-bold mb-2">{value}</div>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const TokenomicsSection = () => {
  const tokenAllocations = [
    { label: "Gameplay Rewards", percentage: 40, color: "bg-purple-500" },
    { label: "Ecosystem Fund", percentage: 20, color: "bg-blue-500" },
    { label: "Team & Advisors", percentage: 15, color: "bg-teal-500" },
    { label: "Public Sale", percentage: 10, color: "bg-indigo-500" },
    { label: "Private Sale", percentage: 10, color: "bg-fuchsia-500" },
    { label: "Liquidity", percentage: 5, color: "bg-pink-500" },
  ];

  const tokenFeatures = [
    {
      icon: <Coins className="h-6 w-6 text-purple-400" />,
      title: "In-Game Currency",
      description:
        "Use $ARC tokens to purchase items, upgrade equipment, and enter special events.",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-400" />,
      title: "Staking Rewards",
      description:
        "Stake your tokens to earn passive income and gain exclusive access to premium features.",
    },
    {
      icon: <Landmark className="h-6 w-6 text-purple-400" />,
      title: "Governance",
      description:
        "Participate in DAO decisions to shape the future development of the Arcane Wagers universe.",
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-400" />,
      title: "Deflationary Mechanics",
      description:
        "Token burn mechanisms ensure long-term value appreciation for holders.",
    },
  ];

  const marketStats = [
    {
      icon: <TrendingUp className="h-6 w-6 text-purple-400" />,
      title: "TCG Market",
      value: "$11.95B",
      description:
        "Total market size in 2022, projected to reach $31.47B by 2030",
    },
    {
      icon: <Zap className="h-6 w-6 text-purple-400" />,
      title: "Blockchain Gaming",
      value: "$65.7B",
      description: "Projected market size by 2030",
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-400" />,
      title: "Solana Advantage",
      value: "Fast & Low-Cost",
      description: "Lightning-fast transactions with minimal fees",
    },
  ];

  return (
    <section id="tokenomics" className="py-24 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1),transparent_70%)]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle
          title="Tokenomics"
          subtitle="Discover how the $AW token powers the entire Arcane Wagers ecosystem and provides value to players and investors."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Token Allocation
              </h3>
              <div className="space-y-6">
                {tokenAllocations.map((allocation, index) => (
                  <TokenAllocation
                    key={index}
                    label={allocation.label}
                    percentage={allocation.percentage}
                    color={allocation.color}
                  />
                ))}
              </div>
            </Card>
          </div>

          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6">Utility & Value</h3>
              <div className="grid gap-6">
                {tokenFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="mt-1 bg-purple-500/20 p-3 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Card>
              <div className="text-center">
                <Target className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Token Launch</h3>
                <p className="text-gray-400 mb-6">
                  The public token sale is scheduled for Q4 2025. Join our
                  whitelist to get priority access.
                </p>
                <a
                  href="#newsletter"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-medium transition-colors duration-200"
                >
                  Join Whitelist
                </a>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {marketStats.map((stat, index) => (
            <MarketStat
              key={index}
              icon={stat.icon}
              title={stat.title}
              value={stat.value}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
