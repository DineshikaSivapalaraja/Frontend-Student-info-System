import React, { useEffect, useState } from 'react';   
import './student1.css';
import { navigateToAddStudent } from './navigation';
import DeleteStudent from './deleteStudent';

export default function StudentDetails() {
    const [name, setName] = useState('');
    const [stu_id, setStu_ID] = useState('');
    const [degree, setDegree] = useState('');
    const [year, setYear] = useState('');
    const [students, setStudents] = useState([]);

    const handleClick = async (e) => {
        e.preventDefault();
        const student = { name, stu_id, degree, year };
    }

    const fetchStudents = () => {
        fetch("http://localhost:8080/Student/getAll")
            .then(res => res.json())
            .then(result => {
                setStudents(result);
            });
    }

    useEffect(() => {
        // Fetch students when the component mounts
        fetchStudents();
    }, []);

    return (
        <div className="container">
            <h1 className="title">Students</h1>
            <button id="nav-Btn" onClick={() => navigateToAddStudent()}>Add Student</button> 
            {/* <button id="deleteButton">Delete Student</button> */}
            <div className="student-container">
                {students.map(Student => (
                    <div className="student" key={Student.id}>
                        <p>Id: {Student.id}</p>
                        <p>Name: {Student.name}</p>
                        <p>Student ID: {Student.stu_id}</p>
                        <p>Degree: {Student.degree}</p>
                        <p>Year: {Student.year}</p>

                        {/* delete button added for each student container */}
                        {/* <button id="deleteButton">Delete Student</button> */}
                        <DeleteStudent studentId={Student.id}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

