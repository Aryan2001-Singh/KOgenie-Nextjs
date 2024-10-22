import Image from "next/image";

const logos = [
  {
    src: "/images/logo/Plogo-1.png",
    width: 193,  // Use numbers, not strings
    height: 193,
    className: "",
  },
  {
    src: "/images/logo/Plogo-2.png",
    width: 65,
    height: 65,
    className: "shapes logo-one",
  },
  {
    src: "/images/logo/Plogo-3.png",
    width: 105,
    height: 105,
    className: "shapes logo-two",
  },
  {
    src: "/images/logo/Plogo-4.png",
    width: 80,
    height: 80,
    className: "shapes logo-three",
  },
  {
    src: "/images/logo/Plogo-5.png",
    width: 148,
    height: 148,
    className: "shapes logo-four",
  },
  {
    src: "/images/logo/Plogo-6.png",
    width: 105,
    height: 105,
    className: "shapes logo-five",
  },
];

const ScreenHolder = () => {
  return (
    <div className="screen-holder-one d-flex align-items-center justify-content-center">
      {logos.map((logo, index) => (
        <div
          key={index}
          className={`round-bg d-flex align-items-center justify-content-center ${logo.className}`}
          style={{ width: logo.width, height: logo.height }}
        >
          <Image
            src={logo.src}
            alt={`logo ${index}`}
            width={logo.width}  // Set width here
            height={logo.height}  // Set height here
            className="lazy-img"
          />
        </div>
      ))}
      <Image
        src="/images/shape/shape_32.svg"
        alt="shape"
        className="lazy-img shapes shape-one"
        width={500}  // Add appropriate width
        height={500}  // Add appropriate height
      />
    </div>
  );
};

export default ScreenHolder;