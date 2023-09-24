//Delete each student button once click
import React, { useState } from 'react';

export default function DeleteStudent({ studentId }) {
    const [id, setId] = useState(studentId);

    const handleDeleteClick = () => {
    fetch(`http://localhost:8080/Student/delete/${id}`, {
        method: 'DELETE',
    })
    .then((response) => {
        if (response.ok) {
            console.log("Student with ID ${id} has been deleted.");
        } else {
            console.error('Failed to delete student.');
        }
    })
    .catch((error) => {
        console.error('An error occurred:', error);
    });
};

return (
    <div>
        <button id="nav-Btn" onClick={handleDeleteClick}>Delete</button>
    </div>
);
}

//using get id and delete button

// import React, { useState } from 'react';

// export default function DeleteStudent({studentId}) {
// const [id, setId] = useState(studentId);

// const handleDeleteClick = () => {
// fetch("http://localhost:8080/Student/delete/${id}", {
//     method: 'DELETE',
// })
// .then((response) => {
//     if (response.ok) {
//         console.log(`Student with ID ${id} has been deleted.`);
//     } else {
//         console.error('Failed to delete student.');
//     }
// })
// .catch((error) => {
//     console.error('An error occurred:', error);
// });
// };

// return (
//     <div>
//     <h1>Delete Student by ID</h1>
//     <form id="deleteForm">
//         <label htmlFor="studentId">Student ID:</label>
//         <input
//             type="number"
//             id="studentId"
//             value={id}
//             onChange={(e) => setId(e.target.value)}
//             required
//         />
//         <button id="nav-Btn" type="button" onClick={handleDeleteClick}>
//             Delete Student
//         </button>
//     </form>
//     </div>
// );
// }

