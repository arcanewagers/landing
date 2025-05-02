// Let's analyze the structure of the provided React code
import BetaSignup from "./components/BetaSignup";
import LegalLinks from "./components/LegalLinks";
import NewsletterSignup from "./components/NewsletterSignup";
import SocialLinks from "./components/SocialLinks";
import WalletConnection from "./components/WalletConnection";

// Reusable Section component for consistent styling
const Section = ({ children, className, bgColor = "bg-gray-900" }) => (
  <section className={`py-20 px-4 ${bgColor} ${className}`}>
    <div className="max-w-6xl mx-auto">{children}</div>
  </section>
);

// Reusable Card component for feature and stat cards
const Card = ({ title, description, titleColor, className }) => (
  <div
    className={`bg-gray-800 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 ${className}`}
    role="article"
  >
    <h3 className={`text-2xl font-bold mb-4 ${titleColor}`}>{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

// Reusable StatCard component for market opportunity stats
const StatCard = ({ value, label, valueColor }) => (
  <div className="text-center">
    <p className={`text-3xl font-bold ${valueColor}`}>{value}</p>
    <p className="text-gray-300">{label}</p>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-arcane-dark to-arcane-darker text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-title"
      >
        <div
          className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        />
        <div className="relative z-10 text-center px-4">
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-arcane-blue to-arcane-purple"
          >
            Arcane Wagers
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">Coming Soon</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <SocialLinks />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <NewsletterSignup />
            </div>
          </div>
          <div className="mt-12 text-center text-gray-400"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
