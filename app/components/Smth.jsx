"use client"; // Ensures component runs on the client-side (if using React Server Components)

import { GET } from "../api/product/route";
import { useEffect, useState } from "react";
import { ItemCard } from "./ItemCard";

export const Smth = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await GET();
      setData(res.items);
      console.log(res.items);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col md:py-12 md:px-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">New In</h1>
        <button>View more &gt;</button>
      </div>
      <div className="mt-2 w-full flex flex-nowrap gap-4 overflow-x-auto  justify-start items-center ">
        {isLoading ? (
          <div className="w-full h-[329px] bg-zinc-100 flex items-center justify-center">
            Loading products...
          </div>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          data.map((item, index) => (
            <ItemCard
              key={index}
              name={item.name}
              price={item.current_price[0].NGN[0]}
              image={item.photos[0].url}
              slug={item.url_slug}
              product_id={item.id}
            />
          ))
        )}
      </div>
    </div>
  );
};
