import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from './Layout/Header'
import Footer from './Layout/Footer'
import MobileDrawer from './MobileDrawer'
import DrawerBackdrop from './DrawerBackdrop'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleNavigation = (item: { label: string; id?: string; href?: string }) => {
    if (item.id) {
      scrollToSection(item.id);
    }
    // For href items, Link component in drawer handles navigation
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Features", id: "features" },
    { label: "About", id: "about" },
    { label: "Blog", href: "/blogs" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main className="flex-1 relative">
        {children}
      </main>

      <Footer />

      {/* Mobile Drawer Components */}
      <MobileDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
        onNavigate={handleNavigation}
      />
    </div>
  )
}

export default Layout