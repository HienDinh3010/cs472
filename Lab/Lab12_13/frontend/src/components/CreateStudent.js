import React, { useState } from 'react';
import "../css/CreateStudent.css";

const CreateStudent = ({ addStudent }) => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [program, setProgram] = useState('')
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent form default submission behavior
    
        const newStudent = {
          id: id.trim(),
          name: name.trim(),
          program: program.trim(),
        };
    
        // Validate fields before making the API call
        if (!id || !name || !program) {
          setMessage('All fields are required');
          return;
        }

        let response;
    
        try {
            response = await fetch('http://localhost:3000/api/v1/students', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newStudent),
          });
    
          if (response.ok) {
            const data = await response.json();
            addStudent(data); // Call the addStudent function to update the student list
            setMessage('Student created successfully!');
            // Clear the form after successful submission
            setId('');
            setName('');
            setProgram('');
          } else {
            setMessage('Failed to create student. Try again.');
          }
        } catch (error) {
        //   console.error('Error creating student:', error);
        //   setMessage('Error occurred while creating student.');
            if (response.status === 400) {
                setMessage('Invalid input. Please check the fields.');
            } else if (response.status === 500) {
                setMessage('Server error. Please try again later.');
            } else {
                setMessage('Failed to create student. Try again.');
            }          
            }
      };
    
  return (
    <div className="create-student-container">
      <h1>Create a student</h1>
      {message && <p>{message}</p>}
      <form className="student-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">id:</label>
          <input
            type="text"
            id="id"
            placeholder="Enter student id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">name:</label>
          <input
            type="text"
            id="name"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="program">program:</label>
          <input
            type="text"
            id="program"
            placeholder="Enter student program"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
          />
        </div>

        <div className="form-buttons">
          <button type="reset" className="reset-btn">Reset</button>
          <button type="submit" className="register-btn">Register</button>
        </div>
      </form>
    </div>
  );
};

export default CreateStudent;
