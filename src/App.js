
// import './App.css';
//                 // import React from 'react';-->new
// import React from 'react';

//         // import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import AppBar from './components/AppBar';
//               // import Student from './components/Student';
//               // import Student from './components/student1';
//               // import Students from './components/student2';

// import AddStudent from './components/addStudent';
// import Students from './components/student2';

//             // import myFunction from './components/1';
//             // import app2 from './components/2';

//             // import AddStudent from './components/AddStudent';
//             // import StudentList from './components/StudentList'

//             // import React from 'react';
//             // import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
//             // import AddStudent from './components/AddStudent';
//             // import StudentList from './components/StudentList';
//             // import './App.css';

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


import React, { useState } from 'react';
import AppBar from './components/AppBar';
import AddStudent from './components/addStudent';
import StudentDetails from './components/studentDetails';
import { initializeNavigationFunctions } from './components/navigation';

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

