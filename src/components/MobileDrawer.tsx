import React from 'react';
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
    <div
      style={{
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
      className="md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white bg-opacity-90 shadow-2xl z-50 overflow-y-auto"
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
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className="block w-full text-left py-3 px-2 text-gray-700 font-medium hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors duration-200 cursor-pointer"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileDrawer;