import React, { useEffect, useState } from 'react';   
import './Student.css';

export default function Student() {
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
                </form>
            </div>

            <h1 className="title">Students</h1>
                {students.map(Student => (
                    <div className="student" key={Student.id}>
                        <p>Id: {Student.id}</p>
                        <p>Name: {Student.name}</p>
                        <p>Student ID: {Student.stuId}</p>
                        <p>Degree: {Student.degree}</p>
                        <p>Year: {Student.year}</p>
                    </div>
                ))}
        </div>
    );

}
