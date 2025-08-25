import React from 'react';
import { Candidate } from '../data/candidate';
import '../styles/components/CandidateHeader.scss';

interface CandidateHeaderProps {
  candidate: Candidate;
  onEdit: () => void;
}

const CandidateHeader: React.FC<CandidateHeaderProps> = ({ candidate, onEdit }) => {
  return (
    <div className="candidate-header">
      <div className="candidate-info">
        <div className="candidate-avatar">
          <img src="https://randomuser.me/api/portraits/men/60.jpg" alt={candidate.name} />
        </div>
        <div className="candidate-name-title">
          <div className="name-with-badges">
            <h2>{candidate.name} <span className="candidate-id">{candidate.id}</span></h2>
            <div className="social-icons">
              
              <i className="bx bxl-facebook-circle"></i>
              <i className="bx bxl-twitter"></i>
              <i className="bx bxl-linkedin-square"></i>
              <i className="bx bxl-github"></i>
              <i className="bx bx-globe"></i>
            </div>
          </div>
          <p>{candidate.title} • {candidate.location}</p>
        </div>
      </div>
      <div className="candidate-actions">
        <button className="btn btn-danger">Contact Linked</button>
        <button className="icon-btn"><i className="bx bx-star"></i></button>
        <button className="icon-btn"><i className="bx bx-download"></i></button>
        <button className="icon-btn" onClick={onEdit}><i className="bx bx-pencil"></i></button>
        <button className="icon-btn"><i className="bx bx-dots-vertical-rounded"></i></button>
      </div>
      <div className="candidate-contact">
        <p><i className="bx bx-envelope"></i><span>{candidate.email}</span> </p>
        <p><i className="bx bx-phone"></i> <span>{candidate.phone}</span> </p>
        <p><i className="bx bx-user"></i> Phyllis Yang <i className="bx bx-time"></i> {candidate.lastUpdated}</p>
      </div>
    </div>
  );
};

export default CandidateHeader;
