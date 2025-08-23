import React from 'react';
import { Candidate } from '../data/candidate';
import '../styles/components/EditDetailsModal.scss';

interface EditDetailsModalProps {
  candidate: Candidate;
  onClose: () => void;
  onSave: (updatedDetails: Partial<Candidate>) => void;
}

const EditDetailsModal: React.FC<EditDetailsModalProps> = ({ candidate, onClose, onSave }) => {
  const [formData, setFormData] = React.useState<Partial<Candidate>>(candidate);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          <div className="modal-header">
            <h2>Edit Candidate Details</h2>
            <button type="button" onClick={onClose} className="close-button">&times;</button>
          </div>
          <div className="modal-body">
            <div className="form-grid">
              <div className="form-group">
                <label>Current Organization</label>
                <input type="text" name="currentOrganization" value={formData.currentOrganization || ''} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Skills</label>
                <input type="text" name="skills" value={Array.isArray(formData.skills) ? formData.skills.join(', ') : formData.skills || ''} onChange={handleChange} />
              </div>
              <div className="form-group full-width">
                <label>Summary</label>
                <textarea name="summary" value={formData.summary || ''} onChange={handleChange}></textarea>
              </div>
               <div className="form-group">
                <label>Relevant Experience</label>
                <input type="text" name="relevantExperience" value={formData.relevantExperience || ''} onChange={handleChange} />
              </div>
               <div className="form-group">
                <label>Total Experience</label>
                <input type="text" name="totalExperience" value={formData.totalExperience || ''} onChange={handleChange} />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" onClick={onClose} className="btn btn-secondary">Cancel</button>
            <button type="submit" className="btn">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDetailsModal;
