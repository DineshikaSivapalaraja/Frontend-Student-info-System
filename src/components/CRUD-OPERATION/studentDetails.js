import React, { useEffect, useState } from 'react';
import './student1.css';
import { navigateToAddStudent } from './navigation';
import EditStudent from './editStudent';
import DeleteStudent from './deleteStudent';

export default function StudentDetails() {
    const [students, setStudents] = useState([]);

    const fetchStudents = () => {
        fetch('http://localhost:8080/Student/getAll')
            .then((res) => res.json())
            .then((result) => {
                setStudents(result);
            });
    };

    useEffect(() => {
        // Fetch students when the component mounts
        fetchStudents();
    }, []);

    const handleUpdate = (id, attributeName, newValue) => {
        // Update the student attribute in the state
        const updatedStudents = students.map((Student) => {
            if (Student.id === id) {
                return {
                    ...Student,
                    [attributeName]: newValue,
                };
            }
            return Student;
        });

        setStudents(updatedStudents);
    };

    return (
        <div className="container">
            <h1 className="title">Student Details</h1>
            <button id="nav-Btn" onClick={() => navigateToAddStudent()}>Add Student</button> 
            <div className="student-container">
                {students.map((Student) => (
                    <div className="student" key={Student.id}>
                        <h3>ID: {Student.id}</h3>
                        <p>Name: {Student.name}</p>
                        <p>Student ID: {Student.stu_id}</p>
                        <p>Degree: {Student.degree}</p>
                        <p>Year: {Student.year}</p>
                        {/* <EditStudent student={Student} onUpdate={handleUpdate} />
                        <DeleteStudent studentId={Student.id} /> */}
                        <DeleteStudent studentId={Student.id} />
                        <EditStudent student={Student} />
                    </div>
                ))}
            </div>
        </div>
    );
}


// import React, { useEffect, useState } from 'react';
// import './student1.css';
// import { navigateToAddStudent } from './navigation';
// import DeleteStudent from './deleteStudent';
// import EditStudent from './editStudent'; 

// export default function StudentDetails({ Student }) {
//     const [name, setName] = useState('');
//     const [stu_id, setStu_ID] = useState('');
//     const [degree, setDegree] = useState('');
//     const [year, setYear] = useState('');
//     const [students, setStudents] = useState([]);
//     const [isEditing, setIsEditing] = useState(false);

//     const handleClick = async (e) => {
//         e.preventDefault();
//         const student = { name, stu_id, degree, year };
//     }

//     const fetchStudents = () => {
//         fetch("http://localhost:8080/Student/getAll")
//             .then(res => res.json())
//             .then(result => {
//                 setStudents(result);
//             });
//     }

//     useEffect(() => {
//         // Fetch students when the component mounts
//         fetchStudents();
//     }, []);

//     const handleEditClick = () => {
//         setIsEditing(!isEditing);
//     };

//     const handleSaveStudent = (editedStudentData) => {
//         // Update the students array with the edited student data
//         const updatedStudents = students.map((Student) => {
//             if (Student.id === editedStudentData.id) {
//                 return editedStudentData;
//             }
//             return Student;
//         });

//         setStudents(updatedStudents);
//         setIsEditing(false);
//     };

//     return (
//         <div className="container">
//             <h1 className="title">Students</h1>
//             <button id="nav-Btn" onClick={() => navigateToAddStudent()}>Add Student</button>
//             <div className="student-container">
//                 {students.map((Student) => (
//                     <div className="student" key={Student.id}>
//                         <p>Id: {Student.id}</p>
//                         <p>Name: {Student.name}</p>
//                         <p>Student ID: {Student.stu_id}</p>
//                         <p>Degree: {Student.degree}</p>
//                         <p>Year: {Student.year}</p>

//                         {isEditing ? (
//                             <EditStudent student={Student} onSave={handleSaveStudent} />
//                         ) : (
//                             <button id="nav-Btn" onClick={handleEditClick}>Edit</button>
//                         )}

//                         <DeleteStudent studentId={Student.id} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }


///---------------------------------------------------------------------------------------------
// import React, { useEffect, useState } from 'react';   
// import './student1.css';
// import { navigateToAddStudent } from './navigation';
// import DeleteStudent from './deleteStudent';
// import EditStudent from './editStudent';

// export default function StudentDetails() {
//     const [name, setName] = useState('');
//     const [stu_id, setStu_ID] = useState('');
//     const [degree, setDegree] = useState('');
//     const [year, setYear] = useState('');
//     const [students, setStudents] = useState([]);

//     const handleClick = async (e) => {
//         e.preventDefault();
//         const student = { name, stu_id, degree, year };
//     }

//     const fetchStudents = () => {
//         fetch("http://localhost:8080/Student/getAll")
//             .then(res => res.json())
//             .then(result => {
//                 setStudents(result);
//             });
//     }

//     useEffect(() => {
//         // Fetch students when the component mounts
//         fetchStudents();
//     }, []);

//    // const [isEditing, setIsEditing] = useState(false);
//    const [editingStudent, setEditingStudent] = useState(null);

//    const handleEditClick = (student) => {
//        setEditingStudent(student);
//    };


//     return (
//         <div className="container">
//             <h1 className="title">Students</h1>
//             <button id="nav-Btn" onClick={() => navigateToAddStudent()}>Add Student</button> 
//             {/* <button id="deleteButton">Delete Student</button> */}
//             <div className="student-container">
//                 {students.map(Student => (
//                     <div className="student" key={Student.id}>
//                         <p>Id: {Student.id}</p>
//                         <p>Name: {Student.name}</p>
//                         <p>Student ID: {Student.stu_id}</p>
//                         <p>Degree: {Student.degree}</p>
//                         <p>Year: {Student.year}</p>

//                         {/* <button onClick={() => setIsEditing(!isEditing)}>
//                             {isEditing ? 'Cancel' : 'Edit'}
//                         </button> */}
//                       {/* /////  <button id="nav-Btn" onClick={() => setIsEditing(!isEditing)}>Edit</button>

//                         {/* delete button added for each student container */}
//                         {/* <button id="deleteButton">Delete Student</button> */}
//                          {/* /////<DeleteStudent studentId={Student.id}/> */}
//                         {/* <EditStudent student={Student} /> */}
//                        {/* ///// {isEditing && <EditStudent student={Student} />} */} 

//                        <button id="nav-Btn" onClick={() => handleEditClick(Student)}>Edit</button>
//                         <DeleteStudent studentId={Student.id} />
//                         {editingStudent === Student && <EditStudent student={Student} />}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// --------------------------------




