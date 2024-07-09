import { CategoriesCard } from "./components/CategoriesCard";
import { LandingSection } from "./components/LandingSection";
import { NavBar } from "./components/NavBar";
import { DisplaySection } from "./components/DisplaySection";
import { DisplaySection2 } from "./components/DisplaySection2";
import { FooterSection } from "./components/FooterSection";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col">
      <NavBar />
      <LandingSection />
      <DisplaySection sectionTitle={"New In"} />
      <CategoriesCard />
      <DisplaySection sectionTitle={"Sweatshirts & Jackets"} />
      <DisplaySection sectionTitle={"Shirts"} />
      <DisplaySection2 />
      <DisplaySection sectionTitle={"Accessories"} />
      <FooterSection />
    </main>
  );
}
