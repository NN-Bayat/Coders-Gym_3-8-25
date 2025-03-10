import React from "react";
import { FaPlay } from "react-icons/fa";
import HeroImg from "../../assets/dumbell.png";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft } from "../../utility/animation";

const Hero = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
          {/* Brand Info */}
          <div className="flex flex-col justify-center py-14 md:py-0 font-playfair">
            <div className="text-center md:text-left space-y-6">
              <motion.h1
                variants={SlideRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-normal"
              >
                Gym Gives you the perfect{" "}
                <span className="text-primary">Health</span>
              </motion.h1>
              <motion.p
                variants={SlideRight(1.2)}
                initial="hidden"
                animate="visible"
                className="text-gray-600 text-lg font-extralight xl:max-w-[500px]"
              >
                It is a long established fact that a reader will be by readable
                content of a page when are the best product.
              </motion.p>

              {/* button section */}
              <motion.div
                variants={SlideRight(1.5)}
                initial="hidden"
                animate="visible"
                className="flex justify-center items-center gap-8 md:justify-start !mt-9"
              >
                <button className="primary-btn flex items-center gap-2">
                  Order Now
                </button>
                <button className="flex justify-center gap-2 items-center">
                  <FaPlay /> Watch Now
                </button>
              </motion.div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center items-center">
            <motion.img
              variants={{
                hidden: { opacity: 0, x: "100%", rotate: 100 },
                visible: { opacity: 1, x: 0, rotate: 0 },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={HeroImg}
              className="w-[350px] md:w-[550px] xl:w-[700px] drop-shadow"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
