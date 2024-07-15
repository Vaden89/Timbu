"use client";
import { NavBar } from "@/app/components/NavBar";
import { getProductData } from "@/lib/products";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import CartContext from "@/app/providers/context";
import { Loading } from "@/app/components/Loading";
export default function Product({ params }) {
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [data, setdata] = useState({});
  const fetchData = async () => {
    try {
      const res = await getProductData(params.productId);
      console.log(res);
      setdata(res);
    } catch (err) {
      throw new Error("h", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const addItem = () => {
    addToCart(data.id);
  };
  return (
    <main className="w-full h-screens">
      <NavBar />
      <div className="flex flex-col lg:flex-row items-start justify-start   gap-8 p-4 px-8 w-full">
        <Image
          src={`https://api.timbu.cloud/images/${data.photos[0].url}`}
          width={200}
          height={200}
          alt="hey"
          className="w-full lg:aspect-square lg:w-1/2 "
        />
        <div className=" lg:w-1/2 flex flex-col gap-6 items-center justify-center">
          <div className="w-full flex flex-col gap-2">
            <h1 className="text-4xl font-semibold">{data?.name}</h1>
            <p className="text-lg h-[30vh] lg:h-full">{data?.description}</p>
            <div className="w-full text-2xl flex justify-between pr-2">
              <span>Quantity Available: </span>
              <span className="font-semibold">{data?.available_quantity}</span>
            </div>
            <div className="w-full text-2xl flex justify-between pr-2">
              <span>Price: </span>
              <span className="font-semibold">
                ₦{data.current_price[0].NGN[0]}
              </span>
            </div>
          </div>
          <button
            onClick={addItem}
            className="w-full text-white bg-[#23a509] p-4 text-xl rounded-xl"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </main>
  );
}
