import React from "react";
import aboutStyles from "../styles/about.module.css";
import Nav from "./nav";
import uniGif from "../Assets/educationGif.gif";
import degGif from "../Assets/diplomaGif.gif";
import titanPic from "../Assets/titan.webp";

export default function About(){
    return(
        <div className={aboutStyles.about}>
            <Nav/>
            <h1 className={aboutStyles.aboutHeader}>About</h1>
            <div className={aboutStyles.aboutBody}>
                <div className={aboutStyles.aboutMe}>
                    <h2>Education</h2>
                    <div className={aboutStyles.education}>
                        <div className={aboutStyles.eduDiv}>
                            <div className={aboutStyles.uni}>
                                <img src={uniGif} alt="" />
                                <p>California State University, Fullerton</p>
                            </div>
                            <div className={aboutStyles.uni}>
                                <img src={degGif} alt="" />
                                <p>Bachelors of Science in Computer Science</p>
                            </div>
                        </div>
                        <img src={titanPic} alt=""/>
                    </div>
                   
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
                    <h2>Hobbies and Interests</h2>
                    <p>Some of my hobbies are running, playing and watching baseball with my son, and exploring new places!</p>
                    <p> I am very interested in Full Stack Web Development, data analysis, and keeping up with AI.
                        To feed my interests, I keep a Medium subscription to read up on the new AI innovations in the field and 
                        learn new techniques and practices for Full Stack development. I am passionate about the looks of a website and making
                        it look visually appealing. Ontop of this, I learned how to use Blender for the creation of 3D objects
                        and embedding them into react projects to give them an extra visual pop. Early on in my collegiate journey, I took an
                        SQL class for database management and also fell in love with queries and data analysis. I do a form of data analys
                        for my current job at Amazon as a Process Guide. I am responsible for creating pivot tables on Excel for the purpose
                        of labor allocation in my department. I scrape data from an internal amazon tool which contains order information
                        and where each unit is located in the building; based on this information I am able to create pivot tables and make educated 
                        decisions on where to direct labor. Lastly, I enjoy learning new programming languages will continue to learn emerging concepts 
                        for the rest of my career.
                    </p>
                    <h2>Future Projects</h2>
                    <p>This is but only the beginning of my life-long jorney as a programmer. I am very hungry to contiue learning and working on projects on my free time and career path.</p>
                    <h3>Future projects inlcude but are not limited to:</h3>
                    <ul>
                        <li>Chess Game Project (i love chess!)</li>
                        <li>Exploratory Data Analysis on a public dataset using Python libraries</li>
                        <li>Prediction Data Science Project</li>
                        <li>Web Scraping Project and Analysis</li> 
                        <li>Freelance Web Dev</li>
                        <li>Video Streaming Platform</li>
                        <li>Real-Time Chatting Platform</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}