"use client";
import { newInInfo, newInInfoSmall } from "../resources/data";
import { ProductCard } from "./ProductCard";
import { useRouter } from "next/navigation";
export const DisplaySection = (props) => {
  const router = useRouter();

  const goToCart = () => {
    router.push("/cart");
  };
  return (
    <div className="w-full p-8 flex flex-col gap-4   mt-4">
      <div className="w-full flex items-center justify-between">
        <span className="text-xl lg:text-2xl font-semibold">
          {props.sectionTitle}
        </span>
        <button className="lg:bg-gray-200 lg:p-2 rounded-full">
          View more &gt;
        </button>
      </div>
      <div className="w-full items-center justify-center hidden lg:flex gap-4">
        {newInInfo.map((item, index) => {
          return (
            <ProductCard
              key={index}
              image={item.image}
              desc={item.desc}
              price={item.price}
            />
          );
        })}
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center lg:hidden gap-10 mt-4">
        {newInInfoSmall.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full flex flex-col items-center lg:items-start
            "
            >
              <ProductCard
                image={item.image}
                desc={item.desc}
                price={item.price}
              />
              <div className="w-[95%] ">
                <button
                  onClick={goToCart}
                  className="ml-2 mt-2 p-4 bg-[#0F2324] text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
