import React, { useState, useEffect } from "react";
import CancelIcon from "./icons/Cancel";
import { easeInOut, motion } from "framer-motion";

const Toast = ({ messageType, setMessage, message }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(
    function () {
      if (message && message.length) {
        setIsOpen(true);
        // After 4 seconds, turn it back to false
        setTimeout(function () {
          setIsOpen(false);
          setMessage("");
        }, 4000);
      }
    },
    [setMessage, message, isOpen]
  );

  return (
    <div
      className={`${
        isOpen ? "visible" : "invisible"
      } duration-[.4s] p-4 w-full h-full bg-chocolateOpaque z-[100] fixed top-0 left-0 flex justify-end items-end`}
    >
      <motion.div
        initial={{ opacity: isOpen ? 0 : 1 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.5, ease: easeInOut }}
        className="p-6 w-[100%] sm:w-[50%] md:w-[25%] bg-cream border-sienna border-[1px]"
      >
        <div className="flex justify-between items-center text-sienna">
          <h5 className="uppercase font-light-semibol">{messageType}</h5>
          <CancelIcon
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </div>
        <p className="font-light text-sienna text-[15px] mt-4">{message}</p>
      </motion.div>
    </div>
  );
};

export default Toast;
