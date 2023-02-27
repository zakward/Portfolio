import React from "react"
import "../index.css"
import profilePic2 from "../profilepic2.jpg"


function Biography() {
    return (
        <>
            <div id = "bio-link" className = "bio-wrapper">
                <div className = "profile-wrapper">
                    <img  className = "profile-img" src = {profilePic2} alt = "Zak" />
                    <h2 className = "profile-name">Zak Ward</h2>
                    <h3 className = "profile-description">Web Development</h3>
                    <div className = "icon-container">
                        <a href = "mailto: zakward85@gmail.com"><div className = "icon email"></div></a>
                        <a href = "https://github.com/zakward" target = "_blank" rel="noreferrer" ><div className = "icon github"></div></a>
                        <a href = "https://www.linkedin.com/in/zakmward/" target = "_blank" rel="noreferrer" ><div className = "icon linkedIn"></div></a>
                    </div>
                </div>
                <div className = "biography-container">
                    <h1 className = "biography-title">Biography</h1>
                    <p className = "biography">Hi, I’m Zak Ward, I am currently a Freelance Developer and Full Stack Instructor at VSchool. </p>
                    <p className = "biography">My greatest passion is helping others.  Through my time as a professional firefighter, Army officer, and business-owner, I developed and honed in on my talents of leadership, loyalty, and teamwork.  Web Development allows me to use my high attention for detail and creativity to help build innovative and pertinent web applications.</p>  
                </div>
                <div className = "skills-container">
                    <div className = "tech-skills-container">
                        <h2 className = "skills-title">Technical Skills</h2>
                        <ul className = "skills-list">
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>  
                             <li>React</li>
                            <li>Remix</li>
                            <li>Redux</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Mongoose/MongoDB</li>
                        </ul>
                    </div>
                    <div className = "interpersonal-skills-container">
                        <h2 className = "skills-title">Interpersonal Skills</h2>
                        <ul className = "skills-list">
                            <li>Problem Solving</li>
                            <li>Critical Thinking</li>
                            <li>Loyalty</li>
                            <li>Communication</li>
                            <li>Teamwork</li>
                            <li>Accuracy</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Biography