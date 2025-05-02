import { useState } from "react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // TODO: Implement newsletter signup logic
      setIsSubmitted(true);
      setEmail("");
    } catch (error) {
      console.error("Failed to submit newsletter signup:", error);
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="text-green-400">
          <p>Thank you for subscribing!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow"
          />
          <button
            type="submit"
            className="bg-arcane-blue hover:bg-arcane-purple text-white px-4 py-2 rounded-lg"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;
