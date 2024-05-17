import React from "react";

const ImageParagraphSection = () => {
  const ImageParagraphData = {
    heading: "Q-boson build trust in every salesforce realase",
    description: [
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae illo similique quam, neque ut iure earum autem beatae. Eos vitae fugit, labore ipsa cumque expedita est excepturi molestias sint!",
      "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae illo similique quam, neque ut iure earum autem beatae. Eos vitae fugit, labore ipsa cumque expedita est excepturi molestias sint!",
    ],
    images: [
      { src: "/images/indianPatent.svg", alt: "image alt" },
      { src: "/images/USPatent.svg", alt: "image alt" },
    ],
  };

  return (
    <div className="container lg:mx-auto py-10 lg:py-20 flex flex-col gap-10 mx-3">
      <h2 className="text-[#032d60] text-2xl  sm:text-3xl lg:text-4xl text-center font-bold">
        {ImageParagraphData.heading}
      </h2>
      {ImageParagraphData.description && (
        <div className="flex flex-col gap-5 text-center">
          {ImageParagraphData.description.map((desc, index) => {
            return (
              <p className="sm:w-10/12 mx-auto " key={index}>
                {desc}
              </p>
            );
          })}
        </div>
      )}
      <div className="flex justify-center gap-10 items-center ">
        {ImageParagraphData.images.map((image, index) => {
          return (
            <div className="" key={index}>
              <img
                className=" w-24 sm:w-24 lg:w-32  h-auto"
                alt={image.alt}
                src={image.src}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageParagraphSection;
