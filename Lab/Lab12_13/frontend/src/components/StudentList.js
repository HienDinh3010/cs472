import React, { useState, useEffect } from 'react';
import "../css/StudentList.css";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <div className='student-list-container'>
      <h2>All Students</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Program</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.program}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
