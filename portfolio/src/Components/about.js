import React from "react";
import aboutStyles from "../styles/about.module.css";
import Nav from "./nav";

export default function About(){
    return(
        <div className={aboutStyles.about}>
            <Nav/>
            <h1 className={aboutStyles.aboutHeader}>About</h1>
            <div className={aboutStyles.aboutBody}>
                <div className={aboutStyles.aboutMe}>
                    <h2>Education</h2>
                    <p>California State University, Fullerton</p>
                    <p>Bachelors of Science in Computer Science</p>
                    <h2>Skills</h2>
                    <ul>
                        <li>Object Oriented Programming in C++ and Python</li>
                        <li>Data Structures in C++ and Python</li>
                        <li>SQL and Database Management</li>
                        <li>HTML, CSS, JavaScript</li>
                        <li>ReactJS, NodeJS</li>
                        <li>Google Firebase</li>
                        <li>Algorithms</li>
                        <li>Microsoft Excel Pivot Tables and VBA Functions</li>
                        <li>Blender</li>
                        <li>Swift</li>
                        <li>Unity Engine C# Game Dev</li>
                        <li>Mips and Intel Assembly Programming</li>
                        <li>Networking Concepts</li>
                        <li>Version Control</li>
                        <li>Calculus</li>
                        <li>Socket Programming in Python</li>
                        <li>R Language</li>
                        <li>Qt Ray Tracing in C++</li>
                    </ul>
                    <h2>Hobbies</h2>
                    <p>Yadda Yadda yadda</p>
                    <h2>Future Projects</h2>
                    <p>This is but only the beginning of my life-long jorney as a programmer. I am very hungry to contiue learning and working on projects on my free time.</p>
                </div>
            </div>
        </div>
    )
}