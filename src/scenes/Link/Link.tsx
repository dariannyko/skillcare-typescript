import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: string) => void;
  isMenuToggled?: boolean;
  setIsMenuToggled?: (value: boolean) => void;
};

const Link = ({ page, selectedPage, setSelectedPage, isMenuToggled, setIsMenuToggled }: Props) => {
  const LowerCasePAge = page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink
      className={`${
        selectedPage === LowerCasePAge ? "text-orange-500" : "text-gray-50"
      } transition duration-500 hover:text-orange-500`}
      href={`#${LowerCasePAge}`}
      onClick={() => {
        setSelectedPage(LowerCasePAge);
        if (isMenuToggled && setIsMenuToggled) {
          setIsMenuToggled(!isMenuToggled);
        }
      }}
    >
      {page}
    </AnchorLink>
  );
};

export { Link };
