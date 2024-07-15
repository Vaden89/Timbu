import Link from "next/link";

export const CheckOutComplete = () => {
  return (
    <main className="w-full h-[80vh] text-2xl gap-4  flex flex-col items-center justify-center">
      <span>Thanks For Ordering, Items would be delivered shorty...</span>
      <span>In the mean time you can continue shopping</span>
      <Link className="p-4 text-lg bg-[#377E7F] text-white" href={"/"}>
        Continue Shopping
      </Link>
    </main>
  );
};
