import React, { useEffect, useState } from 'react';
import './Student.css';

export default function Student() {
    const [name, setName] = useState('');
    const [stu_id, setStu_ID] = useState('');
    const [degree, setDegree] = useState('');
    const [year, setYear] = useState('');
    const [students, setStudents] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        const student = { name, stu_id, degree, year };
        console.log(student);
        fetch("http://localhost:8080/student/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            console.log("New Student added");

            // fetch("http://localhost:8080/student/getAll")
            // .then(res => res.json())
            // .then(result => {
            //     setStudents(result); // Update the list of students
            //     // Clear input fields or set them to default values
            //     setName('');
            //     setStu_ID('');
            //     setDegree('');
            //     setYear('');
            // })
            // .catch(error => {
            //     console.error("Error fetching students:", error);
            // });
        })
        .catch(error => {
            console.error("Error adding student:", error);
        });
    }

    // useEffect(() => {
    //     fetch("http://localhost:8080/student/getAll")
    //         .then(res => res.json())
    //         .then(result => {
    //             setStudents(result);
    //         });
    // }, []);

    useEffect(() => {
        fetch("http://localhost:8080/student/getAll")
            .then(res => res.json())
            .then(result => {
                setStudents(result);
            })
            .catch(error => {
                console.error("Error fetching students:", error);
            });
    }, []);
    

    return (
        <div class="container">
            <div class="paper">
                <h1 class="title">Add Student</h1>
                <form class="form">
                    <input
                        class="input"
                        type="text"
                        placeholder="Student Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}/>
                    <input
                        class="input"
                        type="text"
                        placeholder="Student ID"
                        value={stu_id}
                        onChange={(e) => setStu_ID(e.target.value)}/>
                    <input
                        class="input"
                        type="text"
                        placeholder="Degree"
                        value={degree}
                        onChange={(e) => setDegree(e.target.value)}/>
                    <input
                        class="input"
                        type="number"
                        placeholder="Year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}/>

                    <button class="button" onClick={handleClick}>Submit</button>
                </form>
            </div>
            
            <h1 class="title">Students</h1>
            <div class="students">
                {students.map(student => (
                    <div class="student" key={student.id}>
                        <p>Id: {student.id}</p>
                        <p>Name: {student.name}</p>
                        <p>Student ID: {student.stu_id}</p>
                        <p>Degree: {student.degree}</p>
                        <p>Year: {student.year}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

