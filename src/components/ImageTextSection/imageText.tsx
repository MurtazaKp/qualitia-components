import React from "react";

const ImageTextSection = () => {
  const ImageTextData = {
    heading: "Q-boson bring speed and quality together",
    description: [
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae illo similique quam, neque ut iure earum autem beatae. Eos vitae fugit, labore ipsa cumque expedita est excepturi molestias sint!",
    ],
    image: { src: "/images/imageBottomOne.png", alt: "image alt" },
  };

  return (
    <div className="max-w-6xl mx-auto px-3 lg:px-0 py-10 flex flex-col gap-5">
      <h2 className="text-[#032d60] text-2xl sm:text-3xl lg:text-4xl text-center font-bold">
        {ImageTextData.heading}
      </h2>
      {ImageTextData.description && (
        <div className="flex flex-col gap-3 text-center">
          {ImageTextData.description.map((desc, index) => {
            return (
              <p className="sm:w-10/12 mx-auto " key={index}>
                {desc}
              </p>
            );
          })}
        </div>
      )}

      <img alt={ImageTextData.image.alt} src={ImageTextData.image.src} />
    </div>
  );
};

export default ImageTextSection;
