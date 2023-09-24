import React, { useState } from 'react';
import './student1.css';

export default function EditStudent({ student, onUpdate }) {
    const [editedValue, setEditedValue] = useState('');
    const [attributeName, setAttributeName] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleSaveClick = () => {
        if (!attributeName || !editedValue) {
            return;
        }

        const updateData = {
            attributeName: attributeName,
            newValue: editedValue,
        };

        fetch(`http://localhost:8080/Student/update/${student.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message) {
                    onUpdate(student.id, attributeName, editedValue);
                    setIsEditing(false); // Hide the edit fields after saving
                } else {
                    console.error('Failed to update student.');
                }
            })
            .catch((error) => {
                console.error('An error occurred:', error);
            });
    };

    return (
        <div>
            {isEditing ? (
                <div>
                    <select id="option-box"onChange={(e) => setAttributeName(e.target.value)}>
                        <option value="">Select Attribute</option>
                        <option value="name">Name</option>
                        <option value="degree">Degree</option>
                        <option value="stu_id">Student ID</option>
                        <option value="year">Year</option>
                    </select>
                    <input
                        type="text"
                        id="input"
                        placeholder="New Value"
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                    />
                    <button id="save-btn" onClick={handleSaveClick}>Save</button>
                </div>
            ) : (
                <button id="nav-Btn" onClick={() => setIsEditing(true)}>Edit</button>
            )}
        </div>
    );
}



// import React, { useState, useEffect } from 'react';
// import './student1.css';

// export default function EditStudent({ Student }) {
//     const [editedStudent, setEditedStudent] = useState({ ...Student });
//     // const [isEditing, setIsEditing] = useState(false);

//     // const handleEditClick = () => {
//     //     setIsEditing(true);
//     // };

//     const handleSaveClick = () => {
// //         fetch("http://localhost:8080/Student/update/${Student.id}", {
// //         method: 'PUT',
// //         headers: {
// //         'Content-Type': 'application/json',
// //     },
// //     body: JSON.stringify(editedStudent),
// // })
// //     .then((response) => {
// //     if (response.ok) {
// //         console.log(`Student with ID ${Student.id} has been updated.`);
// //         setIsEditing(false);
// //     } else {
// //         console.error('Failed to update student.');
// //     }
// //     })
// //     .catch((error) => {
// //     console.error('An error occurred:', error);
// //     });
// // };


// fetch(`http://localhost:8080/Student/update/${Student.id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(editedStudent),
//   })
//     .then((response) => {
//       if (response.ok) {
//         console.log(`Student with ID ${Student.id} has been updated.`);
//       } else {
//         console.error('Failed to update student.');
//       }
//     })
//     .catch((error) => {
//       console.error('An error occurred:', error);
//     });
// };

// const handleInputChange = (e) => {
// const { name, value } = e.target;
// setEditedStudent((prevState) => ({
//     ...prevState,
//     [name]: value,
// }));
// };
// useEffect(() => {
//     // Reset the editedStudent state whenever the student prop changes
//     setEditedStudent({ ...Student });
// }, [Student]);

// return (
// <div>
//     {/* {isEditing ? ( */}
//     <div className="paper">
//     <form>
//         <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         value={editedStudent.name}
//         onChange={handleInputChange}
//         />
//         <input
//         type="text"
//         name="stu_id"
//         placeholder="Student No"
//         value={editedStudent.stu_id}
//         onChange={handleInputChange}
//         />
//         <input
//         type="text"
//         name="degree"
//         placeholder="Degree"
//         value={editedStudent.degree}
//         onChange={handleInputChange}
//         />
//         <input
//         type="number"
//         name="year"
//         placeholder="Year"
//         value={editedStudent.year}
//         onChange={handleInputChange}
//         />
//         <br></br>
//         <button onClick={handleSaveClick}>Save</button>
//     </form>
//     </div>
//     </div>
// );
// }
//-------------------

    //    {/* Save and Cancel buttons */}
    //     {/* <button id="btn" onClick={handleSaveClick}>Save</button>
    //     <button id="btn" onClick={() => setIsEditing(false)}>Cancel</button> */}
    //     <button onClick={handleSaveClick}>Save</button>
    //     </form>
    //     </div>
    //     )}
    //     </div>
    //     )}
    //     // ) : (
    //     // <button id="nav-Btn" onClick={handleEditClick}>Edit</button>
    //     // )}
    
//----------------------------------------------
// import React, { useState, useEffect } from 'react';
// import './student1.css';

// export default function EditStudent({ student, onSave }) {
//   const [editedStudent, setEditedStudent] = useState({ ...student });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedStudent((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSaveClick = () => {
//     // Make a PUT request to update the student's information on the server
//     fetch(`http://localhost:8080/Student/update/${student.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(editedStudent),
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log(`Student with ID ${student.id} has been updated.`);
//           onSave(student.id, editedStudent); // Notify the parent component that the data has been updated
//         } else {
//           console.error('Failed to update student.');
//         }
//       })
//       .catch((error) => {
//         console.error('An error occurred:', error);
//       });
//   };

//   return (
//     <div className="paper">
//       <h1>Edit Student</h1>
//       <form>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={editedStudent.name}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="stu_id"
//           placeholder="Student ID"
//           value={editedStudent.stu_id}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="degree"
//           placeholder="Degree"
//           value={editedStudent.degree}
//           onChange={handleInputChange}
//         />
//         <input
//           type="number"
//           name="year"
//           placeholder="Year"
//           value={editedStudent.year}
//           onChange={handleInputChange}
//         />
//         <br />
//         <button onClick={handleSaveClick}>Save</button>
//       </form>
//     </div>
//   );
// }
//-------------------------------------
    
// import React, { useState, useEffect } from 'react';
// import './student1.css';

// export default function EditStudent({ student, onSave }) {
//   const [editedStudent, setEditedStudent] = useState({ ...student });

//   // This useEffect hook ensures that the editedStudent state is updated
//   // whenever the student prop changes (e.g., when entering edit mode).
//   useEffect(() => {
//     setEditedStudent({ ...student });
//   }, [student]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedStudent((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSaveClick = () => {
//     // Make a PUT request to update the student's information on the server
//     fetch("http://localhost:8080/Student/update/${student.id}", {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(editedStudent),
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log(`Student with ID ${student.id} has been updated.`);
//           onSave(student.id, editedStudent); // Notify the parent component that the data has been updated
//         } else {
//           console.error('Failed to update student.');
//         }
//       })
//       .catch((error) => {
//         console.error('An error occurred:', error);
//       });
//   };

//   return (
//     <div className="paper">
//       <h1>Edit Student</h1>
//       <form>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={editedStudent.name}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="stu_id"
//           placeholder="Student ID"
//           value={editedStudent.stu_id}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="degree"
//           placeholder="Degree"
//           value={editedStudent.degree}
//           onChange={handleInputChange}
//         />
//         <input
//           type="number"
//           name="year"
//           placeholder="Year"
//           value={editedStudent.year}
//           onChange={handleInputChange}
//         />
//         <br />
//         <button onClick={handleSaveClick}>Save</button>
//       </form>
//     </div>
//   );
// }


//----------
// import React, { useState } from 'react';

// export default function EditStudent({ student, onSave }) {
//     const [editedStudent, setEditedStudent] = useState({ ...student });

//     const handleSaveClick = () => {
//         // Perform any validation if needed

//         // Call the onSave callback with the edited student data
//         onSave(editedStudent);
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setEditedStudent((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     return (
//         <div className="edit-form">
//             <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={editedStudent.name}
//                 onChange={handleInputChange}
//             />
//             <input
//                 type="text"
//                 name="stu_id"
//                 placeholder="Student No"
//                 value={editedStudent.stu_id}
//                 onChange={handleInputChange}
//             />
//             <input
//                 type="text"
//                 name="degree"
//                 placeholder="Degree"
//                 value={editedStudent.degree}
//                 onChange={handleInputChange}
//             />
//             <input
//                 type="number"
//                 name="year"
//                 placeholder="Year"
//                 value={editedStudent.year}
//                 onChange={handleInputChange}
//             />
//             <button onClick={handleSaveClick}>Save</button>
//         </div>
//     );
// }


//---------------
// import React, { useState, useEffect } from 'react';

// export default function EditStudent({ student, onSave }) {
//     const [editedStudent, setEditedStudent] = useState({ ...student });

//     const handleSaveClick = () => {
//         // Make a copy of the edited student data and send it to the parent component
//         const editedStudentData = { ...editedStudent };

//         // Make a PUT request to update the student data
//         fetch(`http://localhost:8080/Student/update/${editedStudentData.id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(editedStudentData),
//         })
//             .then((response) => {
//                 if (response.ok) {
//                     // Student data updated successfully
//                     onSave(editedStudentData);
//                 } else {
//                     // Handle error
//                     console.error('Failed to update student.');
//                 }
//             })
//             .catch((error) => {
//                 console.error('An error occurred:', error);
//             });
//     };

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setEditedStudent((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     useEffect(() => {
//         // Reset the editedStudent state whenever the student prop changes
//         setEditedStudent({ ...student });
//     }, [student]);

//     return (
//         <div>
//             <div className="paper">
//                 <form>
//                     <input
//                         type="text"
//                         name="name"
//                         placeholder="Name"
//                         value={editedStudent.name}
//                         onChange={handleInputChange}
//                     />
//                     <input
//                         type="text"
//                         name="stu_id"
//                         placeholder="Student No"
//                         value={editedStudent.stu_id}
//                         onChange={handleInputChange}
//                     />
//                     <input
//                         type="text"
//                         name="degree"
//                         placeholder="Degree"
//                         value={editedStudent.degree}
//                         onChange={handleInputChange}
//                     />
//                     <input
//                         type="number"
//                         name="year"
//                         placeholder="Year"
//                         value={editedStudent.year}
//                         onChange={handleInputChange}
//                     />
//                     <br />
//                     <button onClick={handleSaveClick}>Save</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

//correctone below
// import React, { useState } from 'react';

// export default function EditStudent({ student, onUpdate }) {
//     const [editedValue, setEditedValue] = useState('');
//     const [attributeName, setAttributeName] = useState('');

//     const handleSaveClick = () => {
//         if (!attributeName || !editedValue) {
//             return;
//         }

//         const updateData = {
//             attributeName: attributeName,
//             newValue: editedValue,
//         };

//         fetch(`http://localhost:8080/Student/update/${student.id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(updateData),
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 if (data.message) {
//                     onUpdate(student.id, attributeName, editedValue);
//                 } else {
//                     console.error('Failed to update student.');
//                 }
//             })
//             .catch((error) => {
//                 console.error('An error occurred:', error);
//             });
//     };

//     return (
//         <div>
//             <h2>Edit Student Attribute</h2>
//             <select onChange={(e) => setAttributeName(e.target.value)}>
//                 <option value="">Select Attribute</option>
//                 <option value="name">Name</option>
//                 <option value="degree">Degree</option>
//                 <option value="stu_id">Student ID</option>
//                 <option value="year">Year</option>
//             </select>
//             <input
//                 type="text"
//                 placeholder="New Value"
//                 value={editedValue}
//                 onChange={(e) => setEditedValue(e.target.value)}
//             />
//             <button onClick={handleSaveClick}>Save</button>
//             <button id="nav-Btn">Edit</button>
            
//         </div>

//     );
// }


//-------------


// import React, { useState, useEffect } from 'react';
// import './student1.css';

// export default function EditStudent({ student, onSave, onCancel }) {
//   const [editedStudent, setEditedStudent] = useState({ ...student });

//   const handleSaveClick = () => {
//     // Send a PUT request to update the student's information
//     fetch(`http://localhost:8080/Student/update/${student.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(editedStudent),
//     })
//       .then((response) => {
//         if (response.ok) {
//           console.log(`Student with ID ${student.id} has been updated.`);
//           onSave(editedStudent); // Call onSave callback to update the student details
//         } else {
//           console.error('Failed to update student.');
//         }
//       })
//       .catch((error) => {
//         console.error('An error occurred:', error);
//       });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedStudent((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   useEffect(() => {
//     // Reset the editedStudent state whenever the student prop changes
//     setEditedStudent({ ...student });
//   }, [student]);

//   return (
//     <div className="paper">
//       <form>
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           value={editedStudent.name}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="stu_id"
//           placeholder="Student No"
//           value={editedStudent.stu_id}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="degree"
//           placeholder="Degree"
//           value={editedStudent.degree}
//           onChange={handleInputChange}
//         />
//         <input
//           type="number"
//           name="year"
//           placeholder="Year"
//           value={editedStudent.year}
//           onChange={handleInputChange}
//         />
//         <br />
//         <button onClick={handleSaveClick}>Save</button>
//         <button onClick={onCancel}>Cancel</button>
//       </form>
//     </div>
//   );
// }





