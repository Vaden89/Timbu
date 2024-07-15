import { FooterSection } from "../components/FooterSection";
import { MainCartSection } from "../components/MainCartSection";
import { NavBar } from "../components/NavBar";
import { NewInSection } from "../components/NewInSection";

export default function Cart() {
  return (
    <div className="flex flex-col gap-4">
      <NavBar />
      <MainCartSection />
      <NewInSection />
      <FooterSection />
    </div>
  );
}
