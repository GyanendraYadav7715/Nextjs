import React from "react";
import Image from "next/image";
import Jujutsu from "@/public/Gojo.jpg";
const ImagesFact = () => {
  return (
    <>
      <Image
        src="https://bit.ly/react-cover"
        alt="gojo"
        fill
        style={{ objectFit: "cover" }}
        sizes="(max-width:480px)100vw,(mx-width:768px)50vw,33vw"
        quality={100}
      />
    </>
  );
};

export default ImagesFact;
