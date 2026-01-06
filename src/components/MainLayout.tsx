import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import PopupWidget from '../../components/PopupWidget';
import "../index.css";

interface MainLayoutProps {
  children: React.ReactNode;
  scrollToSection: (id: string) => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, scrollToSection }) => {
  const location = useLocation();
  const showNavAndFooter = true;

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {showNavAndFooter && <Navbar onNavigate={scrollToSection} />}
      {showNavAndFooter && <PopupWidget />}
      {children}
      {showNavAndFooter && <Footer />}
    </div>
  );
};
