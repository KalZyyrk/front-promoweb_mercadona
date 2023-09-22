"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import logoImg from "@/assets/logo.png";
import logoImgWthText from "@/assets/logoWthText.png";

const Logo = () => {
  const [screenSize, setScreenSize] = useState<number>(0);

  useEffect(() => {
    setScreenSize(window.innerWidth);

    const updateDimension = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", updateDimension);

    return () => window.removeEventListener("resize", updateDimension);
  }, [screenSize]);

  return (
    <Link href="/">
      {screenSize < 769 ? (
        <Image src={logoImg} alt="Mercadona Logo" width={85} />
      ) : (
        <Image src={logoImgWthText} alt="Mercadona Logo" width={300} />
      )}
    </Link>
  );
};
export default Logo;
