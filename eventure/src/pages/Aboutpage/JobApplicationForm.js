import React, { useState } from 'react';
import './JobApplicationForm.css';

const JobApplicationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('position', formData.position);
    data.append('cv', file);


    //update later with correct endpoint and add code at endpoint
    await fetch('/api/send-application', {
      method: 'POST',
      body: data,
    });

    onClose();
  };

  return (
    <div className="JobApplicationForm">
      <div className="JobApplicationFormContainer">
        <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="ApplicationFormField">
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div className="ApplicationFormField">
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div className="ApplicationFormField">
          <label>Position:</label>
          <input type="text" name="position" onChange={handleChange} />
        </div>
        <div className="ApplicationFormField">
          <label>Attach CV:</label>
          <input type="file" name="cv" onChange={handleFileChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={onClose}>Close</button>
    </div>
  </div>
);
};

export default JobApplicationForm;
