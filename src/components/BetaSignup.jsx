import { useState } from "react";

const BetaSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Implement beta signup logic
      setIsSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error("Failed to submit beta signup:", error);
    }
  };

  return (
    <div className="text-center">
      {isSubmitted ? (
        <div className="text-green-400">
          <p className="text-xl font-bold">Thank you for signing up!</p>
          <p>We'll be in touch soon with your beta access details.</p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow max-w-md"
          />
          <button
            type="submit"
            className="bg-arcane-blue hover:bg-arcane-purple text-white font-bold py-3 px-8 rounded-full transition-all duration-300"
          >
            Join Beta
          </button>
        </form>
      )}
    </div>
  );
};

export default BetaSignup;
