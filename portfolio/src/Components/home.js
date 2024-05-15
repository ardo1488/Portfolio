import homeStyles from "../styles/home.module.css";
import React from "react";
import Nav from "./nav";
import me from "../Assets/me.jpg";
import family from "../Assets/them.jpg";
import we from "../Assets/us.jpg";

export default function Home(){
    return(
        <div className={homeStyles.home}>
            <Nav />
        <h1 className={homeStyles.homeHeader}>HOME</h1>
            <div className={homeStyles.homeContent}>
                <div className={homeStyles.image}>
                    <img src={me} alt="me" />
                    <p className={homeStyles.imgDescription}>This here is me at Lytle Creek, Fontana</p>
                </div>
                <div className={homeStyles.image}>
                    <img  src={family} alt="family" />
                    <p className={homeStyles.imgDescription}>The image you are seeing is one which depicts my family at Solana Beach</p>
                </div>
                <div className={homeStyles.image}>
                    <img src={we} alt="we" />
                    <p className={homeStyles.imgDescription}>Me and my son infront of a lego Ferrari</p>
                </div>
            </div>
        </div>
    )
}