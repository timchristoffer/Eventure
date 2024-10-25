import React, { useState } from 'react';
import './JobApplicationForm.css';

const JobApplicationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
  });
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.position) {
      setError('Please fill in all fields.');
      return;
    }

    if (!file) {
      setError('Please attach your CV.');
      return;
    }

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('position', formData.position);
    data.append('cv', file);

    try {
      // Update later with the correct endpoint
      await fetch('/api/send-application', {
        method: 'POST',
        body: data,
      });
      setFormData({ name: '', email: '', position: '' });
      setFile(null);
      setError('');     
      onClose();
    } catch (error) {
      setError('An error occurred while submitting the form. Please try again.');
    }
  };

  return (
    <div className="JobApplicationForm">
      <div className="JobApplicationFormContainer">
        <h2>Job Application Form</h2>
        {error && <div className="error-message">{error}</div>} 
        <form onSubmit={handleSubmit}>
          <div className="ApplicationFormField">
            <label>Name:</label>
            <input type="text" name="name" onChange={handleChange} value={formData.name} />
          </div>
          <div className="ApplicationFormField">
            <label>Email:</label>
            <input type="email" name="email" onChange={handleChange} value={formData.email} />
          </div>
          <div className="ApplicationFormField">
            <label>Position:</label>
            <input type="text" name="position" onChange={handleChange} value={formData.position} />
          </div>
          <div className="ApplicationFormField">
            <label>Attach CV:</label>
            <input type="file" name="cv" onChange={handleFileChange} />
          </div>
          <button className="JobApplicationSubmitButton" type="submit">Submit</button>
        </form>
        <button className="JobApplicationCloseButton" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default JobApplicationForm;
