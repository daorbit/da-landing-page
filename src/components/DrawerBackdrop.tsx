import React from 'react';
import { motion } from 'framer-motion';

interface DrawerBackdropProps {
  isOpen: boolean;
  onClose: () => void;
}

const DrawerBackdrop: React.FC<DrawerBackdropProps> = ({ isOpen, onClose }) => {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: {
          opacity: 1,
          visibility: "visible",
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        },
        closed: {
          opacity: 0,
          visibility: "hidden",
          transition: {
            duration: 0.3,
            ease: "easeInOut",
          },
        },
      }}
      className="md:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[45]"
      onClick={onClose}
    />
  );
};

export default DrawerBackdrop;