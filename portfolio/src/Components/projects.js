import React from "react";
import projectStyles from "../styles/projects.module.css";
import Nav from "./nav";
import pinchr1 from "../Assets/PinchrPic1.png";
import pinchr2 from "../Assets/PinchrPic2.png"
import pinchr3 from "../Assets/PinchrPic3.png"
import pinchr4 from "../Assets/PinchrPic4.png"


export default function Projects(){
    return(
        <div className={projectStyles.projects}>
            <Nav/>
            <h1 className={projectStyles.projectsHeader}>Projects</h1>
            <div className={projectStyles.projectContainer}>
                <div className={projectStyles.project}>
                    <h2>Pinchr Expense Manager</h2>
                    <div className={projectStyles.projectPics}>
                        <img src={pinchr1} alt="" />
                        <img src={pinchr2} alt="" />
                        <img src={pinchr3} alt="" />
                        <img src={pinchr4} alt="" />
                    </div>
                    <div className={projectStyles.projectInfo}>
                        <p>Project Info</p>
                    </div>
                </div>
                <div className={projectStyles.project}>
                    <h2>Pinchr Expense Manager</h2>
                    <div className={projectStyles.projectPics}>
                        <img src={pinchr1} alt="" />
                        <img src={pinchr2} alt="" />
                        <img src={pinchr3} alt="" />
                        <img src={pinchr4} alt="" />
                    </div>
                    <div className={projectStyles.projectInfo}>
                        <p>Project Info</p>
                    </div>
                </div>
                <div className={projectStyles.project}>
                    <h2>Pinchr Expense Manager</h2>
                    <div className={projectStyles.projectPics}>
                        <img src={pinchr1} alt="" />
                        <img src={pinchr2} alt="" />
                        <img src={pinchr3} alt="" />
                        <img src={pinchr4} alt="" />
                    </div>
                    <div className={projectStyles.projectInfo}>
                        <p>Project Info</p>
                    </div>
                </div>
            </div>
        </div>
    )
}