import { useState } from "react";

const WalletConnection = () => {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = async () => {
    try {
      // TODO: Implement wallet connection logic
      setIsConnected(true);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  return (
    <button
      onClick={handleConnect}
      className="bg-gradient-to-r from-arcane-purple to-arcane-blue hover:from-arcane-blue hover:to-arcane-purple text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
    >
      {isConnected ? "Join Our Beta" : "Click Me"}
    </button>
  );
};

export default WalletConnection;
