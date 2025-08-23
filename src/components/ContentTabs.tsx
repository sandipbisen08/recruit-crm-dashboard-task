import React from 'react';
import '../styles/components/ContentTabs.scss';

const ContentTabs: React.FC = () => {
  const tabs = ['All Details', 'Assigned Jobs', 'Related Emails', 'Candidate Questions', 'Hotlists', 'Related Deals', 'Contact(s) Pitched'];
  const activeTab = 'Assigned Jobs';

  return (
    <nav className="content-tabs">
      {tabs.map(tab => (
        <a href="#" key={tab} className={`tab-link ${tab === activeTab ? 'active' : ''}`}>
          {tab}
        </a>
      ))}
    </nav>
  );
};

export default ContentTabs;
