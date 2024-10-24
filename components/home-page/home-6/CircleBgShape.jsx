import Image from "next/image";

const CircleBgShape = () => {
  const images = [
    {
      src: "/images/media/img_07.jpg",
      width: 80,
      height: 80,
      className: "cp-one",
    },
    {
      src: "/images/media/img_08.jpg",
      width: 45,
      height: 45,
      className: "cp-two",
    },
    {
      src: "/images/media/img_09.jpg",
      width: 85,
      height: 85,
      className: "cp-three",
    },
    {
      src: "/images/media/img_10.jpg",
      width: 45,
      height: 45,
      className: "cp-four",
    },
    {
      src: "/images/media/img_11.jpg",
      width: 110,
      height: 110,
      className: "cp-five",
    },
    {
      src: "/images/media/img_12.jpg",
      width: 55,
      height: 55,
      className: "cp-six",
    },
  ];

  return (
    <div className="circle-bg shapes">
      <Image
        src="/images/shape/shape_37.svg"
        alt="media"
        className="lazy-img main-img m-auto"
        width={1500} // Add appropriate width for this image
        height={1500} // Add appropriate height for this image
      />
      {images.map((img, index) => (
        <Image
          key={index}
          src={img.src}
          alt="media"
          className={`lazy-img shapes rounded-circle ${img.className}`}
          width={img.width} // Provide width from the object
          height={img.height} // Provide height from the object
        />
      ))}
    </div>
  );
};

export default CircleBgShape;
