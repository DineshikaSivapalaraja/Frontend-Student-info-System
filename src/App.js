import React, { useState } from 'react';
import AppBar from './components/CRUD-OPERATION/AppBar';
import AddStudent from './components/CRUD-OPERATION/addStudent';
import StudentDetails from './components/CRUD-OPERATION/studentDetails';
import { initializeNavigationFunctions } from './components/CRUD-OPERATION/navigation';

function App() {
  // State to track which component to render
  const [showAddStudent, setShowAddStudent] = useState(true);

  // Function to navigate to Student Details
  const navigateToStudentDetails = () => {
    setShowAddStudent(false);
  };

  // Function to navigate back to Add Student
  const navigateToAddStudent = () => {
    setShowAddStudent(true);
  };

  // Initialize navigation functions
  initializeNavigationFunctions(navigateToStudentDetails, navigateToAddStudent);

  return (
    <div className="App">
      <AppBar/>
      {showAddStudent ? (
        <AddStudent/>
      ) : (
        <StudentDetails />
      )}
    </div>
  );
}
export default App;

// import React from 'react';
// import Student from './components/Student';
// import Student from './components/student1';
// import Students from './components/student2';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//         {/* Hey This is Dineshika! */}
//         <AppBar/>
//         {/* <Student/>
//         <Students/> */}
//     </div>
//   );
// }
// export default App;