import React from "react";
import {motion} from "framer-motion"


export default function RewardProgressBar() {
  const experiencePoints = 2000;

  const levels = [
    { name: "L1", cash: 0, reward: "Contribute" },
    { name: "L2", cash: 1000, reward: "Certificate of Appreciation" },
    { name: "L3", cash: 3000, reward: "LinkedIn Recommendation" },
    { name: "L4", cash: 6000, reward: "Will send a Goodie" },
    { name: "L5", cash: 12000, reward: "Social Media Feature" },
    { name: "L6", cash: 25000, reward: "Reward 6" },
  ];
const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

  return (
    <motion.section className="w-full px-6 py-10 font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
    >
    <div className="w-full px-6 py-10 font-sans">
      <div className="w-full max-w-5xl mx-auto">

        <div className="text-center sm:mb-10 lg:mb-20">
          <h2 className="text-3xl font-bold text-gray-800">Rewards Unlocked</h2>
          <p className="text-sm text-gray-500 mt-2  ">
            Track your Donations and unlock exciting Rewards.
          </p>
        </div>

      
        <div className="relative w-full ">

       
          <div className="absolute -top-10 w-full flex justify-between">
            {levels.map((level, idx) => (
              <div key={idx} className="text-center w-1/6">
                <p className={`text-xs hidden md:block  ${experiencePoints >= level.cash ? "text-black font-semibold" : "text-black font-semibold"}`}>
                  {level.reward}
                </p>
              </div>
            ))}
          </div>

         
          <div className="w-full h-3 bg-gray-100 rounded-full shadow-inner"></div>

          <div
            className="absolute top-0 h-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 transition-all duration-700 ease-in-out"
            style={{
              width: `${(experiencePoints / levels[levels.length - 1].cash) * 350}%`,
            }}
          ></div>

          <div className="flex justify-between mt-4">
            {levels.map((level, idx) => (
              <div key={idx} className="flex flex-col items-center text-center w-1/6">
                <div className={`w-8 h-8 ${experiencePoints >= level.cash ? 'bg-gray-800 text-white' : 'bg-gray-300 text-black'} rounded-full flex items-center justify-center text-sm font-bold`}>
                  {idx + 1}
                </div>
                <p className="mt-2 text-xs text-gray-800 font-semibold">₹{level.cash}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
    </motion.section>
  );
}
