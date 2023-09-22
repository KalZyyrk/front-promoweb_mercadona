import Image from "next/image";
import homeBanner from "@/assets/images/home_banner.jpg";

const Hero = () => {
  return (
    <div className="relative hidden sm:block">
      <Image
        src={homeBanner}
        alt="home banner"
        className="inset-shadow object-cover"
      />
      <h1 className="absolute left-[65%] top-[50%] text-xl pr-5 translate-y-[-50%] xl:text-6xl font-bold text-right xl:pr-10">
        Tout vos PROMOTION de votre Mercadona
      </h1>
    </div>
  );
};
export default Hero;
