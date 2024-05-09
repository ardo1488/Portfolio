import React from "react";
import "../styles/about.css";
import Nav from "./nav";

export default function About(){
    return(
        <div className="about">
            <Nav/>
            <h1 className="aboutHeader">About</h1>
        </div>
    )
}