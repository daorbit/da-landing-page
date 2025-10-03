import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ label: string; id: string }>;
  onNavigate: (sectionId: string) => void;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  navItems,
  onNavigate,
}) => {
  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      variants={{
        open: {
          x: 0,
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
          },
        },
        closed: {
          x: "100%",
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
          },
        },
      }}
      className="md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 overflow-y-auto"
    >
      {/* Drawer Header */}
      <div className="flex items-center justify-between p-4 pt-6">
        <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
        <button
          onClick={onClose}
          className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Drawer Navigation Items */}
      <div className="px-4 py-2">
        {navItems.map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: isOpen ? 1 : 0,
              x: isOpen ? 0 : 20,
            }}
            transition={{
              delay: index * 0.05,
              duration: 0.2,
            }}
            onClick={() => onNavigate(item.id)}
            className="block w-full text-left py-3 px-2 text-gray-700 font-medium hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors duration-200 cursor-pointer"
          >
            {item.label}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileDrawer;