import { useState } from "react";
import Logo from "@/assets/Icons/Logo.svg";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { DesktopMenu } from "../DesktopMenu/DesktopMenu";
import { MobileMenu } from "../MobileMenu/MobileMenu";
import { MobileMenuButton } from "../MobileMenu/MobileMenuButton";

type Props = {
  selectedPage: string;
  setSelectedPage: (value: string) => void;
  isTopOfPage: boolean;
};

export const navLinks: string[] = [
  "Home",
  "Benefits",
  "Our Classes",
  "Contact Us",
];

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  const navBarBackground = isTopOfPage ? "" : "bg-blue-100 drop-shadow";

  return (
    <nav>
      <div
        className={`${navBarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 transition duration-200`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-8`}>
            <img src={Logo} alt="Logo" />
            {isAboveMediumScreen ? (
              <DesktopMenu
                flexBetween={flexBetween}
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ) : (
              <MobileMenuButton
                setIsMenuToggled={setIsMenuToggled}
                isMenuToggled={isMenuToggled}
              />
            )}
          </div>
        </div>
      </div>

      {/* mobile menu modal */}
      {!isAboveMediumScreen && isMenuToggled && (
        <MobileMenu
          setIsMenuToggled={setIsMenuToggled}
          isMenuToggled={isMenuToggled}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}
    </nav>
  );
};

export { Navbar };
