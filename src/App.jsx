import React from "react";
import Header from "./components/Header";
import HeroSection from "./sections/HeroSection.jsx";
import FeaturesSection from "./sections/FeaturesSection.jsx";
import CommunitySection from "./sections/CommunitySection.jsx";
import RoadmapSection from "./sections/RoadmapSection.jsx";
import FaqSection from "./sections/FaqSection.jsx";
import NewsletterSection from "./sections/NewsletterSection.jsx";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <RoadmapSection />
        <CommunitySection />
        <FaqSection />
        <NewsletterSection />
      </main>
    </div>
  );
}

export default App;
