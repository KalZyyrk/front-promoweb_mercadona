import Logo from "./Logo";
import Menu from "./Menu";

const Header: React.FC = () => {
  return (
    <header className="flex w-full justify-between items-center px-20 shadow-lg py-4 md:py-0 border-b-[1px] border-neutral-300">
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
