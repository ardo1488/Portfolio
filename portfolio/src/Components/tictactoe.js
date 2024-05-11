import tictactoe1 from "../Assets/tictactoe1.png";
import tictactoe2 from "../Assets/tictactoe2.png";
import tictactoe3 from "../Assets/tictactoe3.png";
import tictactoe4 from "../Assets/tictactoe4.png";
import React from "react";
import projectInfoStyles from "../styles/projectInfo.module.css";

export default function TicTacToe(){
    return(
                <div className={projectInfoStyles.project}>
                    <h2>TicTacToe Game</h2>
                    <div className={projectInfoStyles.projectPics}>
                        <div className={projectInfoStyles.projectInfo}>
                            <img src={tictactoe1} alt="" />
                            <ul>
                                <li>Each box is a button that calls a function On click</li>
                                <li>Box then displays symbol depending on who's turn it is</li>
                                <li>Top header shows whose turn it is</li>
                            </ul>
                        </div>
                        <div className={projectInfoStyles.projectInfo}>
                            <img src={tictactoe2} alt="" />
                            <ul>
                                <li>When someone wins, the top header turns green</li>
                                <li>The top header also displays winner</li>
                            </ul>
                        </div>
                        <div className={projectInfoStyles.projectInfo}>
                            <img src={tictactoe3} alt="" />
                            <ul>
                                <li>Restart Game button restarts the game when clicked</li>
                            </ul>
                        </div>
                        <div className={projectInfoStyles.projectInfo}>
                            <img src={tictactoe4} alt="" />
                            <ul>
                                <li>Header dislpays draw and turns yellow</li>
                                <li>Happens when all buttons are pressed and no winner</li>
                            </ul>
                        </div>
                        <div className={projectInfoStyles.overview}>
                        <h3>Overview</h3>
                        <p>This is a simple React JS project that simulates a game of tictactoe game</p>
                        <h3>Technologies Used</h3>
                        <ul>
                            <li>React</li>
                            <li>GitHub for version control</li>
                            <li>Styling was done leveraging CSS</li>
                        </ul>
                        <h3>Link to Website</h3>
                        <div className={projectInfoStyles.link}>
                            <a target="_blank" rel="noreferrer" href="https://github.com/ardo1488/TicTacToeProject">Github Repo Link</a>
                        </div>
                    </div>
                    </div>
                    
                </div>
    )
}