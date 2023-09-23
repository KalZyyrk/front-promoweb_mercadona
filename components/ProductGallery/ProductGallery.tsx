import { productsMock } from "@/mocks";
import ProductCard from "./ProductCard";

const ProductGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-5 w-[95%]">
      {productsMock.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
export default ProductGallery;
