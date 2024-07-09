import { FooterSection } from "../components/FooterSection";
import { MainCheckoutSection } from "../components/MainCheckoutSection";
import { NavBar } from "../components/NavBar";

export default function Checkout() {
  return (
    <div>
      <NavBar />
      <h1 className="text-2xl font-semibold px-10 mt-10">Cart</h1>
      <MainCheckoutSection />
      <FooterSection />
    </div>
  );
}
