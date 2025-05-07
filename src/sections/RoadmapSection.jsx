import React from "react";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import { CheckCircle, Circle } from "lucide-react";

const RoadmapItem = ({
  phase,
  date,
  title,
  description,
  items,
  isLeft = true,
}) => {
  return (
    <div
      className={`mb-8 flex flex-col ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } gap-4 md:gap-8`}
    >
      <div className="md:w-1/2">
        <Card hoverEffect={false}>
          <div className="inline-block bg-purple-500/20 text-purple-400 text-sm font-medium py-1 px-3 rounded-full mb-2">
            {phase} • {date}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                {item.completed ? (
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                ) : (
                  <Circle className="h-5 w-5 text-gray-500 shrink-0 mt-0.5" />
                )}
                <span
                  className={item.completed ? "text-white" : "text-gray-400"}
                >
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <div className="hidden md:flex md:w-1/2 items-center justify-center">
        {/* Empty div for spacing */}
      </div>
    </div>
  );
};

const RoadmapSection = () => {
  const roadmapItems = [
    {
      phase: "Phase 1",
      date: "Q2 2025",
      title: "Foundation & Development",
      description:
        "Building the core technology and game mechanics of Arcane Wagers.",
      items: [
        { text: "Concept development and whitepaper release", completed: true },
        { text: "Core team formation", completed: true },
        { text: "Smart contract development", completed: true },
        { text: "Initial artwork and game design", completed: false },
        { text: "Private funding round", completed: false },
      ],
      isLeft: true,
    },
    {
      phase: "Phase 2",
      date: "Q3 2025",
      title: "Alpha Release & Community",
      description: "First playable version and building the initial community.",
      items: [
        { text: "Alpha game release to early supporters", completed: false },
        { text: "Community building initiatives", completed: false },
        { text: "NFT character creation system", completed: false },
        { text: "Initial marketplace implementation", completed: false },
        { text: "Strategic partnerships", completed: false },
      ],
      isLeft: false,
    },
    {
      phase: "Phase 3",
      date: "Q4 2025",
      title: "Token Launch & Expansion",
      description: "Official token launch and expansion of game features.",
      items: [
        { text: "$AW token public sale", completed: false },
        { text: "Exchange listings", completed: false },
        { text: "Beta game release with expanded features", completed: false },
        { text: "Guild system implementation", completed: false },
        { text: "Staking and rewards mechanisms", completed: false },
      ],
      isLeft: true,
    },
    {
      phase: "Phase 4",
      date: "Q1 2026",
      title: "Full Launch & Evolution",
      description:
        "Full game launch and ongoing development based on community feedback.",
      items: [
        { text: "Official game launch", completed: false },
        { text: "Mobile version release", completed: false },
        { text: "Governance system activation", completed: false },
        { text: "Tournament and esports integration", completed: false },
        { text: "Cross-chain compatibility", completed: false },
      ],
      isLeft: false,
    },
  ];

  return (
    <section id="roadmap" className="py-24 relative">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-purple-600/20 blur-[150px]"></div>
      <div className="absolute right-0 top-3/4 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-600/20 blur-[150px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle
          title="Roadmap"
          subtitle="Our development timeline and future plans for the Arcane Wagers ecosystem."
        />

        <div className="relative">
          {/* Center line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 transform -translate-x-1/2"></div>

          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <RoadmapItem
                key={index}
                phase={item.phase}
                date={item.date}
                title={item.title}
                description={item.description}
                items={item.items}
                isLeft={item.isLeft}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
