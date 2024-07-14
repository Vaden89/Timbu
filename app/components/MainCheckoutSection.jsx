"use client";
import Image from "next/image";
import CartContext from "../providers/context";
import { getSingleProduct } from "../api/product/route";
import { useContext, useState, useEffect } from "react";

export const MainCheckoutSection = () => {
  const { items } = useContext(CartContext);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    console.log(items);
    sth();
  }, []);

  async function sth() {
    setloading(true);
    try {
      const results = await Promise.all(
        items.map(async (item) => {
          const response = await getSingleProduct(item);
          const { response: data } = await response.json();
          setData((prev) => [...prev, data]);
          setTotal((prev) => prev + data.current_price);
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
    <div className="w-full flex flex-col-reverse md:flex-row lg:flex-row gap-10 lg:gap-14 px-6 lg:px-10 mt-4">
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">DELIVERY DETAILS</h1>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Email"
            className="w-full p-2 h-14 border-2 border-[#828282]"
          />
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Country/Region"
            className="w-full p-2 h-14 border-2 border-[#828282]"
          />
          <div className="flex gap-4">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="First Name"
              className="w-1/2 p-2 h-14 border-2 border-[#828282]"
            />
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Last Name"
              className="w-1/2 p-2 h-14 border-2 border-[#828282]"
            />
          </div>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Street"
            className="w-full p-2 h-14 border-2 border-[#828282]"
          />
          <div className="flex gap-4">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="City"
              className="w-1/3 p-2 h-14 border-2 border-[#828282]"
            />
            <input
              type="text"
              name="text"
              id="text"
              placeholder="State"
              className="w-1/3 p-2 h-14 border-2 border-[#828282]"
            />
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Postal Code"
              className="w-1/3 p-2 h-14 border-2 border-[#828282]"
            />
          </div>
          <input
            type="text"
            name="text"
            id="text"
            placeholder="Phone Number"
            className="w-full p-2 h-14 border-2 border-[#828282]"
          />
          <div className="flex gap-4">
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              className="w-4"
            />
            <span>Save this information for next time</span>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3">
          <h1 className="text-2xl font-semibold"> Payment</h1>
          <div className="border-2 border-[#828282] rounded-xl">
            <div className="flex p-4 gap-4 items-center">
              <input type="radio" name="cardpayment" id="cardpayment" />
              <label htmlFor="cardpayment">Card Payment</label>
            </div>
            <hr />
            <div className="flex p-4 gap-4 items-center">
              <input type="radio" name="banktransfer" id="banktransfer" />
              <label htmlFor="banktransfer">Bank Transfer</label>
            </div>
            <hr />
            <div className="flex p-4 gap-4 items-center">
              <input type="radio" name="cryptopayment" id="cryptopayment" />
              <label htmlFor="cryptopayment">Crypto Payment</label>
            </div>
          </div>
          <button className="w-full text-white font-medium bg-[#377E7F] p-4">
            Pay now
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-start gap-4 lg:px-6 ">
        <div className="w-full flex flex-col gap-2 max-h-[60vh]">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="flex w-full justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={"/Card-Jacket1.png"}
                    width={80}
                    height={50}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span>{item.name}</span>
                    <span className="font-thin text-xl">XXL</span>
                  </div>
                </div>
                <div>
                  <span>{item.current_price}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex w-full justify-between mt-8">
          <span>Subtotal</span>
          <span>N{total}</span>
        </div>
        <div className="flex w-full justify-between">
          <span>Shipping</span>
          <span>N5,000</span>
        </div>
        <div className="flex w-full justify-between text-2xl">
          <span>Total</span>
          <span>N{total + 5000}</span>
        </div>
      </div>
    </div>
  );
};
