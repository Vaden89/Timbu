import { FooterSection } from "../components/FooterSection";
import { MainCheckoutSection } from "../components/MainCheckoutSection";
import { NavBar } from "../components/NavBar";

export default function Checkout() {
  return (
    <div>
      <NavBar />
      <h1 className="text-xl font-semibold px-6 lg:px-10 mt-10">CART</h1>
      <MainCheckoutSection />
      <FooterSection />
    </div>
  );
}
