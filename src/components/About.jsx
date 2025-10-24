import React, { useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profileImage from "../assets/NewProfile.png"; // Update with your image path

const ServiceCard = ({ index, title, icon }) => {
  const tiltRef = useRef(null);

  return (
    <Tilt ref={tiltRef} className="lg:min-w-[250px] min-w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] text-center font-bold">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      {/* Overview Section with Profile Image */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mt-4">
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          <p>
          Hi, I'm Audrey!

          I'm a UI/UX Designer from Bugasong, Antique, passionate about crafting intuitive, user-centered digital experiences. 
          Currently, I'm also a second-year BSIT student at Western Institute of Technology, 
          where I’m expanding my technical skills to complement my design expertise.

          I love exploring and trying new things, which fuels my creativity in design. My approach blends research, functionality,
           and aesthetics to create interfaces that are not only visually appealing but also accessible and easy to use. 
           With a keen eye for detail and a problem-solving mindset, I enjoy turning complex ideas into seamless, user-friendly interactions.

          Always eager to learn, I thrive on challenges that push me to grow—whether in design, coding, or discovering new perspectives. 
          Let’s connect and create meaningful digital experiences together!
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] shrink-0"
        >
          <Tilt
            tiltReverse
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            className="h-full w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div className="bg-tertiary rounded-[20px] h-full w-full overflow-hidden flex items-center justify-center">
              <img
                src={profileImage}
                alt="Audrey UI/UX Designer"
                className="w-full h-full object-cover"
              />
            </div>
          </Tilt>
        </motion.div>
      </div>

      {/* Services Cards */}
      <div className="mt-20 flex flex-col lg:flex-row gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");