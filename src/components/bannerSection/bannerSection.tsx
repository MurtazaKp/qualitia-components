import React from "react";

const BannerSection = () => {
  const bannerData = {
    icon: { src: "/images/cardOne.png", alt: "hero" },
    heading:
      "Level up your Salesforce release game. Automate testing for every sprint.",
    subHeading: "Eliminate a ctach-up struggle that slows you down.",
  };
  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="mb-10 lg:w-32 lg:h-[149px]  object-cover object-center rounded"
            src={bannerData.icon.src}
          />
          <div className="text-center  w-full">
            <h1 className="title-font md:text-2xl lg:text-4xl mb-4 w-4/5 inline-block font-bold text-[#032d60]">
              {bannerData.heading}
            </h1>
            <p className="mb-8 sm:text-sm lg:text-2xl font-sm  leading-relaxed text-[#032d60]">
              {bannerData.subHeading}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BannerSection;
