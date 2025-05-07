import { Disc as Discord, Twitch, Twitter, Youtube } from "lucide-react";
import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";

const CommunitySection = () => {
  const socialPlatforms = [
    {
      name: "Discord",
      icon: <Discord className="h-8 w-8" />,
      color: "bg-[#5865F2]",
      members: "25K+",
      url: "#",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-8 w-8" />,
      color: "bg-[#1DA1F2]",
      members: "40K+",
      url: "#",
    },
    {
      name: "Twitch",
      icon: <Twitch className="h-8 w-8" />,
      color: "bg-[#9146FF]",
      members: "15K+",
      url: "#",
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-8 w-8" />,
      color: "bg-[#FF0000]",
      members: "50K+",
      url: "#",
    },
  ];

  return (
    <section id="community" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Start Your Journey"
          subtitle="Join the Arcane Wagers community and earn rewards now!"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <Card className="h-full flex flex-col">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 -mx-6 -mt-6 px-6 py-8 rounded-t-xl mb-6">
                <h3 className="text-2xl font-bold mb-2">Discord Community</h3>
                <p className="text-gray-200">
                  Join our thriving Discord community with over 25,000 members.
                </p>
              </div>
              <div className="flex-grow">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-500/20 p-2 rounded-lg">
                      <Discord className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium">Live Support</div>
                      <div className="text-sm text-gray-400">
                        Get help directly from our team
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-500/20 p-2 rounded-lg">
                      <Discord className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium">Exclusive Giveaways</div>
                      <div className="text-sm text-gray-400">
                        Win NFTs and tokens regularly
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-500/20 p-2 rounded-lg">
                      <Discord className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="font-medium">Find Teammates</div>
                      <div className="text-sm text-gray-400">
                        Connect with other players
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button href="#" variant="primary" fullWidth={true}>
                Join Our Discord
              </Button>
            </Card>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {socialPlatforms.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  className="flex items-center gap-4 bg-gray-800 hover:bg-gray-700 p-4 rounded-lg transition-colors duration-200"
                >
                  <div
                    className={`${platform.color} h-12 w-12 rounded-lg flex items-center justify-center text-white`}
                  >
                    {platform.icon}
                  </div>
                  <div>
                    <div className="font-medium">{platform.name}</div>
                    <div className="text-sm text-gray-400">
                      {platform.members} Followers
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CommunitySection;
