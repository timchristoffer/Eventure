import React from 'react';
import Employee from './Employee';

const EmployeeList = () => {
  const employees = [
    { name: 'Maria', title: 'IT Manager', imageSrc: '/employeeAvatar1.png', alt: 'Kalle, IT Manager at Eventure' },
    { name: 'Helen', title: 'Product Manager', imageSrc: '/employeeAvatar2.png', alt: 'Linus, Product Manager at Eventure' },
    { name: 'Lucas', title: 'Quality Assurance', imageSrc: '/employeeAvatar3.png', alt: 'Oliver, Quality Assurance at Eventure' },
    { name: 'Tommy', title: 'Software Architect', imageSrc: '/employeeAvatar4.png', alt: 'Tim, Software Architect at Eventure' },
  ];

  return (
    <div className="aboutUsEmployeeContainer">
      {employees.map((employee, index) => (
        <Employee 
          key={index}
          name={employee.name}
          title={employee.title}
          imageSrc={employee.imageSrc}
          altText={employee.alt}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
