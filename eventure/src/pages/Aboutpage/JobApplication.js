import React, { useState } from 'react';
import JobApplicationForm from './JobApplicationForm';
import './JobApplication.css';


const JobApplication = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const handleClick = () => {
        setIsFormOpen(true);
    };

    const handleClose = () => {
        setIsFormOpen(false);
    };

    return (
        <div>
            <p className="JoinTheTeamOnClick" onClick={handleClick}>
                Apply for a Job
            </p>
            {isFormOpen && <JobApplicationForm onClose={handleClose} />}
        </div>
    );
};

export default JobApplication;
