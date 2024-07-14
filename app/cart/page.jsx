import { FooterSection } from "../components/FooterSection";
import { MainCartSection } from "../components/MainCartSection";
import { NavBar } from "../components/NavBar";

export default function Cart() {
  return (
    <div className="flex flex-col gap-4">
      <NavBar />
      <MainCartSection />
      <FooterSection />
    </div>
  );
}
