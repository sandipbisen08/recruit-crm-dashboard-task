import React from 'react';
import { Candidate } from '../data/candidate';
import '../styles/components/Header.scss';

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
            <i className="bx bx-grid-alt"></i>
            <span>recruit crm</span>
          </div>
        </div>
        
        <div className="header-right">
          <div className="icon-buttons">
            <button className="icon-btn"><i className="bx bx-plus plus-icon"></i></button>
            <button className="icon-btn"><i className="bx bx-gift"></i></button>
            <button className="icon-btn"><i className="bx bx-envelope"></i></button>
            <button className="icon-btn"><i className="bx bx-bell"></i></button>
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
