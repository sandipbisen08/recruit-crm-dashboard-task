import React from 'react';
import { Candidate } from '../data/candidate';
import BreadcrumbNav from './BreadcrumbNav';
import CandidateHeader from './CandidateHeader';
import DetailsGrid from './DetailsGrid';
import ContentTabs from './ContentTabs';
import AssignedJobs from './AssignedJobs';
import EditDetailsModal from './EditDetailsModal';
import '../styles/components/MainContent.scss';

interface MainContentProps {
  candidate: Candidate;
  updateCandidate: (details: Partial<Candidate>) => void;
}

const MainContent: React.FC<MainContentProps> = ({ candidate, updateCandidate }) => {
  const [isEditModalOpen, setEditModalOpen] = React.useState(false);

  const handleOpenEditModal = () => setEditModalOpen(true);
  const handleCloseEditModal = () => setEditModalOpen(false);

  const handleSaveDetails = (updatedDetails: Partial<Candidate>) => {
    updateCandidate(updatedDetails);
    handleCloseEditModal();
  };

  return (
    <main className="main-content">
      <BreadcrumbNav candidate={candidate} />
      <CandidateHeader candidate={candidate} onEdit={handleOpenEditModal} />
      <DetailsGrid candidate={candidate} />
      <ContentTabs />
      <AssignedJobs />

      {isEditModalOpen && (
        <EditDetailsModal 
          candidate={candidate} 
          onClose={handleCloseEditModal} 
          onSave={handleSaveDetails} 
        />
      )}
    </main>
  );
};

export default MainContent;
