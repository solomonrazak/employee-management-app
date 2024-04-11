import React, { useState, useContext } from 'react';
import { FaTimes } from "react-icons/fa";
import { DataContext } from '../DataContext';

const DisplayEmployer = () => {
  
 
  const {employees, setEmployees} = useContext(DataContext);

  // Function to handle editing of employee data
  const handleEdit = (id, field, value) => {
    const updatedEmployees = employees.map(employee => {
      if (employee.id === id) {
        return { ...employee, [field]: value };
      }
      return employee;
    });
    setEmployees(updatedEmployees);
  };

  // funtion to handle delete table
  function deleteTableRow(id) {
    console.log("Before deletion:", employees);
    const newTable = employees.filter(employee => employee.id !== id);
    console.log("After deletion:", newTable);
    setEmployees(newTable);
  }

  return (
    <div className='w-screen mt-10'>
        <div className="text-center font-bold text-[19px]">
            <h1>Employee List</h1>
        </div>
    <div className="flex justify-center mb-6 p-6">
      <table className="p-3">
        <thead>
          <tr className="border border-solid border-l-0 border-r-0 text-start">
            <th className="text-md px-6 py-3">Name</th>
            <th className="text-md px-6 py-3">Email</th>
            <th className="text-md px-6 py-3">Position</th>
            <th className="text-md px-6 py-3">Department</th>
            <th className="text-md px-6 py-3">Delete</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}  className="border border-solid border-l-0 border-r-0">
              <td className="px-6 py-2"><input type="text" value={employee.name} onChange={e => handleEdit(employee.id, 'name', e.target.value)} className="p-1"/></td>
              <td className="px-6 py-2"><input type="email" value={employee.email} onChange={e => handleEdit(employee.id, 'email', e.target.value)}  className="p-1"/></td>
              <td className="px-8 py-2 ml-8"><input type="text" value={employee.position} onChange={e => handleEdit(employee.id, 'position', e.target.value)} className="p-1"/></td>
              <td className="px-6 py-2 ml-[15px]"><input type="text" value={employee.department} onChange={e => handleEdit(employee.id, 'department', e.target.value)} className="p-1"/></td>
              <td className="px-6 py-2"><button onClick={() => deleteTableRow(employee.id)} className="text-red-600 ml-[11px]"><FaTimes /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default DisplayEmployer;