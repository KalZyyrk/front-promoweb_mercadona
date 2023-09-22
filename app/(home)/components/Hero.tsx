import Image from "next/image";
import homeBanner from "@/assets/images/home_banner.jpg";

const Hero = () => {
  return (
    <div>
      <Image src={homeBanner} alt="home banner" className="inset-shadow" />
    </div>
  );
};
export default Hero;
