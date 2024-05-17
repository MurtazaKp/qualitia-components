"use client";
import { link } from "fs";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const header = {
    logo: {
      src: "/images/logo.png",
      alt: "logo",
    },
    Navlinks: [
      {
        label: "Q-Boston for Salesforce",
        href: "/q-boston-for-salesforce",
        target: "_blank",
      },
      {
        label: "Qualitia For Web and Mobile",
        href: "/qualitia-for-web-and-mobile",
        target: "_blank",
      },
      {
        label: "Qualitia for Api",
        href: "/qualitia-for-web-and-mobile",
        target: "_blank",
      },
    ],
    cta: {
      label: "Schedule a Demo",
      href: "/schedule-a-demo",
      target: "_blank",
    },
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const MobileMenu = () => (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } lg:hidden transition-all duration-300 ease-in-out `}
    >
      <div className="fixed inset-x-0 top-20 z-20 bg-white p-6 shadow-lg">
        <ul className="flex flex-col gap-5">
          {header.Navlinks.map((link: any, index: number) => {
            return (
              <li key={index}>
                <Link href={link.href} target={link.target}>
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              className="px-5 rounded-full text-white py-3 bg-[#032d60]"
              href={header.cta.href}
              target={header.cta.target}
            >
              {header.cta.label}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto py-10 px-4 lg:px-0">
      <div className="flex gap-10 items-center justify-between">
        <div>
          <img src={header.logo.src} alt={header.logo.alt} />
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="hidden lg:block">
          <ul className="flex gap-5">
            {header.Navlinks.map((link: any, index: number) => {
              return (
                <li key={index}>
                  <Link href={link.href} target={link.target}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden lg:block ms-auto">
          <Link
            className="px-5 rounded-full text-white py-3 bg-[#032d60]"
            href={header.cta.href}
            target={header.cta.target}
          >
            {header.cta.label}
          </Link>
        </div>
      </div>
      <MobileMenu />
    </div>
  );
};

export default Header;
