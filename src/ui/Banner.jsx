import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const Banner = () => {
  const stringsArray = [
    "Expert in Cross-Platform Development | Flutter | Android SDK",
    "Skilled in Web Applications | React | Angular",
    "Proficient in Backend Dvelopment | Node.js | PHP",
    "Experienced in Cloud Solutions | AWS | Firebase",
    "UI/UX Design | Figma",
  ];
  return (
    <Container
      id="home"
      className="py-10 md:py-24 flex flex-col gap-4 lg:gap-8 md:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-3xl lg:text-5xl font-semibold tracking-wide text-designColor"
      >
        Hello, I'm
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lg:text-6xl font-bold flex flex-col"
      >
        Srinee Vasan.
        <span className="text-darkText font-semibold mt-2 lg:mt-4">
          <Typewriter
            options={{
              strings: stringsArray,
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="md:max-w-[650px] text-darkText font-medium leading-7"
      >
        <span className="text-3xl text-white font-semibold">Glad to e-meet you!</span><br /><br />
        I am a <span className="text-white font-semibold">software developer</span> dedicated to transforming ideas into <span className="text-white font-semibold">elegant digital experiences</span>. My expertise lies in delivering <span className="text-white font-semibold">high-quality solutions</span> through innovative features and precise debugging. I am committed to creating impactful, well-crafted applications that enhance the web.
        <a href="https://linkedin.com/in/srineevasan" target="_blank" rel="noopener noreferrer" className="text-designColor inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
          <span>Learn more</span>
          <span className="absolute w-full h-[1px] bg-designColor left-0 bottom-0 -translate-x-[110%] transition-transform group-hover:translate-x-0 duration-500" />
        </a>
      </motion.p>
      <motion.a
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        href="https://github.com/ItsSrinee"
        target="_blank"
        className="w-52 h-14 text-sm border border-designColor rounded-md text-designColor tracking-wide font-semibold hover:bg-hoverColor duration-300 flex items-center justify-center"
      >
        Check out my projects!
      </motion.a>
    </Container>
  );
};

export default Banner;

