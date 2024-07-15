"use client";
import { GET } from "../api/product/route";
import { useEffect, useState } from "react";
import { ItemCard } from "./ItemCard";

export const AccessoriesSection = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    <div className="w-full flex flex-col gap-8 pb-12 px-10">
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-3xl font-medium">Accessories</h1>
        <button className="py-2 px-6  rounded-full bg-slate-50 border-2 border-slate-200 text-[#4F4F4F]">
          View more
        </button>
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
