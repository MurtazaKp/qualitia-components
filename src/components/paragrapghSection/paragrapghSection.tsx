import React from "react";

const ParagrapghSection = () => {
  const ParagraphData = {
    heading:
      " Facililate a dynamic Salesforce development process that promotes innovation and efficiency",
    description:
      "your sales force test automation will always be ready on release arrival",
  };
  return (
    <div>
      <div className="text-center flex flex-col gap-6 shadow-lg container lg:mx-auto p-10 lg:p-16 border mx-3">
        <h2 className="text-[#032d60] text-2xl sm:text-3xl lg:text-4xl text-center font-bold lg:w-8/12 mx-auto">
          {ParagraphData.heading}
        </h2>
        <p className="text-[#032d60] text-xl  lg:text-2xl lg:w-8/12 mx-auto text-center ">
          {ParagraphData.description}
        </p>
      </div>
    </div>
  );
};

export default ParagrapghSection;
