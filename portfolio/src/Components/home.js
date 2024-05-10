import homeStyles from "../styles/home.module.css";
import React from "react";
import Nav from "./nav";
import me from "../Assets/monaLisa.jpg";
import family from "../Assets/nuclearFamily.png";
import we from "../Assets/choloSpongebob.webp";

export default function Home(){
    return(
        <div className={homeStyles.home}>
            <Nav />
        <h1 className={homeStyles.homeHeader}>HOME</h1>
            <div className={homeStyles.homeContent}>
                <div className={homeStyles.image}>
                    <img src={me} alt="me" />
                    <p className={homeStyles.imgDescription}>This here is a precious self portrait</p>
                </div>
                <div className={homeStyles.image}>
                    <img  src={family} alt="family" />
                    <p className={homeStyles.imgDescription}>The image you are seeing is one which depicts my family</p>
                </div>
                <div className={homeStyles.image}>
                    <img src={we} alt="we" />
                    <p className={homeStyles.imgDescription}>This OG is my pops in the pinta</p>
                </div>
            </div>
        </div>
    )
}