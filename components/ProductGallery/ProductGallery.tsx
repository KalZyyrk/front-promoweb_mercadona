import { productsMock } from "@/mocks";
import ProductCard from "./ProductCard";

const ProductGallery = () => {
  return (
    <div>
      {productsMock.map((product) => (
        <ProductCard key={product.id} />
      ))}
    </div>
  );
};
export default ProductGallery;
