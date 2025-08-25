import React from 'react';
import { Candidate } from '../data/candidate';
import '../styles/components/Header.scss';
import logo from "../image/logo.png";
interface HeaderProps {
  candidate: Candidate;
}

const Header: React.FC<HeaderProps> = ({ candidate }) => {
  return (
    <header className="header">
      <div className="header-main">
        <div className="header-left">
          <div className="search-container">
            <i className="bx bx-search"></i>
            <input type="text" placeholder="Search Pipedrive" className="search-input" />
          </div>
        </div>
        
        <div className="header-center">
          <div className="logo">
          <img src={logo} alt="Recruit CRM Logo" />
            {/* <i className="bx bx-grid-alt"></i> */}
            <span>recruit crm</span>
          </div>
        </div>
        
        <div className="header-right">
          <div className="icon-buttons">
            <button className="icon-btn"><i className="bx bx-plus plus-icon"></i></button>
            <button className="icon-btn"><i className="bx bx-gift round-border"></i></button>
            <button className="icon-btn"><i className="bx bx-envelope round-border"></i></button>
            <button className="icon-btn"><i className="bx bx-bell round-border"></i></button>
          </div>
          
          <div className="user-profile">
            <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Phyllis Yang" />
            <div className="user-info">
              <span>Phyllis Yang</span>
              <span>Silicon Links Inc</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
