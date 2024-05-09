import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerData = {
    logo: {
      src: "/images/footer-logo.png",
      alt: "footer logo",
    },
    socials: [
      {
        label: "facebook",
        src: "/images/facebook.PNG",
        href: "www.facebook.com",
      },
      {
        label: "twitter",
        src: "/images/twitter.PNG",
        href: "www.twitter.com",
      },
      {
        label: "Linkdin",
        src: "/images/linkedin.PNG",
        href: "www.linkedin.com",
      },
      {
        label: "youtube",
        src: "/images/youtube.PNG",
        href: "www.youtube.com",
      },
    ],
    links: [
      {
        label: "Terms of service ",
        href: "/terms-of-service",
      },
      {
        label: "Privacy Policy ",
        href: "/privacy-policy",
      },
      {
        label: "Contact us",
        href: "/contact-us",
      },
    ],

    copyright: "copyright 2024 Qualitia Software Private Limited",
  };
  return (
    <>
      <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between max-w-5xl px-5 xl:px-0 mx-auto py-16">
        <div className="flex justify-center lg:justify-start flex-col gap-9">
          <img
            className="w-8/12 sm:w-4/12 lg:w-11/12 mx-auto"
            src="/images/footer-logo.png"
            alt=""
          />
          <div className="flex justify-center lg:justify-start gap-8">
            {footerData.socials.map((link, index) => {
              return (
                <Link href={link.href} key={index}>
                  {" "}
                  <img className="w-7 h-7" src={link.src} alt={link.label} />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex   flex-col lg:flex-row items-center lg:items-start gap-5 lg:gap-0 ">
          {footerData.links.map((link, index) => {
            return (
              <Link
                className={`px-4 text-center  ${
                  index !== 2 ? " lg:border-e-[3px] border-[#139dec]" : ""
                }`}
                key={index}
                href={link.href}
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="py-5 text-center bg-[#dbf2ff]">
        <p className="text-xs">{footerData.copyright}</p>
      </div>
    </>
  );
};

export default Footer;
