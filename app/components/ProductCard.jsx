import Image from "next/image";

export const ProductCard = (props) => {
  return (
    <div className=" lg:w-1/4 flex flex-col items-center justify-center gap-2">
      <Image src={props.image} width={300} height={300} alt="Clothing Item" />
      <span className="w-full px-3 font-semibold">{props.desc}</span>
      <span className="w-full px-3 text-xl font-semibold">₦{props.price}</span>
    </div>
  );
};
