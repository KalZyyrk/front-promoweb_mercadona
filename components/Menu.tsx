import Link from "next/link";
import Button from "./Button";

const Menu = () => {
  return (
    <nav className="flex gap-20 text-2xl items-center">
      <Link
        href="/catalogue"
        className="text-cucumber transition hover:border-b-2 border-[#00ab61]"
      >
        Catalogue
      </Link>
      <Button></Button>
    </nav>
  );
};
export default Menu;
