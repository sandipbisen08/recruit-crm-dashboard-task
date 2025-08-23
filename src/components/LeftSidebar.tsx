import React from 'react';
import '../styles/components/LeftSidebar.scss';

const LeftSidebar: React.FC = () => {
  return (
    <aside className="sidebar-left">
      <div className="sidebar-icon"><i className="bx bx-grid-alt "></i></div>
      <div className="sidebar-icon active"><i className="bx bx-user-circle profile active"></i></div>
      <div className="sidebar-icon"><i className="bx bx-building"></i></div>
      <div className="sidebar-icon"><i className="bx bx-chat"></i></div>
      <div className="sidebar-icon"><i className="bx bx-briefcase"></i></div>
      <div className="sidebar-icon"><i className="bx bx-envelope"></i></div>
      <div className="sidebar-icon"><i className="bx bx-calendar"></i></div>
      <div className="sidebar-icon"><i className="bx bx-time"></i></div>
      <div className="sidebar-icon"><i className="bx bx-history"></i></div>
      <div className="sidebar-icon"><i className="bx bx-line-chart"></i></div>
      <div className="sidebar-icon"><i className="bx bx-slider"></i></div>
      <div className="sidebar-icon-bottom"><i className="bx bx-cog"></i></div>
    </aside>
  );
};

export default LeftSidebar;
