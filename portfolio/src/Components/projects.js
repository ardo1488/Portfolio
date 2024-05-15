import React, {useState} from "react";
import projectStyles from "../styles/projects.module.css";
import Nav from "./nav";
import pinchrCoin from "../Assets/PinchrCoin.png";
import tictactoe from "../Assets/tictactoe2.png";
import game4 from "../Assets/game4.png";
import Pinchr from "./pinchr";
import TicTacToe from "./tictactoe";
import UnityGame from "./unitygame";


function buttonProjectInfo(prop){ // takes in index of button and returns given project info component
    
    switch(prop){
        case 1:
            return(
                <Pinchr />
                
            )
            break;
        case 2:
            return(
                <TicTacToe />
            )
            break;
        case 3:
            return(
                <UnityGame />
            )
            break;
    }

}
export default function Projects(){

    const [exitBtn, setExitBtn] = useState(null); //make exitBtn appear only when project info is displayed

    // this variable holds the exit button that will be displayed when a project's component is displayed
    const exitInfoButton = (
        <button className={projectStyles.exitBtn} onClick={() => handleExit()}>Show All Projects</button>
    );

    // handles click and  calls buttonProjectInfo fucntion with button index
    const handleProjectClick = (projectNumber) => {
        const info = buttonProjectInfo(projectNumber); // gets project info component for given index
        switch (projectNumber) {
            case 1:
                setDisplayDiv(info); // sets new component to display
                setExitBtn(exitInfoButton); //activates exit button
                break;
            case 2:
                setDisplayDiv(info);
                setExitBtn(exitInfoButton);
                break;
            case 3:
                setDisplayDiv(info);
                setExitBtn(exitInfoButton);
                break;
            default:
                break;
        }
    };


    // This is the default div for the Projects page that displays all projects with minimal info
    const defaultDiv = (
                <div className={projectStyles.projectContainer}>
                    <div className={projectStyles.project}>
                        <h2>Pinchr Expense Manager</h2>
                        <h3>Full Stack Project</h3>
                        <div className={projectStyles.projectPics}>
                            <img src={pinchrCoin} alt="" />   
                        </div>
                            <button className={projectStyles.projectBtn} onClick={() => handleProjectClick(1)}>Learn More</button>
                    </div>
                    <div className={projectStyles.project}>
                        <h2>TicTacToe Game</h2>
                        <h3>Front End React Project</h3>
                        <div className={projectStyles.projectPics}>
                            <img src={tictactoe} alt="" />
                        </div>
                            <button className={projectStyles.projectBtn} onClick={() => handleProjectClick(2)}>Learn More</button>
                    </div>
                    <div className={projectStyles.project}>
                        <h2>Unity 2D Pixel Game</h2>
                        <h3>Unity Game Engine C# Project</h3>
                        <div className={projectStyles.projectPics}>
                            <img src={game4} alt="" />
                        </div>
                            <button className={projectStyles.projectBtn} onClick={() => handleProjectClick(3)}>Learn More</button>
                    </div>
                </div>
    );

    
    const [displayDiv, setDisplayDiv] = useState(defaultDiv);

    const handleExit = () => {
        // this function will set the displayDiv to the defaultDiv
        setDisplayDiv(defaultDiv);
        setExitBtn(null);

    }

    return(
        <div className={projectStyles.projects}>
            <Nav/>
            <div className={projectStyles.projectsContainer}>
                <h1 className={projectStyles.projectsHeader}>Projects</h1>
                {exitBtn}
                {displayDiv}
                {exitBtn}
            </div>
        </div>
    );
}