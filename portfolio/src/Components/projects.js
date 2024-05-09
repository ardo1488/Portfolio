import React from "react";
import "../styles/projects.css";
import Nav from "./nav";
import pinchr1 from "../Assets/PinchrPic1.png";
import pinchr2 from "../Assets/PinchrPic2.png"
import pinchr3 from "../Assets/PinchrPic3.png"
import pinchr4 from "../Assets/PinchrPic4.png"


export default function Projects(){
    return(
        <div className="projects">
            <Nav/>
            <h1 className="projectsHeader">Projects</h1>
            <div className="projectContainer">
                <div className="project">
                    <h2>Pinchr Expense Manager</h2>
                    <div className="projectPics">
                        <img src={pinchr1} alt="" />
                        <img src={pinchr2} alt="" />
                        <img src={pinchr3} alt="" />
                        <img src={pinchr4} alt="" />
                    </div>
                    <div className="projectInfo">
                        <p>Project Info</p>
                    </div>
                </div>
                <div className="project">
                    <h2>Pinchr Expense Manager</h2>
                    <div className="projectPics">
                        <img src={pinchr1} alt="" />
                        <img src={pinchr2} alt="" />
                        <img src={pinchr3} alt="" />
                        <img src={pinchr4} alt="" />
                    </div>
                    <div className="projectInfo">
                        <p>Project Info</p>
                    </div>
                </div>
                <div className="project">
                    <h2>Pinchr Expense Manager</h2>
                    <div className="projectPics">
                        <img src={pinchr1} alt="" />
                        <img src={pinchr2} alt="" />
                        <img src={pinchr3} alt="" />
                        <img src={pinchr4} alt="" />
                    </div>
                    <div className="projectInfo">
                        <p>Project Info</p>
                    </div>
                </div>
            </div>
        </div>
    )
}