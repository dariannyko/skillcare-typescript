import WebDesignClass from "@/assets/Class/WebDesignClass.png";
import MachineLearnigClass from "@/assets/Class/MachineLearnigClass.jpg";
import PytohnDataScienseClass from "@/assets/Class/PytohnDataScienseClass.jpg";
import DataScienseClass from "@/assets/Class/DataScienseClass.jpg";
import MobileAppClass from "@/assets/Class/MobileAppClass.png";
import GameClass from "@/assets/Class/GameClass.png";
import AlexMaxwell from "@/assets/Teacher/AlexMaxwell.png"; 
import CristianDoruBarin from "@/assets/Teacher/CristianDoruBarin.png"; 
import JosePortilla from "@/assets/Teacher/JosePortilla.png"; 
import AlexSmith from "@/assets/Teacher/AlexSmith.png"; 
import BarinDaniel from "@/assets/Teacher/BarinDaniel.png"; 
import JonathanMask from "@/assets/Teacher/JonathanMask.png"; 
import FiveStars from "@/assets/Rate/FiveStars.png";
import FourStars from "@/assets/Rate/FourStars.png";

import { navigationLinks } from "@/App";
import { ClassItem } from "./ClassItem";
import { SectionHeader } from "@/shared/SectionHeader";
import { ClassesType } from "@/shared/Types";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from "react";

const classes: Array<ClassesType> = [
  {
    classImage: WebDesignClass,
    teacherImage: AlexMaxwell,
    teacherName: "Alex Maxwell",
    field: 'Web Design',
    course: "Web Design and Development Crash course 2022",
    duration: "16 hr 30 mins",
    description: "Best Seller",
    newPrice: "$120",
    oldPrice: "$180",
    rate: "5.0",
    stars: FiveStars,
  },
  {
    classImage: MachineLearnigClass,
    teacherImage: CristianDoruBarin,
    teacherName: "Cristian Doru",
    field: 'Machine',
    course: "Machine Learning, Data Science and Deep Learning ",
    duration: "20 hr 30 mins",
    description: "Best Seller",
    newPrice: "$150",
    oldPrice: "$200",
    rate: "5.0",
    stars: FiveStars,
  },
  {
    classImage: PytohnDataScienseClass,
    teacherImage: JosePortilla,
    teacherName: "Jose Portilla",
    field: 'Data Science',
    course: "Python for Data Science and Machine Learning Bootcamp",
    duration: "36 hr 30 mins",
    description: "Best Seller",
    newPrice: "$250",
    oldPrice: "$300",
    rate: "4.9",
    stars: FourStars,
  },
  {
    classImage: DataScienseClass,
    teacherImage: AlexSmith,
    teacherName: "Alex Smith",
    field: 'Data Science',
    course: "The Data Science Course 2021: Complete Data Science ",
    duration: "14 hr 30 mins",
    description: "Best Seller",
    newPrice: "$120",
    oldPrice: "$180",
    rate: "5.0",
    stars: FiveStars,
  },
  {
    classImage: MobileAppClass,
    teacherImage: JonathanMask,
    teacherName: "Jonathan Mask",
    field: 'Game',
    course: "The Ultimate Guide to Game Development with Unity 2022",
    duration: "36 hr 30 mins",
    newPrice: "$180",
    oldPrice: "$200",
    rate: "4.9",
    stars: FourStars,
  },
  {
    classImage: GameClass,
    teacherImage: BarinDaniel,
    teacherName: "Barin Daniel",
    field: 'Game Class',
    course: "Ultimate Adobe Photoshop Training: From Beginner to Pro",
    duration: "20 hr 30 mins",
    newPrice: "$150",
    oldPrice: "$200",
    rate: "5.0",
    stars: FiveStars,
  },
];

type Props = {
  setSelectedPage: (value: string) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  
  return (
    <section
      id={navigationLinks.ourClasses}
      className="bg-blue-100 w-full py-24"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(navigationLinks.ourClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5 mb-10">
            <SectionHeader>Most popular <span className="text-orange-500">courses</span></SectionHeader>
            <p className="my-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod facilisi. Amet semper
              tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus
              nunc.
            </p>
          </div>
        </motion.div>

        <div className="w-[95%] mx-auto relative">
        <div className="mx-auto w-5/6">
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1600: {
              slidesPerView: 4,
            },
          }}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>

          {classes.map((item: ClassesType, index) => (
            <SwiperSlide>{<ClassItem 
              key = {`${index}-${item.course}`}
              classImage={item.classImage}
            teacherImage={item.teacherImage}
            teacherName={item.teacherName}
            field={item.field}
            course={item.course}
            duration={item.duration}
            description={item.description}
            newPrice={item.newPrice}
            oldPrice={item.oldPrice}
            rate={item.rate}
            stars={item.stars}/>}</SwiperSlide>
          ))}
        </Swiper>
        </div>
        </div>
      </motion.div>
    </section>
  );
};

export { OurClasses };
