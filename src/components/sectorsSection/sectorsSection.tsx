import React from "react";

// Declaring the sectorsData object
const sectorsData = {
  heading:
    "Q-Boson supports Salesforce industry clouds and Salesforce Platforms",
  sectors: [
    {
      name: "Financial services",
      image: { src: "/salesforceImage/finance.svg", alt: "finance-logo" },
    },
    {
      name: "Consumer goods",
      image: {
        src: "/salesforceImage/consumer-goods.svg",
        alt: "Consumer-goods-logo",
      },
    },
    {
      name: "Government",
      image: { src: "/salesforceImage/government.svg", alt: "Government-logo" },
    },
    {
      name: "Retail",
      image: { src: "/salesforceImage/retail.svg", alt: "Retail-logo" },
    },
    {
      name: "Energy and utilities",
      image: {
        src: "/salesforceImage/energy-utilities.svg",
        alt: "energy-utilities-logo",
      },
    },
    {
      name: "Communication",
      image: {
        src: "/salesforceImage/communication.svg",
        alt: "Communication-logo",
      },
    },
    {
      name: "Automotive",
      image: { src: "/salesforceImage/automotive.svg", alt: "automotive-logo" },
    },
    {
      name: "Manufacturing",
      image: {
        src: "/salesforceImage/manufacturing.svg",
        alt: "manufacturing-logo",
      },
    },
    {
      name: "Media",
      image: { src: "/salesforceImage/media.svg", alt: "media-logo" },
    },
    {
      name: "Non-profit",
      image: { src: "/salesforceImage/non-profit.svg", alt: "non-profit-logo" },
    },
    {
      name: "Life sciences",
      image: {
        src: "/salesforceImage/life-sciences.svg",
        alt: "life-sciences-logo",
      },
    },
    {
      name: "Education",
      image: { src: "/salesforceImage/education.svg", alt: "education-logo" },
    },
  ],
  catagories: [
    {
      name: "Classic",
      image: { src: "/salesforceImage/classic.svg", alt: "classic-logo" },
    },
    {
      name: "Lightning",
      image: { src: "/salesforceImage/lightning.svg", alt: "lightning-logo" },
    },
    {
      name: "LWC",
      image: { src: "/salesforceImage/LWC.svg", alt: "LWC-logo" },
    },
  ],
};

const SectorsSection = () => {
  return (
    <div className="container mx-auto pt-28">
      <h2 className="text-[#032d60] text-3xl text-center font-bold mx-auto md:w-7/12">
        {sectorsData.heading}
      </h2>
      <div className="lg:flex justify-center my-10 lg:my-20">
        <div className="lg:w-9/12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-20">
            {sectorsData.sectors.map((sector, index) => (
              <div
                key={index}
                className="lg:w-36 flex items-center justify-center flex-col"
              >
                <img
                  className="h-12 w-12 lg:h-16 lg:w-16 object-contain"
                  src={sector.image.src}
                  alt={sector.image.alt}
                />
                <h5 className="text-center mt-4">{sector.name}</h5>
              </div>
            ))}
          </div>
        </div>
        <div className=" mt-10 lg:mt-0 lg:w-3/12">
          <div className="flex items-center flex-wrap justify-center gap-10 lg:gap-x-20 lg:gap-y-16">
            <div className="w-36 flex items-center justify-center flex-col border-2 border-solid rounded-lg border-[#032d60]">
              <img
                className="h-16 w-16 lg:h-20 lg:w-20 object-contain "
                src="/salesforceImage/classic.svg"
                alt="classic-logo"
              />
              <h5 className="text-center mb-4">Classic</h5>
            </div>
            <div className="w-36 flex items-center justify-center flex-col border-2 border-solid rounded-lg border-[#032d60]">
              <img
                className="h-16 w-16 lg:h-20 lg:w-20 object-contain p-3 lg:p-4"
                src="/salesforceImage/lightning.svg"
                alt="lightning-logo"
              />
              <h5 className="text-center mb-4">Lightning</h5>
            </div>
            <div className="w-36 flex items-center justify-center flex-col border-2 border-solid rounded-lg border-[#032d60]">
              <img
                className="h-16 w-16 lg:h-20 lg:w-20 object-contain p-3 lg:p-4"
                src="/salesforceImage/LWC.svg"
                alt="LWC-logo"
              />
              <h5 className="text-center mb-4">LWC</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorsSection;
