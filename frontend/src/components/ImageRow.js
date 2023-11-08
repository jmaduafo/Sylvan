import React from "react";
import { motion, easeInOut } from "framer-motion";

const ImageRow = ({ images, hoveredImage, setHoveredImage, setHovered }) => {
  return (
    <div className="overflow-x-auto imageRow">
      <div className="w-[fit-content] flex gap-1">
        {images.map((image) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: easeInOut }}
              key={image}
              className="w-[100px] h-[120px] object-cover object-bottom bg-slate-500"
            >
              <img
                className="w-full h-full"
                onMouseEnter={() => {
                  setHoveredImage(image);
                  setHovered(true);
                }}
                src={image}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageRow;
