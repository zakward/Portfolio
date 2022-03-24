import React from "react"
import "../Styles.css"
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
                    <p className = "biography">Hi, I’m Zak Ward, I am a Web Development Instructor at VSchool.  I maintain a Department of Defense Top Secret Clearance.  I have a Bachelor’s Degree in Communications from the University of Central Arkansas.</p>
                    <p className = "biography">Previously, I worked as a Signal Officer in the United States Army, where I served as advisor to the Battalion Commander on all matters concerning communications, information technology, information security, and network management.  Aside from work, I am a conundrum of a man who has a passion for technology and web development as well as a love for the great outdoors.</p>   
                    <p className = "biography">My greatest passion is helping others.  Through my time as a professional firefighter, Army officer, and business-owner, I developed and honed in on my talents of leadership, loyalty, and teamwork.  Web Development allows me to use my high attention for detail and creativity to help build innovative and pertinent web applications.  My goal is to use my leadership skills and my passion for education to help others realize and reach their potential in tech.</p>  
                </div>
                <div className = "skills-container">
                    <div className = "tech-skills-container">
                        <h2 className = "skills-title">Technical Skills</h2>
                        <ul className = "skills-list">
                            <li>Javascript</li>
                            <li>React</li>
                            <li>HTML/CSS</li>
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