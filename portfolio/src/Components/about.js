import React from "react";
import aboutStyles from "../styles/about.module.css";
import Nav from "./nav";

export default function About(){
    return(
        <div className={aboutStyles.about}>
            <Nav/>
            <h1 className={aboutStyles.aboutHeader}>About</h1>
        </div>
    )
}