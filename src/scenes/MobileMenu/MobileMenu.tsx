import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "@/scenes/Link/Link";
import { navLinks } from "../Navbar/Navbar";

type Props = {
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
};

const MobileMenu = ({
  isMenuToggled,
  setIsMenuToggled,
  selectedPage,
  setSelectedPage,
}: Props) => {
  return (
    <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-blue-100 drop-shadow">
      <div className="flex justify-end p-12">
        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
          <XMarkIcon className="h-6 w-6 text-gray-400" />
        </button>
      </div>
      <div className="ml-[33%] flex flex-col gap-10 text-2xl">
        {navLinks.map((linkName) => (
          <Link
            isMenuToggled={isMenuToggled}
            setIsMenuToggled={setIsMenuToggled}
            page={linkName}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        ))}
      </div>
    </div>
  );
};

export { MobileMenu };
