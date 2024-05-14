import Link from "next/link";
import React from "react";

const CtaSection = () => {
  const CtaData = {
    buttonHeading: "want to see Q-Boson in action?",
    buttonText: { label: "Say when?", href: "/contact" },
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <div className=" w-full py-20 my-10 bg-[#032d60] text-white  flex flex-col justify-center gap-6  items-center text-xl ">
          <p>{CtaData.buttonHeading} </p>
          <Link
            href={CtaData.buttonText.href}
            className="bg-[#643ec8] border flex justify-center items-center border-white rounded-full h-10 w-32 text-base"
          >
            {CtaData.buttonText.label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
