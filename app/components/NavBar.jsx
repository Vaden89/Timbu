"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const NavBar = () => {
  const router = useRouter();
  const goToCart = () => {
    router.push("/cart");
  };
  const goHome = () => {
    router.push("/");
  };
  return (
    <nav className="flex w-full items-center justify-between py-4 px-7 text-lg bg-white ">
      <ul className="hidden lg:flex gap-4">
        <Link href={"#"}>New In</Link>
        <Link href={"#"}>Men</Link>
        <Link href={"#"}>Women</Link>
      </ul>
      <span className="lg:hidden text-2xl font-medium mr-6">≡</span>

      <Image
        onClick={goHome}
        src={"/Logo.png"}
        width={120}
        height={120}
        alt="timbu-logo"
      />

      <div className="flex items-center gap-4">
        <Image
          src={"/search.png"}
          width={30}
          height={30}
          alt="search"
          className="hidden lg:flex"
        />
        <Image src={"/Cart Total.png"} width={40} height={40} alt="smth" />
        <Image
          onClick={goToCart}
          src={"/shopping_cart.png"}
          width={40}
          height={40}
          alt="cart"
        />
        <Image
          src={"/profile.png"}
          width={30}
          height={30}
          alt="profile"
          className="hidden lg:flex"
        />
      </div>
    </nav>
  );
};
