import Image from "next/image";

export const FooterSection = () => {
  return (
    <footer className="w-full h-full lg:h-[830px] mt-4">
      <div className="bg-[#D8EFEC] h-1/2 w-full flex flex-col items-center justify-center gap-4 p-4 py-10">
        <h1 className="text-center text-xl md:text-3xl md:font-semibold lg:text-3xl lg:font-semibold">
          Subscribe to our newsletter to get updates{" "}
          <br className="lg:flex hidden" /> to our latest collection
        </h1>
        <p className="text-[#828282] text-sm md:text-base lg:text-base">
          Get 20% off your first order by subscribing to our newsletter
        </p>
        <div className="lg:w-[511px] md:w-[511px] h-14 flex items-center justify-between">
          <div className="lg:w-[411px] md:w-[411px] h-full border-2 border-[#828282] flex items-center p-2 gap-2 ">
            <span className="text-2xl text-[#828282]">✉</span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-transparent "
            />
          </div>
          <button className="p-4 text-white bg-[#377E7F]">Subscribe</button>
        </div>
        <p className="text-center text-[#828282]">
          You&apos;ll be able to unsubscribe at any time. <br /> Read our
          Privacy Policy{" "}
          <span className="font-semibold text-black cursor-pointer">here</span>
        </p>
      </div>
      <div className="bg-[#377E7F] h-full lg:h-1/2 w-full text-white flex flex-col items-center justify-between">
        <div className="w-full flex flex-col md:flex-row lg:flex-row items-center justify-between p-12">
          <div className="flex flex-col gap-8 items-center justify-center">
            <Image
              src={"/Logo2.jpg"}
              width={110}
              height={110}
              alt="timbu"
              className="hidden lg:hidden"
            />
            <Image
              src={"/Logo2.jpg"}
              width={150}
              height={150}
              alt="timbu"
              className="md:hidden lg:hidden"
            />
            <Image
              src={"/Logo2.jpg"}
              width={150}
              height={150}
              alt="timbu"
              className="hidden lg:flex"
            />
            <div className="flex items-center gap-6">
              <Image
                src={"/Vector.png"}
                width={24}
                height={24}
                alt="Instagram Icon"
                className="cursor-pointer"
              />
              <Image
                src={"/pajamas_twitter.png"}
                width={24}
                height={24}
                alt="twitter Icon"
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className=" flex flex-col md:flex-row lg:flex-row gap-6  lg:gap-10 mt-10  text-2xl text-center lg:text-left md:text-left">
            <div className="flex flex-col lg:w-36">
              <span className="font-semibold">About Us</span>
              <div className="flex flex-col font-thin">
                <span className="text-base">Our Story</span>
                <span className="text-base">FAQs</span>
                <span className="text-base">Terms and Condition</span>
              </div>
            </div>
            <div className="flex flex-col lg:w-36">
              <span className="font-semibold">Shop</span>
              <div className="flex flex-col text-base font-thin cursor-pointer">
                <span>Shirts</span>
                <span>Sweatshirts</span>
                <span>Sneakers</span>
                <span>Trousers</span>
                <span>Shorts</span>
              </div>
            </div>
            <div className="flex flex-col lg:w-36">
              <span className="font-semibold">Help</span>
              <div className="flex flex-col text-base font-thin cursor-pointer">
                <span>Get Help</span>
                <span>Shipping</span>
                <span>Delivery</span>
                <span>Returns</span>
                <span>Order Cancellation</span>
              </div>
            </div>
            <div className="flex flex-col lg:w-36">
              <span className="font-semibold">Contact Us</span>
              <div className="flex flex-col text-base font-thin cursor-pointer">
                <span>Email</span>
                <span>Phone Number</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="border-b-2 w-full"></div>
          <div className="p-8 font-thin flex flex-col gap-4 md:flex-row lg:flex-row items-center justify-between text-lg">
            <span>© ClothedByJoe, All Rights Reserved</span>
            <div className="flex items-center gap-4">
              <Image
                src={"/image 14.png"}
                width={40}
                height={40}
                alt="payment card"
              />
              <Image
                src={"/image 15.png"}
                width={40}
                height={40}
                alt="payment card"
              />
              <Image
                src={"/image 16.png"}
                width={40}
                height={40}
                alt="payment card"
              />
              <Image
                src={"/image 17.png"}
                width={40}
                height={40}
                alt="payment card"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
