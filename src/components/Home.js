import React from "react"
import profilePic from "../images/profilepic2.jpg"

export default function Home(){
    return (
        <>
            <div className = "home-container">
                <img src = {profilePic} alt = " " className = "profile-pic"/>
                <h2 className="home-tags">Zakary Ward</h2>
                <h4 className="home-tags">Developer, Instructor, Farmer</h4>
                <div className = "icon-container">
                        <a href = "mailto: zakward85@gmail.com"><div className = "icon email"></div></a>
                        <a href = "https://github.com/zakward" target = "_blank" rel="noreferrer" ><div className = "icon github"></div></a>
                        <a href = "https://www.linkedin.com/in/zakmward/" target = "_blank" rel="noreferrer" ><div className = "icon linkedIn"></div></a>
                    </div>
            </div>
        </>
    )
}