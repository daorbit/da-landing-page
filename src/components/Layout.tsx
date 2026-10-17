import React from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex min-h-screen flex-col bg-surface text-fg">
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
    >
      Skip to content
    </a>
    <Header />
    <main id="main" className="relative flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
