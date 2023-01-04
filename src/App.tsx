import { Navbar } from "@/scenes/Navbar/Navbar";
import { Home } from "@/scenes/Home/Home";
import { Benefits } from "@/scenes/Benefits/Benefits";
import { OurClasses } from "@/scenes/OurClasses/OurClasses";
import { ContactUs } from "./scenes/ContactUs/ContactUs";
import { Footer } from "./scenes/Footer/Footer";
import { useState, useEffect } from "react";
import { NavigationLinksType } from "./shared/Types";

export const navigationLinks: NavigationLinksType = {
  home: "home",
  benefits: "benefits",
  ourClasses: "ourclasses",
  contactUS: "contactus",
};

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(navigationLinks.home);
      }

      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export { App };
