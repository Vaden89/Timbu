import { NavBar } from "@/app/components/NavBar";
import { getProductData } from "@/lib/products";
import Image from "next/image";

async function getData(id) {
  const res = await getProductData(id);
  console.log(res);
  return res;
}

export default async function Product({ params }) {
  const data = await getData(params.productId);
  return (
    <main className="w-screen h-screen ">
      <NavBar />
      <div className="flex flex-col md:flex-row lg:flex-row items-center md:items-start lg:items-start justify-center gap-8 p-4 px-8 w-full lg:h-[85vh]">
        <Image
          src={"/Card-Jeans2.png"}
          width={300}
          height={300}
          alt="hey"
          className="lg:w-1/2 h-full"
        />
        <div className="lg:w-1/2 flex flex-col gap-6 items-center justify-center">
          <div className="w-full flex flex-col gap-2">
            <h1 className="text-3xl font-semibold md:text-start lg:text-start text-center">
              {data[0].name}
            </h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              iure quasi. Ut recusandae excepturi quos enim ea odio vitae
              accusamus!
            </p>
            <div className="w-full text-2xl flex justify-between pr-2">
              <span>Quantity Available: </span>
              <span className="font-semibold">
                {data[0].available_quantity}
              </span>
            </div>
            <div className="w-full text-2xl flex justify-between pr-2">
              <span>Price: </span>
              <span className="font-semibold">
                {data[0].current_price[0].NGN[0]}
              </span>
            </div>
          </div>
          <button className="w-full text-white bg-[#23a509] p-4 text-xl rounded-xl">
            Add To Cart
          </button>
        </div>
      </div>
    </main>
  );
}
