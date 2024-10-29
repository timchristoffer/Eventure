import React from 'react';

const Employee = ({ name, title, imageSrc, altText }) => {
  return (
    <div className="employee">
      <img src={imageSrc} alt={altText} />
      <p>{name}</p>
      <p className="jobTitle">{title}</p>
    </div>
  );
};

export default Employee;
