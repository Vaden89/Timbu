import Image from "next/image";
import Link from "next/link";
import CartContext from "../providers/context";
import { useContext } from "react";

export const ItemCard = ({ name, price, image, slug, product_id }) => {
  const { addToCart } = useContext(CartContext);

  const addItem = () => {
    addToCart(product_id);
  };
  return (
    <div className="w-full lg:w-1/4  rounded-2xl ">
      <div className="w-full h-full flex flex-col gap-4">
        <Link href={`/products/${slug}`} className="relative w-full h-full">
          <div
            className="w-full aspect-square bg-no-repeat bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url('${`https://api.timbu.cloud/images/${image}`}')`,
            }}
          >
            <div class="hidden w-full h-full hover:bg-[#00000050] lg:flex items-center justify-center group">
              <button
                onClick={addItem}
                class="p-2 bg-[#377E7F] text-white opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </Link>
        <div className=" flex flex-col gap-2">
          <h1 className="text-base font-medium">{name}</h1>
          <h2 className="text-xl">₦{price}</h2>
          <button
            onClick={addItem}
            className="text-white p-2 h-12 w-36 mt-1 bg-[#0F2324] lg:hidden"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
