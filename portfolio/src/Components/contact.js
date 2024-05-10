import React from "react";
import contactStyles from "../styles/contact.module.css";
import Nav from "./nav";
import emailGif from "../Assets/emailGif.gif";
import github from "../Assets/github.png";
import linkedin from "../Assets/linkedin.png";
import indeed from "../Assets/indeed.webp";

export default function Contact(){
    return(
        <div className={contactStyles.contact}>
            <Nav/>
            <h1 className={contactStyles.contactHeader}>Contact</h1>
            <div className={contactStyles.contactContent}>
                <div className={contactStyles.contactBox}>
                    <h2>Personal Email</h2>
                    <div className={contactStyles.contactLink}>
                        <img src={emailGif} alt="emailGif"/>
                        <div className={contactStyles.emailLink}>
                            <p>Click </p>
                                <a href="mailto:lalo.gaxiola15@icloud.com">here</a>
                            <p> to send me an email!</p> 
                        </div>
                    </div>                  
                </div>
                <div className={contactStyles.contactBox}>
                    <h2>School Email </h2>
                    <div className={contactStyles.contactLink}>
                        <img src={emailGif} alt="emailGif"/>
                        <div className={contactStyles.emailLink}>
                            <p>Click </p>
                                <a href="mailto:ardo1488@csu.fullerton.edu">here</a>
                            <p> to send me an email!</p> 
                        </div>
                    </div>
                </div>
                <div className={contactStyles.contactBox}>
                    <h2>GitHub</h2>
                    <div className={contactStyles.contactLink}>
                        <img src={github} alt="github"/>
                        <div className={contactStyles.link}>
                            <a href="https://github.com/ardo1488">Visit</a>
                            <p>my GitHub Page!</p>
                        </div>
                    </div>                   
                </div>
                <div className={contactStyles.contactBox}>
                    <h2>LinkedIn</h2>
                    <div className={contactStyles.contactLink}>
                        <img src={linkedin} alt="linkedin"/>
                        <div className={contactStyles.link}>
                                <a href="https://www.linkedin.com/in/eduardo-gaxiola-2aa595254/">Visit</a>
                                <p>my LinkedIn Page!</p>
                        </div>
                    </div>
                </div>
                <div className={contactStyles.contactBox}>
                    <h2>Indeed</h2>
                    <div className={contactStyles.contactLink}>
                        <img className={contactStyles.indeed} src={indeed} alt="indeed"/>
                        <div className={contactStyles.link}>
                                <a href="https://profile.indeed.com/?hl=en_US&co=US&from=gnav-notifcenter">Visit</a>
                                <p>my Indeed Page!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}