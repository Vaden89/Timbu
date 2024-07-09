import Image from "next/image";

export const MainCartSection = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row p-4 lg:px-8 gap-12 capitalize mb-28">
      <div className="lg:w-2/3 w-full ">
        <span className="text-2xl">Cart</span>
        <hr />
        <div className="flex w-full justify-between  lg:p-3 p-2">
          <div className="lg:w-1/2 flex lg:items-end gap-4 items-center">
            <div className="flex gap-4  flex-col items-center">
              <span>PRODUCT</span>
              <div className="flex items-center gap-2">
                <span className="text-sm">X</span>
                <Image
                  src={"/card-Jacket1.png"}
                  width={60}
                  height={60}
                  alt="jacket"
                />
              </div>
            </div>
            <span className="lg:mb-6 mt-6 text-sm">
              Levis - Slim Fit - Denim - Dark Indigo
            </span>
          </div>
          <div className="lg:w-1/2  md:gap-6 flex justify-between">
            <div className="flex flex-col h-full justify-between">
              <span>Price</span>
              <span className="mb-6">35000</span>
            </div>
            <div className="flex flex-col h-full justify-between">
              <span>Quantity</span>
              <span className="text-center mb-6">1</span>
            </div>
            <div className=" flex-col h-full lg:justify-between hidden lg:flex ">
              <span>Subtotal</span>
              <span className="mb-6">35000</span>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="lg:w-1/3 md:w-1/2 flex flex-col capitalize gap-2">
        <span className="font-semibolds text-lg">Cart Totals</span>
        <div className="flex justify-between w-full font-semibold text-lg">
          <span>Subtotal</span>
          <span>N35,000</span>
        </div>
        <span>Shipping</span>
        <span>
          {" "}
          Shipping: <span>N35,000</span>
        </span>
        <span>SHIPPING TO KAFACHAN</span>
        <div className="flex items-center justify-between pr-4">
          <input
            type="text"
            name="text"
            id="text"
            className="border-2 w-72 h-9"
          />
          <button className="px-4 h-9 bg-[#333333] text-[#E0E0E0]">
            APPLY
          </button>
        </div>
        <span className="text-xl font-semibold">Total</span>
        <button className="bg-[#377E7F] text-white text-lg h-14">
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};
