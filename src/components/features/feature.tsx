import React from "react";

const Feature = () => {
  const featureData = {
    heading: "How Q-Boson help you deliver faster salesforce release",
    features: [
      {
        subtitle: "Arrest",
        title: "80%",
        description: "defects through automation",
      },
      {
        subtitle: "",
        title: "32%",
        description: "Faster salesforce release cycle",
      },
      {
        subtitle: "",
        title: "Weeks to hours",
        description: "Reduce testing time from",
      },
    ],
  };
  return (
    <div className="bg-[#032d60] py-5 sm:py-10 lg:py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white text-center text-3xl sm:w-7/12 font-semibold mx-auto py-6">
          {featureData.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {featureData.features.map((feature, index) => {
            return (
              <div
                className={` text-center flex flex-col gap-3 ${
                  index !== 2 ? "" : " sm:col-span-2"
                }`}
                key={index}
              >
                <p className="text-white text-lg">{feature.subtitle}</p>
                <h3
                  className={`text-[#2ba7ee] text-3xl sm:tex-4xl lg:text-6xl sm:w-3/12 mx-auto font-bold ${
                    index == 2 ? "order-2" : "order-1"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-white text-lg ${
                    index == 2 ? "order-1" : "order-2"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
