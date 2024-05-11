import pinchr1 from "../Assets/PinchrPic1.png";
import pinchr2 from "../Assets/PinchrPic2.png";
import pinchr3 from "../Assets/PinchrPic3.png";
import pinchr4 from "../Assets/PinchrPic4.png";
import React from "react";
import pinchrStyles from "../styles/pinchr.module.css";

export default function TicTacToe(){
    return(
        <div className={pinchrStyles.projects}>
                <div className={pinchrStyles.project}>
                    <h2>Pinchr Expense Manager</h2>
                    <div className={pinchrStyles.projectPics}>
                        <img src={pinchr1} alt="" />
                        <img src={pinchr2} alt="" />
                        <img src={pinchr3} alt="" />
                        <img src={pinchr4} alt="" />
                    </div>
                    <div className={pinchrStyles.projectInfo}>
                        <p>Project Info</p>
                    </div>
                </div>
        </div>
    )
}