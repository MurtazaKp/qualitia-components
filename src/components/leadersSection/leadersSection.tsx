import React from "react";

const LeadersSection = () => {
  const CardData = {
    heading: "Trusted by Industry Leaders",

    cards: [
      {
        name: "Kersi Tavadia",
        position: "",
        role: "CIO at Bombay Stock Exchange Limited",
        socialMedia: { src: "/images/linkedin.png", alt: "linkedin-img" },
        fill: "#76ccff",
        Image: { src: "/images/leaders-img.png", alt: "aleaders-img" },
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet augue purus. Cras gravida malesuada tellus, nec mattis dui ultricies in",
      },
      {
        name: "Peter Becker",
        role: "Project Manager, e-Business Applications at Pitney Bowes",
        socialMedia: { src: "/images/linkedin.png", alt: "linkedin-img" },
        fill: "#61e6d9",
        Image: { src: "/images/leaders-img.png", alt: "leaders-img" },
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet augue purus. Cras gravida malesuada tellus, nec mattis dui ultricies in",
      },
      {
        name: "Vipin Parayantil",
        role: "Catalog Transformation Lead at philips",
        socialMedia: { src: "/images/linkedin.png", alt: "linkedin-img" },
        fill: "#99adfc",
        Image: { src: "/images/leaders-img.png", alt: "leaders-img" },
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet augue purus. Cras gravida malesuada tellus, nec mattis dui ultricies in",
      },
    ],
  };
  return (
    <div className="max-w-6xl mx-auto py-5 sm:py-10 px-4 lg:px-4">
      <div>
        <h2 className="text-[#032d60] text-center font-bold text-3xl w-8/12 mx-auto mb-14">
          {CardData.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-20 sm:gap-6 lg:gap-[60px] mt-20">
          {CardData.cards.map((card, index) => {
            return (
              <div key={index}>
                <div className=" shadow-2xl relative rounded-2xl  flex justify-center items-center h-full pt-5 ">
                  <svg
                    className="w-full absolute top-0 scale-x-[-1]"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 792 206"
                  >
                    <defs>
                      <clipPath id="clip-path">
                        <rect
                          id="Rectangle_1"
                          data-name="Rectangle 1"
                          width="786"
                          height="196.277"
                          fill={card.fill}
                        />
                      </clipPath>
                      <clipPath id="clip-Purple">
                        <rect width="792" height="206" />
                      </clipPath>
                    </defs>
                    <g id="Purple" clip-path="url(#clip-Purple)">
                      <g
                        id="Group_1"
                        data-name="Group 1"
                        transform="translate(3 4)"
                        clip-path="url(#clip-path)"
                      >
                        <path
                          id="Path_1"
                          data-name="Path 1"
                          d="M337.5,54.5A776.409,776.409,0,0,1,786,196.277V29.5A29.5,29.5,0,0,0,756.5,0H29.5A29.5,29.5,0,0,0,0,29.5V95.6A779.057,779.057,0,0,1,250.5,54.5Z"
                          fill={card.fill}
                        />
                      </g>
                    </g>
                  </svg>
                  <div className="p-8 pt-0 flex flex-col items-start justify-between ">
                    <div className="flex justify-center mt-[-60px] mx-auto relative">
                      <img
                        className="pt-7 w-[100px] h-[100px] rounded-full  bg-slate-100"
                        src={card.Image.src}
                        alt={card.Image.alt}
                      />
                      <img
                        className=" w-6 h-6 rounded-full mb-0 mt-auto absolute top-auto bottom-0 right-0"
                        src={card.socialMedia.src}
                        alt={card.socialMedia.alt}
                      />
                    </div>
                    <div className="flex flex-col justify-between mt-[30px]">
                      <center>
                        <h2 className=" text-lg font-semibold">{card.name}</h2>
                        <span className="text-sm text-gray-400">
                          {card.position}
                        </span>
                        <p className="text-sm text-gray-400">{card.role}</p>
                      </center>
                      <p className="text-[16px] pt-6 text-[#032d60] min-h-40 ">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="flex gap-11">
            <div className="bg-white border-2 border-cyan-900 p-4 flrx flex-col justify-between">
              <div className="bg-blue-100" style={{ height: "40px" }}>
                blue
              </div>
              <div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  similique sequi nesciunt maxime ad ab eveniet expedita recusandae
                  voluptatibus mollitia, pariatur reiciendis error hic debitis
                  asperiores? Velit odio delectus nesciunt.
                </div>
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Possimus, itaque repellat, iure aperiam, similique blanditiis
                  quidem nesciunt maiores odit velit dignissimos officiis
                  doloremque! Mollitia, quia error. Labore vel itaque voluptatum!
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-cyan-900 p-4 flrx flex-col justify-between">
              <div className="bg-blue-100" style={{ height: "40px" }}>
                blue
              </div>
              <div>
                <div>Lorem ipsum dolor sit amet.</div>
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Possimus, itaque repellat, iure aperiam, similique blanditiis
                  quidem nesciunt maiores odit velit dignissimos officiis
                  doloremque! Mollitia, quia error. Labore vel itaque voluptatum!
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-cyan-900 p-4 flrx flex-col justify-between">
              <div className="bg-blue-100" style={{ height: "40px" }}>
                blue
              </div>
              <div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  similique sequi nesciunt maxime ad ab
                </div>
                <div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Possimus, itaque repellat, iure aperiam, similique blanditiis
                  quidem nesciunt maiores odit velit dignissimos officiis
                  doloremque! Mollitia, quia error. Labore vel itaque voluptatum!
                </div>
              </div>
            </div>
          </div> */}
    </div>
  );
};

export default LeadersSection;
