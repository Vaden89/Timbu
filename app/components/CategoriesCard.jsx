export const CategoriesCard = () => {
  return (
    <div className="w-full lg:flex mt-4 hidden">
      <div
        className="bg-no-repeat bg-center bg-cover w-1/3 h-[40vh] lg:h-[65vh]"
        style={{ backgroundImage: "url('/Men.png')" }}
      ></div>
      <div
        className="bg-no-repeat bg-cover bg-center w-1/3 h-[40vh] lg:h-[65vh]"
        style={{ backgroundImage: "url('/Shoes.png')" }}
      ></div>
      <div
        className="bg-no-repeat bg-center bg-cover w-1/3 h-[40vh] lg:h-[65vh]"
        style={{ backgroundImage: "url('/Women.png')" }}
      ></div>
    </div>
  );
};
