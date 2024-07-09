export const DisplaySection2 = () => {
  return (
    <div
      className="w-full h-[50vh] lg:h-[90vh] h-max-[1706px] mt-4 flex items-center justify-center flex-col gap-4 font-light bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/Background.png')" }}
    >
      <h1 className="text-white text-4xl">Complete Quests</h1>
      <button className="p-4 text-[#377E7F] bg-white w-44 font-semibold">
        Shop Now
      </button>
    </div>
  );
};
