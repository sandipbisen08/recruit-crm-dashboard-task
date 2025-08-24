import React from 'react';
import { mockNotes } from '../data/notes';
import '../styles/components/RightSidebar.scss';

interface RightSidebarProps {
  isOpen?: boolean;
  isMobile?: boolean;
  onClose?: () => void;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ isOpen = false, isMobile = false, onClose }) => {
  const tabs = ['All', 'Notes & Calls', 'Tasks', 'Meeting', 'Files'];
  const activeTab = 'All';

  return (
    <aside className={`sidebar-right ${isMobile && isOpen ? 'sidebar-open' : ''}`}>
      {/* Mobile close button */}
      {isMobile && (
        <button 
          className="mobile-close-btn" 
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <i className="bx bx-x"></i>
        </button>
      )}
      
      <div className="action-icons">
        <button className="action-icon-btn call"><i className="bx bx-phone"></i></button>
        <button className="action-icon-btn note"><i className="bx bx-note"></i></button>
        <button className="action-icon-btn meeting"><i className="bx bx-calendar"></i></button>
        <button className="action-icon-btn file"><i className="bx bx-file"></i></button>
      </div>
      <div className="sidebar-tabs">
        {tabs.map(tab => (
          <a href="#" key={tab} className={`sidebar-tab-link ${tab === activeTab ? 'active' : ''}`}>
            {tab}
          </a>
        ))}
      </div>
      <div className="notes-list">
        {mockNotes.map((note, index) => (
          <div className="note-card" key={index}>
            <div className="note-header">
              <i className="bx bx-note"></i>
              <span className="note-type">{note.type}</span>
              <span className="note-tag">{note.tag}</span>
            </div>
            <p className="note-content">{note.content}</p>
            <div className="note-footer">
              <div className="note-associations">
                <span className="associations-text-color">{note.associations.join(', ')}</span>
                <span><i className="bx bx-user"></i> {note.author}</span>
              </div>
              <span className="note-timestamp"><i className="bx bx-time"></i> {note.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default RightSidebar;
