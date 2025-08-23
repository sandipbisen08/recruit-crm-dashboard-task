import React from 'react';
import { mockJobs } from '../data/jobs';
import '../styles/components/AssignedJobs.scss';

const AssignedJobs: React.FC = () => {
  return (
    <div className="assigned-jobs-container">
      <div className="jobs-header">
        <h4>Assigned Job to William Sample</h4>
        <div className="jobs-actions">
          <button className="btn">Assign To Job</button>
          <button className="btn btn-secondary">View All Assigned Jobs</button>
        </div>
      </div>
      <ul className="jobs-list">
        {mockJobs.map((job, index) => (
          <li key={index} className="job-item">
            <div className="job-info">
                <div className="job-icon">M</div>
                <div className="job-title-company">
                    <p className="job-title">{job.title}</p>
                    <p className="job-company">{job.company}</p>
                </div>
            </div>
            <div className="job-assignee">
                <p><i className="bx bx-user"></i> {job.assignee}</p>
                <p><i className="bx bx-time"></i> {job.date}</p>
            </div>
            <div className="job-status">{job.status}</div>
            <div className="job-actions">
                <button className="btn btn-secondary">View Files</button>
                <label className="switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssignedJobs;
