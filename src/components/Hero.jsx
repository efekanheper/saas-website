import React from "react";
import { BRAND_LOGOS, HERO_CONTENT } from "../constants";
import heroImage from "../assets/hero2.png";
import { motion } from "framer-motion";

const logoAnimation = {
  hidden: { x: "-100%" },
  visible: {
    x: 0,
    transition: {
      duration: 15,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        <div className="mb-8 border-indigo-800 px-3 py-2 rounded-full text-xs">
          {HERO_CONTENT.badgeText}
        </div>
        <h1
          className="text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-gradient-to-t from-indigo-50
        via-indigo-300 to-indigo-700 bg-clip-text text-transparent"
        >
          {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
            <span key={index}>
              {text}
              <br />
            </span>
          ))}
        </h1>
        <p className="mt-6 text-neutral-400 max-w-xl">
          {HERO_CONTENT.subHeading}
        </p>

        <div className="py-10 w-full overflow-hidden">
          <p className="text-gray-400 text-center mb-8">
            {HERO_CONTENT.trustedByText}
          </p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={logoAnimation}
            className="flex w-full"
          >
            {[...Array(10).fill(BRAND_LOGOS).flat()].map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-24 md:h-32 lg:h-40 mx-2 opacity-50 flex-shrink-0"
              />
            ))}
          </motion.div>
        </div>

        <div className="mt-12">
          <img
            className="w-full h-auto rounded-s-3xl border border-neutral-800"
            src={heroImage}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
