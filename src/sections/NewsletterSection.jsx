import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { Mail, Check } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your API
      console.log("Subscribing email:", email);
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="newsletter" className="py-24 relative">
      {/* Decorative background */}
      <div
        className="absolute inset-0 bg-cover bg-fixed opacity-20 z-0"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      />
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="h-12 w-12 text-purple-400 mx-auto mb-6" />

          <SectionTitle
            title="Stay Updated"
            subtitle="Subscribe to our newsletter for the latest news, updates, and exclusive offers."
          />

          {submitted ? (
            <div className="bg-green-500/20 text-green-400 p-4 rounded-lg flex items-center justify-center gap-2 mb-8">
              <Check className="h-5 w-5" />
              <span>
                Thanks for subscribing! Check your email soon for updates.
              </span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
                <Button variant="primary" onClick={handleSubmit}>
                  Subscribe
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
