import React from 'react';
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
  return (
    <div className="dashboard-container">
      {/* Left Sidebar */}
      <LeftSidebar />

      <div className="main-wrapper">
        {/* Header */}
        <Header candidate={candidate} />

        {/* Main Content & Right Sidebar */}
        <div className="content-area">
            <MainContent candidate={candidate} updateCandidate={updateCandidate} />
            <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
