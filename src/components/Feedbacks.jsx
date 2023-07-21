import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <img
          src={image}
          alt={`feedback_by-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My achievements</p>
          <h2 className={styles.sectionHeadText}>Certificates</h2>
        </motion.div>
        <div className="mt-10">
          <Slider {...settings}>
            <div className="p-3">
              <img src='https://s6.imgcdn.dev/xa13C.webp' alt="freecodecamp" />
            </div>
            <div className="p-3">
              <img src='https://s6.imgcdn.dev/xa7je.webp' alt="sololearnhtml" />
            </div>
            <div className="p-3">
              <img src='https://s6.imgcdn.dev/xaBT0.webp' alt="sololearnjs" />
            </div>
            <div className="p-3">
              <img src='https://s6.imgcdn.dev/xaa0S.webp' alt="awesomeday" />
            </div>
            <div className="p-3">
              <img src='https://s6.imgcdn.dev/xaGRM.webp' alt="udemywp" />
            </div>
            <div className="p-3">
              <img src='https://s6.imgcdn.dev/xaSJd.md.webp' alt="yrs" />
            </div>
            <div className="p-3">
              <img src='https://s6.imgcdn.dev/xaz4H.webp' alt="etherium course" />
            </div>
          </Slider>
        </div>
      </div>
      {/* <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
