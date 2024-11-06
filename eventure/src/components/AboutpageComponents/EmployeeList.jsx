import React, { useEffect, useState } from 'react';
import Employee from './Employee';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]); 

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/employees?populate=*'); 
        const data = await response.json();

        if (Array.isArray(data.data)) {
          const formattedEmployees = data.data.map(employee => {
            const { employeeName, employeeTitle, employeeAltText, employeeImage } = employee; 
            
            const imageSrc = employeeImage ? `http://localhost:1337${employeeImage.url}` : '';

            return {
              name: employeeName,
              title: employeeTitle,
              imageSrc: imageSrc,
              alt: employeeAltText, 
            };
          });

          setEmployees(formattedEmployees); 
        } else {
          console.error('Data structure is not as expected:', data);
        }
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []); 

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
