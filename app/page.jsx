import { CategoriesCard } from "./components/CategoriesCard";
import { LandingSection } from "./components/LandingSection";
import { NavBar } from "./components/NavBar";
import { DisplaySection2 } from "./components/DisplaySection2";
import { FooterSection } from "./components/FooterSection";
import { NewInSection } from "./components/NewInSection";
import { SweatShirtsSection } from "./components/SweatShirtsSection";
import { AccessoriesSection } from "./components/AccessoriesSection";

export default function Home() {
  return (
    <main className="w-screen h-full flex flex-col lg:gap-10">
      <div>
        <NavBar />
        <LandingSection />
      </div>
      <NewInSection />
      <SweatShirtsSection />
      <AccessoriesSection />
      <CategoriesCard />
      <DisplaySection2 />
      <NewInSection />
      <FooterSection />
    </main>
  );
}
