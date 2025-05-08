import React from "react";
import { motion } from "framer-motion";
import homeMain from "../../Assets/myLogo2.svg";

const Photo = ({ imageSrc = homeMain }) => {
  return (
    <div className="w-full h-full"> {/*parent Container*/}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] relative"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-full h-full absolute"
        >
          <img
            src={imageSrc}
            alt="Main Visual"
            className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] absolute"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;