import { FooterSection } from "../components/FooterSection";
import { MainCheckoutSection } from "../components/MainCheckoutSection";
import { NavBar } from "../components/NavBar";
import { NewInSection } from "../components/NewInSection";

export default function Checkout() {
  return (
    <div>
      <NavBar />
      <h1 className="text-xl font-semibold px-6 lg:px-10 mt-10">CART</h1>
      <MainCheckoutSection />
      <NewInSection />
      <FooterSection />
    </div>
  );
}
