
import ContactUsPage from "@/assets/ContactUsPage.png";
import { navigationLinks } from "@/App";
import { SectionHeader } from "@/shared/SectionHeader";
import { motion } from "framer-motion";
import { Form } from "../Form/Form";

type Props = {
  setSelectedPage: (value: string) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {

  return (
    <section
      id={navigationLinks.contactUS}
      className="mx-auto w-5/6 pt-24 pb-32"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(navigationLinks.contactUS)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
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
            <span className="text-orange-500">Join now</span> to improve your skills
          </SectionHeader>
          <p className="my-5">
          Proper and good education is very important for all of us. It facilitates quality learning all through the life among people of any age group, cast, creed, religion and region.
          </p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="md:mt-10 md:flex justify-between gap-16">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Form/>
          </motion.div>
          <motion.div className="relative mt-16 basis-2/5 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}>
            <div className="md:before:content-evolveText w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                <img className="w-full rounded-lg"
                src={ContactUsPage} alt="contact-us-page-graphic" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export { ContactUs };
