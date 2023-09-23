import { IProduit } from "@/types";
import Image from "next/image";

interface ProductCardProps {
  product: IProduit;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex justify-center h-[300px] w-full border-[2px] shadow-md border-[#00894e]">
      <div className="flex flex-col flex-1 w">
        <div className="relative h-[75%] overflow-hidden shadow-lg">
          <Image src={product.imageUrl} alt="" fill objectFit="cover" />
        </div>
        <div className="flex justify-center items-center text-3xl mt-4">
          {product.name}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between h-full bg-cucumber p-3 text-white text-xl">
        <div
          className={`self-end text-2xl font-Avenir tracking-[.5rem] drop-shadow-md ${
            product.promotion &&
            "text-[#d90000] font-bold drop-shadow-[0px_4px_5px_#d90000]"
          }`}
        >
          {product.price}€
        </div>
        <div className="flex-1 mt-7">{product.description}</div>
        <div>{product.category.name}</div>
      </div>
    </div>
  );
};
export default ProductCard;
