"use client"; // Ensures component runs on the client-side (if using React Server Components)

import { GET } from "../api/product/route";
import { useEffect, useState } from "react";
import { ItemCard } from "./ItemCard";

export const Smth = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setError(null);
    try {
      const response = await GET();
      const { response: data } = await response.json();
      setData(data.items);
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
    <div className="w-full flex flex-col gap-8 py-12 px-10">
      <div className="flex items-center justify-between">
        <h1 className="text-lg lg:text-xl">New In</h1>
        <button>View more &gt;</button>
      </div>
      <div className="hidden mt-2 w-full lg:flex flex-col md:flex-row lg:flex-row gap-8 justify-start items-center overflow-x-auto">
        {isLoading ? (
          <div className="w-full h-[329px] bg-zinc-100 flex items-center justify-center">
            Loading products...
          </div>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          data
            .slice(0, 4)
            .map((item, index) => (
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
      <div className="lg:hidden mt-2 w-full flex flex-col md:flex-row lg:flex-row gap-8 justify-start items-center overflow-x-auto">
        {isLoading ? (
          <div className="w-full h-[329px] bg-zinc-100 flex items-center justify-center">
            Loading products...
          </div>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          data
            .slice(0, 3)
            .map((item, index) => (
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
