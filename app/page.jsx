import { CategoriesCard } from "./components/CategoriesCard";
import { LandingSection } from "./components/LandingSection";
import { NavBar } from "./components/NavBar";
import { DisplaySection2 } from "./components/DisplaySection2";
import { FooterSection } from "./components/FooterSection";
import { Smth } from "./components/Smth";
import { Smth2 } from "./components/Smth2";
import { Smth3 } from "./components/Smth3";

export default function Home() {
  return (
    <main className="w-screen h-full flex flex-col lg:gap-10">
      <NavBar />
      <LandingSection />
      <Smth />
      <Smth2 />
      <Smth3 />
      <CategoriesCard />
      <DisplaySection2 />
      <Smth />
      <FooterSection />
    </main>
  );
}
