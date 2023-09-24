import React from 'react';
import './AppBar.css';
// import { navigateToStudentDetails } from './navigation';

export default function AppBar() {
    return (
        <div className="appbar">
            <h1 className="topic">Student Information System<br></br>Using Spring Boot React Full Stack Application</h1>
            <br></br>
            {/* <button  id="nav-Btn" onClick={() => navigateToStudentDetails()}>Student List</button>  */}
        </div>
        
    ); 
}
