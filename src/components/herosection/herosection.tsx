import React from "react";

const HeroSection = () => {
  const heroSectionData = {
    heading: "Q-Boston is an AI Native",
    subheading: "Salesforce test automation platform",

    features: [
      "Implement salesfoce faster",
      "Innovate at scale",
      "Put human experience at center",
    ],
  };
  return (
    <div className="container mx-auto flex justify-center items-center py-10 lg:py-0 lg:h-[calc(100dvh-111px)] herosection">
      <div className="text-center text-[#032d60]">
        <h1 className="text-2xl sm:text-4xl  font-bold ">
          {heroSectionData.heading}
        </h1>
        <p className="text-xl sm:text-[22px] mt-2 mb-7">
          {heroSectionData.subheading}
        </p>
        <ul className="flex flex-col sm:flex-row ">
          {heroSectionData.features.map((feature, index) => {
            return (
              <>
                <li
                  className={`px-14 text-lg ${
                    index !== 2 ? " sm:border-e-[3px] border-[#139dec]" : ""
                  }`}
                  key={index}
                >
                  {feature}
                </li>
                <li
                  className={` sm:hidden ${index !== 2 ? "block" : "hidden"}`}
                >
                  ----
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeroSection;
