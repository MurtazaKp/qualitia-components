import React from "react";

const ImageText = () => {
  const textAndImageData = {
    description: "End-to-end integrated testing for a variety of applications",
    image: {
      src: "/TextAndImageCompImg/CICDImg.png",
      alt: "horizontalImg",
    },
    layout: "vertical",
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div
        className={`${
          textAndImageData.layout === "vertical"
            ? "lg:flex-col gap-10"
            : "lg:flex-row"
        } container flex sm:flex-col  px-5 my-10 items-center justify-center `}
      >
        <div
          className={`lg:w-6/12 ${
            textAndImageData.layout === "vertical"
              ? "lg:w-8/12 mx-auto"
              : "lg:w-6/12"
          }`}
        >
          <h1 className="title-font md:text-xl lg:text-4xl mb-2 inline-block font-bold text-[#032d60] ">
            {textAndImageData.description}
          </h1>
        </div>
        <div
          className={`  ${
            textAndImageData.layout === "vertical" ? "lg:w-full" : "lg:w-6/12"
          } `}
        >
          <img
            className={`  ${
              textAndImageData.layout === "vertical"
                ? "lg:w-11/12 object-contain mx-auto h-[500px] p-10"
                : "lg:w-full"
            } `}
            src={textAndImageData.image.src}
            alt={textAndImageData.image.alt}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageText;
