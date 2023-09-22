interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#00894e] md:bg-cucumber p-3 rounded-md text-white font-bold tracking-wider font-Avenir shadow-md transition hover:scale-105"
    >
      {children}
    </button>
  );
};
export default Button;
