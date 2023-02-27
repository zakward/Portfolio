import React from "react"
import { Link } from "react-router-dom"
import "../index.css"
import { HashLink } from "react-router-hash-link"


function Navbar() {
    return(
        <>
           <div className = "nav-container">
                <ul className = "nav-items">
                   <Link to = "/"> <li className = "nav-li" id ="name">
                        Zak Ward
                    </li></Link>
                    <Link to = "/projects">
                            <li className = "nav-li">
                                     Projects
                            </li>
                    </Link>
                    <Link to ="/about-me"><li className = "nav-li"> 
                        About Me
                    </li></Link>
                    <Link to = "/campfire">
                        <li className = "nav-li">
                        Around the Campfire
                    </li>
                        </Link>
                </ul>

           </div>
        </>
    )
}

export default Navbar