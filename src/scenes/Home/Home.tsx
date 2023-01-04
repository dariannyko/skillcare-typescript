import { useMediaQuery } from "@/hooks/useMediaQuery";
import { ActionButton } from "@/shared/ActionButton";
import { navigationLinks } from "@/App";
import HomePage from "@/assets/HomePage.png";
import SponsorMicrosoft from "@/assets/Icons/SponsorMicrosoft.svg";
import SponsorPrudential from "@/assets/Icons/SponsorPrudential.svg";
import SponsorSlack from "@/assets/Icons/SponsorSlack.svg";
import SponsorZoover from "@/assets/Icons/SponsorZoover.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: string) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id={navigationLinks.home}
      className="gap-16 bg-gray-20 py-10 md:pb-0"
    >
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-screen"
        onViewportEnter={() => setSelectedPage(navigationLinks.home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5 mb-10 md:mb-0">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolveText">
                <h1 className="text-5xl font-extrabold">
                  Start Your Learning Our{" "}
                  <span className="text-orange-500">Experts Trainers</span>
                </h1>
              </div>
            </div>
            <p className="mt-8 text-base">
            Build your skill from world-class universities and companies, you can learn online and earn certifications and degrees.
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton
              setSelectedPage={setSelectedPage}
              page={navigationLinks.contactUS}
            >
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-orange-500 underline transition duration-500 hover:text-secondary-500"
              onClick={() => setSelectedPage(navigationLinks.contactUS)}
              href={`${navigationLinks.contactUS}`}
            >
              <a href="#">Learn More</a>
            </AnchorLink>
          </motion.div>
        </div>
        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-20 md:mt-16 md:justify-end">
          <img src={HomePage} alt="home-page-graphic" />
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex items-center justify-between gap-8">
              <img src={SponsorMicrosoft} alt="microsoft-sponsor" />
              <img src={SponsorPrudential} alt="prudential-sponsor" />
              <img src={SponsorSlack} alt="slack-sponsor" />
              <img src={SponsorZoover} alt="zoover-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export { Home };
