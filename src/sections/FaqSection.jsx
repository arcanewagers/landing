import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import { ChevronDown, ChevronUp } from "lucide-react";

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        className="flex items-center justify-between w-full py-4 text-left font-medium transition-colors duration-200 hover:text-purple-400"
        onClick={onClick}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 pr-4 text-gray-400">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  //   const [openIndex, setOpenIndex] = (useState < number) | (null > 0);
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What is Arcane Wagers?",
      answer:
        "Arcane Wagers is a play-to-earn game built on the Solana blockchain. It combines immersive sci-fi gameplay with blockchain technology, allowing players to earn cryptocurrency and own in-game assets as NFTs while exploring a vast cosmic universe.",
    },
    {
      question: "How do I start playing Arcane Wagers?",
      answer:
        "To start playing, you'll need a Solana wallet like Phantom or Solflare. Create an account on our website, connect your wallet, and either purchase or mint your first character NFT to begin your adventure in the Arcane Wagers universe.",
    },
    {
      question: "Are my in-game assets secure?",
      answer:
        "Yes, all in-game assets are secured as NFTs on the Solana blockchain. This means you have true ownership of your items, characters, and resources, which can be verified on the blockchain and traded on supported marketplaces.",
    },
    {
      question: "Can I play Arcane Wagers for free?",
      answer:
        "We offer a free-to-play model with limited features to allow players to experience the game. However, to access the full play-to-earn mechanics and own NFT assets, you'll need to purchase at least one character NFT to begin your journey.",
    },
    {
      question: "How do I earn money playing Arcane Wagers?",
      answer:
        "You can earn by participating in daily quests, winning PvP battles, completing missions, participating in tournaments, trading NFTs on our marketplace.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Find answers to the most common questions about Arcane Wagers."
        />

        <div className="max-w-3xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
