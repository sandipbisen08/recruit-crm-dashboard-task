import React from 'react';
import { Candidate } from '../data/candidate';
import '../styles/components/BreadcrumbNav.scss';

interface BreadcrumbNavProps {
  candidate: Candidate;
}

const BreadcrumbNav: React.FC<BreadcrumbNavProps> = ({ candidate }) => {
  return (
    <div className="breadcrumb-nav">
      <nav className="breadcrumbs">
        <a href="#" className="breadcrumb-link">Candidates</a> 
        <span className="breadcrumb-separator">&gt;</span> 
        {/* <span className="breadcrumb-current">{candidate.name}</span>  */}
        <span className="breadcrumb-current">William Hardy</span> 
        <span className="candidate-id">{candidate.id}</span>
      </nav>
      
      <div className="action-buttons">
        <button className="btn">Request Profile Update</button>
        <button className="btn btn-secondary">Previous</button>
        <button className="btn btn-secondary">Next</button>
      </div>
    </div>
  );
};

export default BreadcrumbNav;
