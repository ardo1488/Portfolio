import "../styles/home.css";
import React from "react";
import Nav from "./nav";
import me from "../Assets/monaLisa.jpg";
import family from "../Assets/nuclearFamily.png";
import we from "../Assets/choloSpongebob.webp";

export default function Home(){
    return(
        <div className="home">
            <Nav />
            <h1 className="homeHeader">HOME</h1>
            <div className="homeContent">
                <div className="image">
                    <img src={me} alt="me" />
                    <p className="imgDescription">This here is a precious self portrait</p>
                </div>
                <div className="image">
                    <img  src={family} alt="family" />
                    <p className="imgDescription">The image you are seeing is one which depicts my family</p>
                </div>
                <div className="image">
                    <img src={we} alt="we" />
                    <p className="imgDescription">This OG is my pops in the pinta</p>
                </div>
            </div>
        </div>
    )
}