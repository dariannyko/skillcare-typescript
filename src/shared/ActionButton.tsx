import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = {
  page: string;
  children: React.ReactNode;
  setSelectedPage: (value: string) => void;

};

const ActionButton = ({ setSelectedPage, page, children }: Props) => {
  const LowerCasePAge = page.toLowerCase().replace(/ /g, "");

  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 text-white px-10 py-2 transition  duration-500 hover:bg-orange-500"
      href={`#${LowerCasePAge}`}
      onClick={() => setSelectedPage(LowerCasePAge)}
    >
      {children}
    </AnchorLink>
  );
};

export { ActionButton };
