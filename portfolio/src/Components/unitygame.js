import game1 from "../Assets/game1.png";
import game2 from "../Assets/game2.png";
import game3 from "../Assets/game3.png";
import game5 from "../Assets/game5.png";
import React from "react";
import projectInfoStyles from "../styles/projectInfo.module.css";

export default function UnityGame(){
    return(
                <div className={projectInfoStyles.project}>
                    <h2>Unity 2D Pixel Game</h2>
                    <div className={projectInfoStyles.projectPics}>
                        <div className={projectInfoStyles.projectInfo}>
                            <img src={game1} alt="" />
                            <ul>
                                <li>Music and SFX control global volume on computer</li>
                                <li>Levels displays the two levels I implemented</li>
                                <li>Quit closes the app</li>
                                <li>Play redirects you to the first level</li>
                            </ul>
                        </div>
                        <div className={projectInfoStyles.projectInfo}>
                            <img src={game2} alt="" />
                            <ul>
                                <li>2D Collissions between Player Sprite and traps generate death</li>
                                <li>Collisions with cherry increments cherry counter</li>
                                <li>Collisions with cherry destroys cherry sprite</li>
                            </ul>
                        </div>
                        <div className={projectInfoStyles.projectInfo}>
                            <img src={game3} alt="" />
                            <ul>
                                <li>Player sprite updates position with moving platform</li>
                                <li>Used two boxcolliders so player sprite wouldn't stick to side of moving platform</li>
                                <li>Go to next level after reaching finish line</li>
                            </ul>
                        </div>
                        <div className={projectInfoStyles.projectInfo}>
                            <img src={game5} alt="" />
                            <ul>
                                <li>Level 2 more challenging</li>
                                <li>Pause, restart, or exit to main menu via pause icon</li>
                            </ul>
                        </div>
                        <div className={projectInfoStyles.overview}>
                            <h3>Overview</h3>
                            <p>Unity Game Engine project that utilizes scripts written in C#</p>
                            <h3>Technologies Used</h3>
                            <ul>
                                <li>Unity Engine</li>
                                <li>C# for scripts</li>
                                <li>VS Code for writing scripts</li>
                                <li>Unity Store for art</li>
                            </ul>
                            <h3>Link</h3>
                            <div className={projectInfoStyles.link}>
                                <p>Stored Locally for now</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
    )
}