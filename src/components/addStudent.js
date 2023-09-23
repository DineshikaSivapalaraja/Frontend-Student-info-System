import React, { useEffect, useState } from 'react';   
import './student1.css';
import { navigateToStudentDetails } from './navigation';

export default function AddStudent() {
    const [name, setName] = useState('');
    const [stu_id, setStu_ID] = useState('');
    const [degree, setDegree] = useState('');
    const [year, setYear] = useState('');
    const [students, setStudents] = useState([]);

    const handleClick = async (e) => {
        e.preventDefault();

        const student = { name, stu_id, degree, year };

        try {
            const response = await fetch("http://localhost:8080/Student/add", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(student)
            });

            if (response.ok) {
                console.log("New Student added");
            } else {
                console.error("Failed to add student");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

    return (
        <div className="container">
            {/* <button id="nav-btn" onClick={() => navigateToStudentDetails()}>Go to Student Details</button>  */}
            <div className="paper">
                <h1 className="title">Add Student</h1>
                <form className="form" >    
                    <input
                        className="input"
                        type="text"
                        placeholder="Student Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        className="input"
                        type="text"
                        placeholder="Student ID"
                        value={stu_id}
                        onChange={(e) => setStu_ID(e.target.value)}
                    />
                    <input
                        className="input"
                        type="text"
                        placeholder="Degree"
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}
                    />
                    <input
                        className="input"
                        type="number"
                        placeholder="Year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                    <button className="button" type="submit" onClick={handleClick}>Submit</button>

      {/* Add student form here */}
      {/* <button onClick={() => navigateToStudentDetails()}>Go to Student Details</button> */}
                </form>
            </div> 
            <button id="nav-Btn" onClick={() => navigateToStudentDetails()}>Student Details</button> 
        </div>
    );

}
