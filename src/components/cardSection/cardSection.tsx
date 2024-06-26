import React from "react";

const CardsComponent = () => {
  const CardData = {
    heading:
      "Identify defects early, continuously improve quality and roll out Salesforce releases faster",
    borderColor: "#76ccff",
    columns: 3,
    cards: [
      {
        icons: { src: "/images/car.png", alt: "card1" },
        description:
          "The Al-powered test automation generation, just on a single click",
      },
      {
        icons: { src: "/images/circleArrow.PNG", alt: "card2" },
        description:
          "The Al-powered test automation generation, just on a single click",
      },
      {
        icons: { src: "/images/paper.PNG", alt: "card3" },
        description:
          "The Al-powered test automation generation, just on a single click",
      },
    ],
  };

  return (
    <div className="container mx-auto ">
      <div className="  py-24  mx-auto flex items-center justify-center ">
        <h1 className="title-font text-lg md:text-2xl lg:text-4xl mb-4 w-4/5 inline-block gap- font-bold text-[#032d60]">
          {CardData.heading}
        </h1>
      </div>
      <div
        className={`grid mx-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-${
          CardData.columns && CardData.columns
        }  ${CardData.columns === 3 ? "gap-20" : "gap-10"} `}
      >
        {CardData.cards.map((card, index) => {
          return (
            <div
              key={index}
              className={`gap-4 py-6  rounded-2xl flex flex-col items-center justify-center pb-5  border-[${CardData.borderColor}]
              }] border-t-[15px]`}
              style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
            >
              <img
                className="w-20 h-20 "
                src={card.icons.src}
                alt={card.icons.alt}
              />
              <h1 className="w-3/5 text-[#204572] text-lg pt-3 pb-10 font-medium text-center justify-center">
                {card.description}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardsComponent;
