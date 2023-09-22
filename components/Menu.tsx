"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import Button from "./Button";
import { useCallback, useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const handleBtnClick = () => {
    router.push("/login");
  };

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <nav className="relative">
      {isOpen ? (
        <HiMenu className="md:hidden text-3xl" onClick={toggleOpen} />
      ) : (
        <AiOutlineClose className="md:hidden text-3xl" onClick={toggleOpen} />
      )}
      <div
        className={`absolute right-0 p-10 bg-cucumber md:bg-transparent rounded-md md:static md:flex flex-col md:flex-row justify-between items-center gap-10 xl:gap-20 md:text-2xl ${
          isOpen ? "hidden" : "flex"
        }`}
      >
        <Link
          href="/catalogue"
          className="text-white text-xl md:text-2xl md:text-[#00ab61] transition hover:border-b-2 border-[#00ab61]"
        >
          Catalogue
        </Link>
        <Button onClick={handleBtnClick}>Connexion</Button>
      </div>
    </nav>
  );
};
export default Menu;
