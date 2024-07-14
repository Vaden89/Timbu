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
    <div className=" max-h-[429px] rounded-2xl flex-none">
      <div>
        <Link href={`/products/${slug}`} className="">
          <Image
            src={`https://api.timbu.cloud/images/${image}`}
            width={200}
            height={200}
            alt={name}
            className="w-[284px] aspect-square rounded-2xl"
          />
        </Link>
        <div className="p-2">
          <h1 className="text-base font-medium">{name}</h1>
          <h2 className="text-xl">₦{price}</h2>
          <button
            onClick={addItem}
            className="text-white p-2 h-12 w-36 mt-1 bg-[#0F2324]"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};
