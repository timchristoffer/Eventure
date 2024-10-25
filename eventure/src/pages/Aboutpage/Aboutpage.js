import React, { useState } from 'react';
import './Aboutpage.css';
import JobApplicationForm from './JobApplicationForm';


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
      <h1 className="aboutUsHeader">About Eventure</h1>
      <h2>What is Eventure?</h2>
      <p>Eventure is an online service which allows people and organizations to organize, 
        publish, find and participate in different kinds off events from things like a casual game night at a local bar to much larger 
        and grander things like major sports events all on one easy to use page</p>
      <h2>How can Eventure help you?</h2>
      <p>Eventure helps you as an organizer off an event by heightening you visibility to those who may be interested in attenting 
        aswell as making it easy for you to publish your event within minutes without any difficulty that may usually appear during such 
        a process.
      </p>
      <p>
        As an individual, Eventure helps you find a mutlitude off different events that you may want to attend, maybe even showing you
        events for things that you have never even heard off but you would find interesting, all without having to look around on a 
        multitude of pages just to find something just right for you and your schedule
      </p>
      <div className="employee-container">
        <div className="employee">
          <img src="/placeholderEmployee.jpg" alt="Kalle, IT Manager at Eventure" />
          <p>Kalle</p>
          <p className="jobTitle">IT Manager</p>
        </div>
        <div className="employee">
          <img src="/placeholderEmployee.jpg" alt="Linus, Product Manager at Eventure" />
          <p>Linus</p>
          <p className="jobTitle">Product Manager</p>
        </div>
        <div className="employee">
          <img src="/placeholderEmployee.jpg" alt="Oliver, Quality Assurance at Eventure" />
          <p>Oliver</p>
          <p className="jobTitle">Quality Assurance</p>
        </div>
        <div className="employee">
          <img src="/placeholderEmployee.jpg" alt="Tim, Software Architect at Eventure" /> 
          <p>Tim</p>
          <p className="jobTitle">Software Architect</p>
        </div>
      </div>
      <h2>Contact us</h2>
      <p> <img className="contactSymbols" src="/PhoneContactImage.jpg"></img>+46 6-69-463-099</p>
      <img className="contactSymbols" src="/EmailContactImage.png"></img><a href="#" onClick={() => sendEmail('eventure.planning@gmail.com')}>eventure.planning@gmail.com</a>
      <p> <img className="contactSymbols" src="/LocationContactImage.jpg"></img>Kungsgatan 20, 582 18 Linköping</p>
     <p><img className="contactSymbols" src="/JoinTheTeamContactImage.jpg" alt="join the team" /><a href="#" onClick={openForm}>Join the team</a></p>
    
     {isFormOpen && <JobApplicationForm onClose={closeForm} />}
    </div>
  )
}

export default Aboutpage
