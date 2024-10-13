import { motion } from "framer-motion";
import React from "react";
import { PLANS_CONTENT } from "../constants";

const Pricing = () => {
  const childVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="pricing">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12 border-t border-indigo-800"
        >
          <h2
            className="text-3xl lg:text-5xl mt-20 tracking-tighter
                bg-gradient-to-t from-indigo-50 via-indigo-300
                to-indigo-600 bg-clip-text text-transparent"
            style={{ lineHeight: "1.2" }}
          >
            {PLANS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4 text-neutral-400 max-w-lg mx-auto">
            {PLANS_CONTENT.sectionDescription}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.5,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PLANS_CONTENT.plans.map((plan, index) => (
            <motion.div
              custom={index}
              variants={childVariants}
              key={index}
              className={`p-8 rounded-xl shadow-lg bg-neutral-950 
              ${
                plan.popular
                  ? "border-2 border-indigo-600"
                  : "border border-neutral-800"
              } 
              flex flex-col justify-between`}
            >
              {plan.popular && (
                <div className="mb-4 text-center">
                  <span className="bg-indigo-600 text-white text-xs py-1 px-3 rounded-full uppercase">
                    {PLANS_CONTENT.popularBadge}
                  </span>
                </div>
              )}
              <h3 className="text-lg lg:text-xl mb-4 tracking-tighter uppercase text-white">
                {plan.name}
              </h3>
              <p className="text-neutral-400 mb-6">{plan.description}</p>
              <div className="text-3xl font-bold text-white mb-6">
                {plan.price}
              </div>
              <ul className="mb-8 space-y-2 text-neutral-400">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="w-full py-3 px-4 bg-indigo-600
                hover:bg-indigo-500 rounded-lg text-white font-semibold"
              >
                {PLANS_CONTENT.ctaText}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
