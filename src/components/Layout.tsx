import React, { useState, useEffect } from 'react';
import { Candidate } from '../data/candidate';
import '../styles/components/Layout.scss';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';
import LeftSidebar from './LeftSidebar';
import Header from './Header';

interface LayoutProps {
  candidate: Candidate;
  updateCandidate: (details: Partial<Candidate>) => void;
}

const Layout: React.FC<LayoutProps> = ({ candidate, updateCandidate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.sidebar-left') && !target.closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Mobile Hamburger Menu */}
      {isMobile && (
        <button 
          className="mobile-menu-toggle" 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <i className={isMobileMenuOpen ? 'bx bx-x' : 'bx bx-menu'}></i>
        </button>
      )}

      {/* Left Sidebar */}
      <LeftSidebar 
        isVisible={isMobile ? isMobileMenuOpen : true}
        isMobile={isMobile}
      />

      <div className={`main-wrapper ${isMobile && !isMobileMenuOpen ? 'sidebar-hidden' : ''}`}>
        {/* Header */}
        <Header candidate={candidate} />

        {/* Main Content & Right Sidebar */}
        <div className="content-area">
            <MainContent candidate={candidate} updateCandidate={updateCandidate} />
            <RightSidebar 
              isOpen={isRightSidebarOpen}
              isMobile={isMobile}
              onClose={() => setIsRightSidebarOpen(false)}
            />
        </div>
      </div>

      {/* Mobile Right Sidebar Toggle */}
      {isMobile && (
        <button 
          className="sidebar-right-toggle" 
          onClick={toggleRightSidebar}
          aria-label="Toggle notes sidebar"
        >
          <i className="bx bx-note"></i>
        </button>
      )}

      {/* Mobile Right Sidebar Backdrop */}
      {isMobile && (
        <div 
          className={`sidebar-backdrop ${isRightSidebarOpen ? 'active' : ''}`}
          onClick={() => setIsRightSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;
