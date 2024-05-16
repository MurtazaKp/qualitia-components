import Link from "next/link";

const QualitiaCustomers = () => {
  const customersData = {
    Heading: "Qualitia Customers",
    customerIcons: [
      { src: "/customersImage/PWC.png", alt: "PWC" },
      { src: "/customersImage/Deloitte.png", alt: "Deloitte" },
      { src: "/customersImage/CIBC.png", alt: "CIBC" },
      { src: "/customersImage/newrez.png", alt: "newrez" },
      { src: "/customersImage/BSE.png", alt: "BSE" },
      { src: "/customersImage/CDSL.png", alt: "CDSL" },
      { src: "/customersImage/pitney bowes.png", alt: "pitney bowes" },
      { src: "/customersImage/MetLife.jpeg", alt: "MetLife" },
      { src: "/customersImage/HDFC.png", alt: "HDFC" },
      { src: "/customersImage/GE healthcare.png", alt: "GE healthcare" },
      { src: "/customersImage/Prudential.png", alt: "Prudential" },
      { src: "/customersImage/Philips.png", alt: "Philips" },
      { src: "/customersImage/Springer.png", alt: "Springer" },
      { src: "/customersImage/PTC.png", alt: "PTC" },
      { src: "/customersImage/Capita.png", alt: "Capita" },
      { src: "/customersImage/Nuance.png", alt: "Nuance" },
      { src: "/customersImage/Whirpool.png", alt: "Whirpool" },
      { src: "/customersImage/EbixCash.png", alt: "EbixCash" },
    ],
    buttonTextCta: {
      label: "See More",
      href: "/see-more",
    },
  };

  return (
    <div className="max-w-6xl mx-auto pt-28">
      <div className="flex items-center justify-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-sky-900">
          {customersData.Heading}
        </h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 mx-3 lg:mx-0 pt-5 pb-2 ">
        {customersData.customerIcons.map((customer, index) => {
          return (
            <div
              className="rounded-md p-1 flex justify-center items-center w-full sm:w-full mx-auto"
              key={index}
              style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }}
            >
              <img
                key={index}
                className="h-20 w-24 object-contain"
                src={customer.src}
                alt={customer.alt}
              />
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center text-xl pt-16 pb-4">
        <Link
          href={customersData.buttonTextCta.href}
          className="border border-[#032d60] rounded-full h-12 w-36 text-lg flex justify-center items-center text-[#032d60] font-bold"
        >
          {customersData.buttonTextCta.label}
        </Link>
      </div>
    </div>
  );
};

export default QualitiaCustomers;
