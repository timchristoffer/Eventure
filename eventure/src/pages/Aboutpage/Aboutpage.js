import React from 'react';
import '../../components/AboutpageComponents/Aboutpage.css';
import AboutUsHeader from '../../components/AboutpageComponents/AboutUsHeader';
import ContactUs from '../../components/AboutpageComponents/ContactForm';
import EmployeeList from '../../components/AboutpageComponents/EmployeeList';

const Aboutpage = () => (
  <div className="aboutUsPage">
    <div className="aboutUsPageContentContainer">
      <AboutUsHeader />
      <div className="formContainer">
        <ContactUs />
      </div>
      <EmployeeList />
    </div>
  </div>
);

export default Aboutpage;
