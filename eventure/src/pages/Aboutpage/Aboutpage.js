import React, { useState } from 'react';
import './Aboutpage.css';
import ContactForm from './ContactForm';

const Aboutpage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = (e) => {
    e.preventDefault();
    setIsFormOpen(true);
    document.body.classList.add('no-scroll');
  };

  const closeForm = () => {
    setIsFormOpen(false);
    document.body.classList.remove('no-scroll');
  };

  const sendEmail = (emailAddress) => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className="aboutUsPage">
      <div className="aboutUsPageContentContainer">
        <div className="aboutUsLeftContent column">
          <h1 className="aboutUsHeader">About Eventure</h1>
          <h2>What is Eventure?</h2>
          <p>
            Eventure is an online service which allows people and organizations to organize,
            publish, find, and participate in different kinds of events from casual game nights at a local bar to large sports events, all on one easy-to-use page.
          </p>
          <h2>How can Eventure help you?</h2>
          <p>
            Eventure helps you as an organizer by increasing visibility to potential attendees and simplifying the publishing process.
          </p>
          <p>
            As an individual, Eventure helps you find various events that may interest you without having to search across multiple pages.
          </p>
        </div>

        <div className="formContainer">
        <div className="aboutUsRightContent">
          <h2>Contact Us</h2>
          <ContactForm />
        </div>
        </div>

        
        <div className="aboutUsEmployeeContainer">
          <div className="employee">
            <img src="/employeeAvatar1.png" alt="Kalle, IT Manager at Eventure" />
            <p>Maria</p>
            <p className="jobTitle">IT Manager</p>
          </div>
          <div className="employee">
            <img src="/employeeAvatar2.png" alt="Linus, Product Manager at Eventure" />
            <p>Helen</p>
            <p className="jobTitle">Product Manager</p>
          </div>
          <div className="employee">
            <img src="/employeeAvatar3.png" alt="Oliver, Quality Assurance at Eventure" />
            <p>Lucas</p>
            <p className="jobTitle">Quality Assurance</p>
          </div>
          <div className="employee">
            <img src="/employeeAvatar4.png" alt="Tim, Software Architect at Eventure" />
            <p>Tommy</p>
            <p className="jobTitle">Software Architect</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
