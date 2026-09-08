import React from 'react';
import { X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ label: string; id?: string; href?: string }>;
  onNavigate: (item: { label: string; id?: string; href?: string }) => void;
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
      className="md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-surface border-l border-border shadow-2xl z-50 overflow-y-auto"
    >
      {/* Drawer Header */}
      <div className="flex items-center justify-between p-4 pt-6 border-b border-border">
        <h2 className="text-lg font-semibold text-fg">Menu</h2>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-fg-subtle hover:text-accent hover:border-accent-border transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Drawer Navigation Items */}
      <div className="px-4 py-4">
        {navItems.map((item, index) => (
          <button
            key={item.href || item.id || index}
            onClick={() => onNavigate(item)}
            className="block w-full text-left py-3 px-3 text-fg-muted font-medium hover:text-accent hover:bg-surface-subtle rounded-lg transition-colors duration-200 cursor-pointer"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileDrawer;