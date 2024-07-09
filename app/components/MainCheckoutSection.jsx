import Image from "next/image";

export const MainCheckoutSection = () => {
  return (
    <div className="w-full flex lg:flex-col gap-14 px-6 lg:px-10">
      <div className="w-1/2 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
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
        <div className="mt-10 flex flex-col gap-4">
          <h1 className="text-2xl font-semibold"> Payment</h1>
          <div className="border-2 border-[#828282] rounded-2xl">
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
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-start gap-4 lg:px-6">
        <div className="w-full flex  justify-between items-center">
          <div className="flex items-center justify-center gap-2 lg:gap-8">
            <Image
              src={"/Card-jacket1.png"}
              width={80}
              height={80}
              alt="jacket"
            />
            <div className="flex flex-col">
              <span className="font-semibold">
                Levis Slim-Fit <br className="lg:hidden" /> Denim Dark Indigo
              </span>
              <span className="font-thin">XXL</span>
            </div>
          </div>
          <span className="font-semibold">N35,000</span>
        </div>
        <div className="flex w-full justify-between mt-8">
          <span>Subtotal</span>
          <span>N35,000</span>
        </div>
        <div className="flex w-full justify-between">
          <span>Shipping</span>
          <span>N5,000</span>
        </div>
        <div className="flex w-full justify-between text-2xl">
          <span>Total</span>
          <span>N40,000</span>
        </div>
      </div>
    </div>
  );
};
