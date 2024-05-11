import pinchr1 from "../Assets/PinchrPic1.png";
import pinchr2 from "../Assets/PinchrPic2.png";
import pinchr3 from "../Assets/PinchrPic3.png";
import pinchr4 from "../Assets/PinchrPic4.png";
import React from "react";
import projectInfoStyles from "../styles/projectInfo.module.css";

export default function Pinchr(){
    return(
                <div className={projectInfoStyles.project}>
                    <h2>Pinchr Expense Manager</h2>
                    <div className={projectInfoStyles.projectPics}>
                    <div className={projectInfoStyles.projectInfo}>
                            <img src={pinchr1} alt="" />

                            <ul>
                                <li>Home route displays all the user's expenses</li>
                                <li>All expenses are inputted in home route by user</li>
                                <li>Add category, amount, and budget it applies to</li>
                                <li>Click submit button</li>
                            </ul>
                        </div>
                        <div className={projectInfoStyles.projectInfo}>
                            <img src={pinchr2} alt="" />
                            <ul>
                                <li>Budgets Route</li>
                                <li>Select a budget if one exists</li>
                                <li>Create a budget by inputting budget name and amount</li>
                            </ul>
                        </div>
                        <div className={projectInfoStyles.projectInfo}>
                            <img src={pinchr3} alt="" />
                            <ul>
                                <li>Analytics Route</li>
                                <li>Select a budget if one exists else select none</li>
                                <li>Select graph type</li>
                                <li>Click Display button</li>
                            </ul>
                        </div>
                        <div className={projectInfoStyles.projectInfo}>
                            <img src={pinchr4} alt="" />
                            <ul>
                                <li>All expenses part of a certain budget are displayed on graph</li>
                            </ul>
                        </div>
                    </div>
                    <div className={projectInfoStyles.overview}>
                        <h3>Overview</h3>
                        <p>This is a full stack web application that allows users to input their expenses and visualize them on different types of graphs</p>
                        <h3>Technologies Used</h3>
                        <ul>
                            <li>React</li>
                            <li>Node.js </li>
                            <li>Google Firebase for DB and User Authention and Google Sign In</li>
                            <li>React Three Fiber and Drei for Coin 3D object</li>
                            <li>Chart.js for data visualization</li>
                            <li>Blender for making coin 3D object</li>
                            <li>GitHub for version control</li>
                            <li>Bootstrap for minimal styling features</li>
                            <li>Most styling was done leveraging CSS</li>
                        </ul>
                        <h3>Link to Website</h3>
                        <div className={projectInfoStyles.link}>
                            <a target="_blank" rel="noreferrer" href="https://pinchr-13af6.web.app/">Pinchr Link</a>
                        </div>
                    </div>
                </div>

    );
}