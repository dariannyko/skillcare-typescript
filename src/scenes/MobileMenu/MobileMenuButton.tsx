import { Bars3Icon } from "@heroicons/react/24/solid";

type Props = {
  isMenuToggled: boolean;
  setIsMenuToggled: (value: boolean) => void;
};

const MobileMenuButton = ({ isMenuToggled, setIsMenuToggled }: Props) => {
  return (
    <button className="rounded-full bg-secondary-500  p-2">
      <Bars3Icon
        className="h-6 w-6 text-white"
        onClick={() => setIsMenuToggled(!isMenuToggled)}
      />
    </button>
  );
};

export { MobileMenuButton };
