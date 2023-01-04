import AnchorLink from "react-anchor-link-smooth-scroll";
import { navigationLinks } from "@/App";
import { motion } from "framer-motion";

const childVariant = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {opacity: 1, scale: 1},
}

type Props = {
    icon: JSX.Element;
    title: string,
    description: string;
    background: string;
    setSelectedPage: (value: string) => void;
}

const BenefitCard = ({icon, title, description, background, setSelectedPage}: Props) => {
  return (
    <motion.div className='mt-5 rounded-2xl border-2 border-gray-30 px-5 py-16 text-center basis-1/3 flex flex-col'
    variants={childVariant}
    transition={{duration: 0.4}}>
        <div className='mb-8 flex justify-center'>
          <div className="relative z-[-1] before:absolute before:-top-4 before:-left-2.5 before:content-BenefitIconBackground">
            <div className={`rounded-full ${background} p-4 text-white relative`}>
                {icon}
            </div>


          </div>
        </div>
        <h4 className="font-extrabold text-xl">{title}</h4>
        <p className="my-3">{description}</p>
        <AnchorLink
            className="text-sm font-bold text-primary-500 underline transition duration-500 text-orange-500 hover:text-secondary-500 mt-auto"
            onClick={() => setSelectedPage(navigationLinks.contactUS)}
            href={`${navigationLinks.contactUS}`}
          >
            <a href="#">Learn More</a>
          </AnchorLink>
    </motion.div>
  )
}

export {BenefitCard}