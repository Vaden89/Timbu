"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import CartContext from "../providers/context";
import { useContext } from "react";
import { getSingleProduct } from "../api/product/route";
import Image from "next/image";

export const MainCartSection = () => {
  const { items } = useContext(CartContext);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setloading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    sth();
  }, []);

  const goToCheckOut = () => {
    router.push("/checkout");
  };
  async function sth() {
    setloading(true);
    try {
      const results = await Promise.all(
        items.map(async (item) => {
          const res = await getSingleProduct(item);
          setData((prev) => [...prev, res]);
        })
      );
    } catch (error) {
      throw new Error(
        "There was an error while fecthing product information",
        error
      );
    } finally {
      setloading(false);
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      onClick={() => {
        console.log(data);
      }}
      className="w-full flex flex-col lg:flex-row p-4 lg:px-8 gap-12 capitalize  lg:mb-28"
    >
      <div className="lg:w-2/3 w-full ">
        <span className="text-2xl">Cart</span>
        <hr className="my-4" />
        <div className="flex flex-col gap-4">
          <div className="flex w-full items-center justify-between">
            <span className="w-1/2">PRODUCT</span>
            <div className="flex w-1/2 justify-between items-center text-center">
              <span>PRICE</span>
              <span>QUANTITY</span>
              <span>SUBTOTAL</span>
            </div>
          </div>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex w-full items-center justify-between text-center"
              >
                <div className="w-1/2 flex items-center gap-4">
                  <Image
                    src={"/Card-Jacket1.png"}
                    width={50}
                    height={50}
                    alt=""
                  />
                  <span>{item.name}</span>
                </div>
                <div className="flex w-1/2 justify-between">
                  <span>N{item.current_price}</span>
                  <span>1</span>
                  <span>N{item.current_price}</span>
                </div>
              </div>
            );
          })}
        </div>
        <hr className="mt-4" />
      </div>
      <div className="lg:w-1/3 md:w-1/2 flex flex-col capitalize gap-2">
        <span className="font-semibolds text-lg">Cart Totals</span>
        <div className="flex justify-between w-full font-semibold text-lg">
          <span className="font-semibold">SUBTOTAL</span>
          <span>0</span>
        </div>
        <span className="font-semibold"> SHIPPING</span>
        <span>
          {" "}
          Shipping: <span className="font-semibold">N35,000</span>
        </span>
        <span>SHIPPING TO KAFACHAN</span>
        <div className="flex items-center justify-between lg:pr-4">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="COUPON CODE"
            className="border-2  lg:w-72 h-9 px-2"
          />
          <button className="px-4 h-9 bg-[#333333] text-[#E0E0E0]">
            APPLY
          </button>
        </div>
        <span className="text-xl font-semibold mb-4">Total</span>
        <button
          onClick={goToCheckOut}
          className="bg-[#377E7F] text-white text-lg h-14"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};
