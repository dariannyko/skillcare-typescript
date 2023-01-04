
import { ActionButton } from "@/shared/ActionButton";
import { navigationLinks } from "../../App";
import { navLinks } from "../Navbar/Navbar";
import { Link } from "@/scenes/Link/Link";


type Props = {
  flexBetween: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
}

const DesktopMenu = ( {selectedPage, setSelectedPage, flexBetween}: Props) => {
  return (
    <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  {navLinks.map((linkName) => (
                    <Link
                      page={linkName}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  ))}
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <a className="cursor-pointer hover:text-orange-500 transition duration-500" href="#">
                    Sign In
                  </a>
                  <ActionButton
                    setSelectedPage={setSelectedPage}
                    page={navigationLinks.ourClasses}
                  >
                    Become a Member
                  </ActionButton>
                </div>
              </div>
  )
}

export {DesktopMenu}