import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const textVariants = {
    initial: {
      x: 500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
      },
    },
  };

  const imgVariant = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.3,
      },
    },
  };

  return (
    <div
      className="introCont gap-5 flex flex-col items-center justify-center pt-10 lg:flex-row"
      id="introSection"
    >
      <motion.div
        className="lg:leftCont lg:w-[55%] leading-[5rem] flex flex-col lg:items-start items-center justify-center mx-auto"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.h3 className="text-md font-bold" variants={textVariants}>
          Hello,
        </motion.h3>
        <motion.h1 className="text-[4rem]" variants={textVariants}>
          I&apos;m <span className="text-linkYellow">Miskat</span>
        </motion.h1>
        <motion.h1
          className="lg:text-[4rem] text-3xl pt-3"
          variants={textVariants}
        >
          Web Developer
        </motion.h1>
        <motion.p
          className="pt-10 pb-[1.5rem] leading-8 text-center lg:text-left px-6 lg:px-0"
          variants={textVariants}
        >
          I&apos;m a skilled and passionate web developer with an experiece in
          creating visually appealing and user-friendly websites
        </motion.p>
      </motion.div>
      <motion.div
        className="rightCont"
        variants={imgVariant}
        initial="initial"
        animate="animate"
      >
        <img
          src="../../../assets/prof.jpg"
          alt=""
          className="rightContPng lg:h-[40rem] h-[30rem] rounded-2xl flex-shrink-0"
        />
      </motion.div>
    </div>
  );
};

export default Intro;
