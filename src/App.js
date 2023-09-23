
import './App.css';
// import React from 'react';-->new
import React from 'react';

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import AppBar from './components/AppBar';
// import Student from './components/Student';
import Student from './components/student1';
// import myFunction from './components/1';
// import app2 from './components/2';

// import AddStudent from './components/AddStudent';
// import StudentList from './components/StudentList'

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import AddStudent from './components/AddStudent';
// import StudentList from './components/StudentList';
// import './App.css';

function App() {
  return (
    <div className="App">
        {/* Hey This is Dineshika! */}
        <AppBar/>
        <Student/>
        {/* <myFunction/>
        <app2/> */}
    </div>
    // <Router>
    //   <div>
    //     <nav>
    //     <ul>
    //       <li><Link to = "/add"> Add Student </Link> </li>
    //       <li><Link to = "/students">Student Details List</Link></li>
    //     </ul>
    //     </nav>

    //     <Switch>
    //       <Route path="/add"><AddStudent /></Route>
    //       <Route path="/students"><StudentList /></Route>
    //     </Switch>
    //     </div>
    // </Router>
  );
}


// import getContent from './components/2'; // Rename the import

// function App() {
//   const [showContent, setShowContent] = useState(false); // State for content

//   const myFunction = () => {
//     // Perform any desired action
//     setShowContent(true);
//   };

//   return (
//     <div className="App">
//       <AppBar />
//       <Student />
//       <button onClick={myFunction}>Replace document</button>
//       {showContent && <p>{getContent()}</p>}
//     </div>
//   );
// }   in same page hello

// new page hello
// function App() {
//   const [showContent, setShowContent] = useState(false);

//   const myFunction = () => {
//     setShowContent(true);
//   };

//   return (
//     <div className="App">
//       <AppBar />
//       <Student />
//       <button onClick={myFunction}>Replace document</button>
//       {showContent && (
//         <div>
//           <h1>Hello Page</h1>
//           <p>{getContent()}</p>
//         </div>
//       )}
//     </div>
//   );
// }

export default App;
