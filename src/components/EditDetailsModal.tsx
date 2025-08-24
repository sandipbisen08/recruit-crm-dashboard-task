import React, { useState, useEffect } from 'react';
import { Candidate } from '../data/candidate';
import '../styles/components/EditDetailsModal.scss';

interface EditDetailsModalProps {
  candidate: Candidate;
  onClose: () => void;
  onSave: (updatedDetails: Partial<Candidate>) => void;
}

const EditDetailsModal: React.FC<EditDetailsModalProps> = ({ candidate, onClose, onSave }) => {
  const [formData, setFormData] = useState<Partial<Candidate>>(candidate);
  const [activeTab, setActiveTab] = useState('personal');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDirty, setIsDirty] = useState(false);

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setIsDirty(true);
    
    // Handle skills array conversion
    if (name === 'skills') {
      setFormData(prev => ({ 
        ...prev, 
        [name]: value.split(',').map(skill => skill.trim()).filter(skill => skill.length > 0)
      }));
    } else if (name === 'currentSalary' || name === 'salaryExpectation') {
      setFormData(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Enhanced form validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Required fields validation
    if (!formData.name?.trim()) newErrors.name = 'Full name is required';
    if (!formData.email?.trim()) newErrors.email = 'Email address is required';
    if (!formData.phone?.trim()) newErrors.phone = 'Phone number is required';
    
    // Email format validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone format validation
    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Salary validation
    if (formData.currentSalary && formData.currentSalary < 0) {
      newErrors.currentSalary = 'Current salary cannot be negative';
    }
    
    if (formData.salaryExpectation && formData.salaryExpectation < 0) {
      newErrors.salaryExpectation = 'Salary expectation cannot be negative';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Focus on first error field
      const firstErrorField = Object.keys(errors)[0];
      const element = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
      element?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API call
      onSave(formData);
    } catch (error) {
      console.error('Error saving candidate:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      if (isDirty) {
        if (window.confirm('You have unsaved changes. Are you sure you want to close?')) {
          onClose();
        }
      } else {
        onClose();
      }
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isDirty) {
          if (window.confirm('You have unsaved changes. Are you sure you want to close?')) {
            onClose();
          }
        } else {
          onClose();
        }
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose, isDirty]);

  const tabs = [
    { id: 'personal', label: 'Personal Info', icon: 'bx-user' },
    { id: 'professional', label: 'Professional', icon: 'bx-briefcase' },
    { id: 'compensation', label: 'Compensation', icon: 'bx-dollar' },
    { id: 'additional', label: 'Additional', icon: 'bx-info-circle' }
  ];

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <form onSubmit={handleSubmit}>
          {/* Modal Header */}
          <div className="modal-header">
            <div className="header-content">
              <h2>Edit Candidate Profile</h2>
              <p className="candidate-id">ID: {candidate.id}</p>
              {isDirty && <span className="unsaved-indicator">• Unsaved changes</span>}
            </div>
            <button 
              type="button" 
              onClick={() => {
                if (isDirty) {
                  if (window.confirm('You have unsaved changes. Are you sure you want to close?')) {
                    onClose();
                  }
                } else {
                  onClose();
                }
              }} 
              className="close-button"
              aria-label="Close modal"
            >
              <i className="bx bx-x"></i>
            </button>
          </div>

          {/* Tab Navigation */}
          <div className="modal-tabs">
            {tabs.map(tab => (
              <button
                key={tab.id}
                type="button"
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <i className={`bx ${tab.icon}`}></i>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            {/* Personal Info Tab */}
            {activeTab === 'personal' && (
              <div className="tab-content">
                <div className="form-section">
                  <h3 className="section-title">
                    <i className="bx bx-user-circle"></i>
                    Basic Information
                  </h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name || ''} 
                        onChange={handleChange}
                        className={errors.name ? 'error' : ''}
                        placeholder="Enter full name"
                        required
                      />
                      {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>
                    
                    <div className="form-group">
                      <label>Job Title</label>
                      <input 
                        type="text" 
                        name="title" 
                        value={formData.title || ''} 
                        onChange={handleChange}
                        placeholder="e.g., Senior Software Engineer"
                      />
                    </div>

                    <div className="form-group">
                      <label>Email Address *</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email || ''} 
                        onChange={handleChange}
                        className={errors.email ? 'error' : ''}
                        placeholder="name@example.com"
                        required
                      />
                      {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        value={formData.phone || ''} 
                        onChange={handleChange}
                        className={errors.phone ? 'error' : ''}
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                      {errors.phone && <span className="error-message">{errors.phone}</span>}
                    </div>

                    <div className="form-group">
                      <label>Date of Birth</label>
                      <input 
                        type="date" 
                        name="dob" 
                        value={formData.dob || ''} 
                        onChange={handleChange} 
                      />
                    </div>

                    <div className="form-group">
                      <label>Current Location</label>
                      <input 
                        type="text" 
                        name="location" 
                        value={formData.location || ''} 
                        onChange={handleChange}
                        placeholder="City, State, Country"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="section-title">
                    <i className="bx bx-map"></i>
                    Address Information
                  </h3>
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label>Full Address</label>
                      <textarea 
                        name="fullAddress" 
                        value={formData.fullAddress || ''} 
                        onChange={handleChange}
                        rows={3}
                        placeholder="Street address, city, state, postal code, country"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Professional Tab */}
            {activeTab === 'professional' && (
              <div className="tab-content">
                <div className="form-section">
                  <h3 className="section-title">
                    <i className="bx bx-building"></i>
                    Current Employment
                  </h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Current Organization</label>
                      <input 
                        type="text" 
                        name="currentOrganization" 
                        value={formData.currentOrganization || ''} 
                        onChange={handleChange}
                        placeholder="Company name"
                      />
                    </div>

                    <div className="form-group">
                      <label>Employment Status</label>
                      <select 
                        name="employmentStatus" 
                        value={formData.employmentStatus || ''} 
                        onChange={handleChange}
                      >
                        <option value="">Select Status</option>
                        <option value="Employed">Currently Employed</option>
                        <option value="Unemployed">Unemployed</option>
                        <option value="Freelancer">Freelancer/Consultant</option>
                        <option value="Student">Student</option>
                        <option value="Contract">Contract Worker</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Total Experience</label>
                      <input 
                        type="text" 
                        name="totalExperience" 
                        value={formData.totalExperience || ''} 
                        onChange={handleChange}
                        placeholder="e.g., 5 Years 6 Months"
                      />
                    </div>

                    <div className="form-group">
                      <label>Relevant Experience</label>
                      <input 
                        type="text" 
                        name="relevantExperience" 
                        value={formData.relevantExperience || ''} 
                        onChange={handleChange}
                        placeholder="e.g., 3 Years 2 Months"
                      />
                    </div>

                    <div className="form-group">
                      <label>Notice Period</label>
                      <select 
                        name="noticePeriod" 
                        value={formData.noticePeriod || ''} 
                        onChange={handleChange}
                      >
                        <option value="">Select Period</option>
                        <option value="Immediate">Immediate Joiner</option>
                        <option value="15 Days">15 Days</option>
                        <option value="30 Days">30 Days</option>
                        <option value="45 Days">45 Days</option>
                        <option value="60 Days">60 Days</option>
                        <option value="90 Days">90 Days</option>
                        <option value="Serving Notice">Currently Serving Notice</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Available From</label>
                      <input 
                        type="date" 
                        name="availableFrom" 
                        value={formData.availableFrom || ''} 
                        onChange={handleChange} 
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="section-title">
                    <i className="bx bx-code-alt"></i>
                    Skills & Summary
                  </h3>
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label>Technical Skills</label>
                      <textarea 
                        name="skills" 
                        value={Array.isArray(formData.skills) ? formData.skills.join(', ') : formData.skills || ''} 
                        onChange={handleChange}
                        placeholder="JavaScript, React, Node.js, Python, AWS, Docker, etc."
                        rows={3}
                      />
                      <small className="field-hint">Separate skills with commas</small>
                    </div>

                    <div className="form-group full-width">
                      <label>Professional Summary</label>
                      <textarea 
                        name="summary" 
                        value={formData.summary || ''} 
                        onChange={handleChange}
                        rows={4}
                        placeholder="Brief overview of professional background, key achievements, and career objectives..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Compensation Tab */}
            {activeTab === 'compensation' && (
              <div className="tab-content">
                <div className="form-section">
                  <h3 className="section-title">
                    <i className="bx bx-money"></i>
                    Salary Information
                  </h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Current Salary</label>
                      <div className="input-with-prefix">
                        <span className="input-prefix">$</span>
                        <input 
                          type="number" 
                          name="currentSalary" 
                          value={formData.currentSalary || ''} 
                          onChange={handleChange}
                          placeholder="0"
                          min="0"
                          step="1000"
                          className={errors.currentSalary ? 'error' : ''}
                        />
                      </div>
                      {errors.currentSalary && <span className="error-message">{errors.currentSalary}</span>}
                    </div>

                    <div className="form-group">
                      <label>Salary Expectation</label>
                      <div className="input-with-prefix">
                        <span className="input-prefix">$</span>
                        <input 
                          type="number" 
                          name="salaryExpectation" 
                          value={formData.salaryExpectation || ''} 
                          onChange={handleChange}
                          placeholder="0"
                          min="0"
                          step="1000"
                          className={errors.salaryExpectation ? 'error' : ''}
                        />
                      </div>
                      {errors.salaryExpectation && <span className="error-message">{errors.salaryExpectation}</span>}
                    </div>

                    <div className="form-group">
                      <label>Salary Type</label>
                      <select 
                        name="salaryType" 
                        value={formData.salaryType || ''} 
                        onChange={handleChange}
                      >
                        <option value="">Select Type</option>
                        <option value="Annual">Annual (Per Year)</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Hourly">Hourly Rate</option>
                        <option value="Daily">Daily Rate</option>
                        <option value="Project">Project Based</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Additional Tab */}
            {activeTab === 'additional' && (
              <div className="tab-content">
                <div className="form-section">
                  <h3 className="section-title">
                    <i className="bx bx-user-check"></i>
                    Application Status
                  </h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Current Status</label>
                      <select 
                        name="status" 
                        value={formData.status || ''} 
                        onChange={handleChange}
                      >
                        <option value="">Select Status</option>
                        <option value="New">New Application</option>
                        <option value="In Review">Under Review</option>
                        <option value="Phone Screen">Phone Screening</option>
                        <option value="Technical Interview">Technical Interview</option>
                        <option value="Final Interview">Final Interview</option>
                        <option value="Reference Check">Reference Check</option>
                        <option value="Offer Extended">Offer Extended</option>
                        <option value="Hired">Hired</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Withdrawn">Withdrawn</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Resume/CV</label>
                      <input 
                        type="text" 
                        name="resume" 
                        value={formData.resume || ''} 
                        onChange={handleChange}
                        placeholder="Resume file name or document URL"
                      />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="section-title">
                    <i className="bx bx-globe"></i>
                    Additional Information
                  </h3>
                  <div className="form-grid">
                    <div className="form-group full-width">
                      <label>Language Skills</label>
                      <textarea 
                        name="languageSkills" 
                        value={formData.languageSkills || ''} 
                        onChange={handleChange}
                        placeholder="English (Native), Spanish (Fluent), French (Intermediate), etc."
                        rows={3}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <button 
              type="button" 
              onClick={() => {
                if (isDirty) {
                  if (window.confirm('You have unsaved changes. Are you sure you want to cancel?')) {
                    onClose();
                  }
                } else {
                  onClose();
                }
              }} 
              className="btn btn-secondary"
              disabled={isSubmitting}
            >
              <i className="bx bx-x"></i>
              Cancel
            </button>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting || !isDirty}
            >
              {isSubmitting ? (
                <>
                  <i className="bx bx-loader-alt bx-spin"></i>
                  Saving Changes...
                </>
              ) : (
                <>
                  <i className="bx bx-check"></i>
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditDetailsModal;
