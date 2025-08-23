import React from 'react';
import { Candidate } from '../data/candidate';
import '../styles/components/DetailsGrid.scss';

interface DetailsGridProps {
  candidate: Candidate;
}

const DetailsGrid: React.FC<DetailsGridProps> = ({ candidate }) => {
  const details = [
    { label: 'Current Organization', value: candidate.currentOrganization },
    { label: 'Summary', value: candidate.summary },
    { label: 'Skills', value: Array.isArray(candidate.skills) ? candidate.skills.join(', ') : candidate.skills },
    { label: 'Current Employment Status', value: candidate.employmentStatus },
    { label: 'Available From', value: candidate.availableFrom },
    { label: 'Date of Birth', value: candidate.dob },
    { label: 'Current Salary', value: `$${candidate.currentSalary}` },
    { label: 'Relevant Experience', value: candidate.relevantExperience },
    { label: 'Notice Period', value: candidate.noticePeriod },
    { label: 'Salary Expectation', value: `$${candidate.salaryExpectation}` },
    { label: 'Full Address', value: candidate.fullAddress },
    { label: 'Status', value: candidate.status },
    { label: 'Resume', value: candidate.resume },
    { label: 'Salary Type', value: candidate.salaryType },
    { label: 'Total Experience', value: candidate.totalExperience },
    { label: 'Language Skills', value: candidate.languageSkills },
  ];

  return (
    <div className="details-grid">
      {details.map(detail => (
        <div className="detail-item" key={detail.label}>
          <span className="detail-label">{detail.label}</span>
          <span className="detail-value">{detail.value}</span>
        </div>
      ))}
    </div>
  );
};

export default DetailsGrid;
