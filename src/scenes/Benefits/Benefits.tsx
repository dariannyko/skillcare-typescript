import {
  HomeModernIcon,
  UserGroupIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { navigationLinks } from "@/App";
import { BenefitCard } from "./BenefitCard";
import { SectionHeader } from "@/shared/SectionHeader";
import { ActionButton } from "@/shared/ActionButton";
import { BenefitCardType } from "@/shared/Types";
import BenefitsPage from "@/assets/BenefitsPage.png";
import { motion } from "framer-motion";

const benefits: Array<BenefitCardType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Support",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    background: "bg-primary-pink",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Easy to Use",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    background: "bg-primary-blue",
  },
  {
    icon: <RocketLaunchIcon className="h-6 w-6" />,
    title: "Exprience",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    background: "bg-primary-gray",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

type Props = {
  setSelectedPage: (value: string) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id={navigationLinks.benefits}
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(navigationLinks.benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SectionHeader>
            Benefits Of Learning From{" "}
            <span className="text-orange-500">SkillCare</span>
          </SectionHeader>
          <p className="my-5 text-base">
            Watch on-demand video lectures from renowned instructors in subjects
            such as Proggraming, business, computer science, data science, and
            language learning.
          </p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex md:items-stretch"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map(({ title, icon, description, background }) => (
            <BenefitCard
              key={title}
              title={title}
              icon={icon}
              description={description}
              background={background}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION*/}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <div className="basis-3/5">
            <img className="mx-auto" src={BenefitsPage} alt="benefits-page" />
          </div>
          {/* DESCRIPTION */}
          <div className="basis-3/5">
            <div className="relative">
              <div className="z-[-1] before:absolute before:-top-20 before:-left-20 before:content-abstractWaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <SectionHeader>
                    Faster, eaiser, more{" "}
                    <span className="text-orange-500">convenienty</span>
                  </SectionHeader>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
              Proper and good education is very important for all of us. It facilitates quality learning all through the life among people of any age group, cast, creed, religion and region.
              </p>
              <p className="mb-8">
              It is the process of achieving knowledge, values, skills, beliefs, and moral habits.Education is the process of facilitating learning, or the acquisiof knowledge, skills, values.
              </p>

              <ul className="flex justify-between text-lg font-semibold">
                <li className="hover:text-orange-500 transition duration-500">
                  <span className="text-3xl font-extrabold">1000</span>
                  <p>Video Tutorials</p>
                </li>
                <li className="hover:text-orange-500 transition duration-500">
                  <span className="text-3xl font-extrabold">230</span>
                  <p>Speakers</p>
                </li>
                <li className="hover:text-orange-500 transition duration-500">
                  <span className="text-3xl font-extrabold">900</span>
                  <p>Students</p>
                </li>
              </ul>
            </motion.div>
            <div className="relative mt-16">
              <div className="z-[-1] before:absolute before:-bottom-20 before:right-40 before:content-sparkles">
                <ActionButton
                  setSelectedPage={setSelectedPage}
                  page={navigationLinks.contactUS}
                >
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export { Benefits };
