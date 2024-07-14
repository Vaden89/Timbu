export const LandingSection = () => {
  return (
    <div className="w-full ">
      <div className="w-full lg:h-[87vh] bg-no-repeat bg-cover hidden lg:flex md:flex items-center p-16 landing-section ">
        <div className="w-2/3 lg:w-2/3 text-[#4F4F4F]">
          <h1 className="text-4xl lg:text-5xl font-semibold ">
            Style Meets <span className="text-[#377E7F]">Convenience</span>,
            Shop Seamlessly.
          </h1>
          <p className="mt-4">
            Step into style with our curated collection of trendsetting sneakers
            <br className="hidden lg:flex" /> and fashion-forward clothing.
          </p>
          <div className="text-white flex gap-4 mt-10">
            <button className="bg-[#377E7F] p-4 w-36 ">Shop Men</button>
            <button className="bg-[#377E7F] p-4 w-36 ">Shop Women</button>
          </div>
        </div>
      </div>
      <div className="w-full lg:hidden md:hidden">
        <div className="lg:w-2/3 text-[#4F4F4F] p-4">
          <h1 className="text-3xl font-bold ">
            Style Meets <span className="text-[#377E7F]">Convenience</span>,
            Shop Seamlessly.
          </h1>
          <p className="mt-3 text-lg font-medium">
            Step into style with our curated collection of trendsetting sneakers
            <br className="hidden lg:flex" /> and fashion-forward clothing.
          </p>
          <div className="text-white flex gap-4 mt-6">
            <button className="bg-[#377E7F] p-4 w-36 ">Shop Men</button>
            <button className="bg-[#377E7F] p-4 w-36 ">Shop Women</button>
          </div>
        </div>
        <div
          className="w-full h-[30vh] bg-contain bg-no-repeat mt-2"
          style={{ backgroundImage: "url('/Landing-Img2.png')" }}
        ></div>
      </div>
    </div>
  );
};
