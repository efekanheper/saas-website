import React from "react";
import { ABOUT_CONTENT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="about">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 border-t border-neutral-800"
        >
          <h2
            className="text-3xl lg:text-5xl mt-20 tracking-tighter
              bg-gradient-to-t from-indigo-50 via-indigo-300 to-indigo-600 bg-clip-text
              text-transparent"
          >
            {ABOUT_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4 text-indigo-50 max-w-xl mx-auto">
            {ABOUT_CONTENT.sectionDescription}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {ABOUT_CONTENT.steps.map((step, index) => (
            <motion.div
              custom={index}
              variants={stepVariants}
              key={index}
              className="bg-neutral-900 p-6 rounded-xl shadow-lg flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-neutral-400 mb-4 text-center">
                  {step.description}
                </p>
              </div>

              <div className="flex justify-center mb-4">
                <img
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  className="rounded-lg max-w-full h-auto"
                />
              </div>

              {step.users && (
                <div className="flex justify-between items-center mt-4"></div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
