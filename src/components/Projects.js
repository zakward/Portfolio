import React, {useState, useEffect} from "react"
import ProjectData from "../ProjectData"
import Project from "./Project"
import axios from "axios"
import arrow from "../images/smallSpade.png"

export default function Projects() {

    //carousel
    const [currProj, setCurrProj] = useState(0)
    const [projects, setProjects] = useState([])

    const [isViewDetails, setIsViewDetails] = useState(false)

    useEffect(()=> {
        axios.get("https://good-pear-sockeye-tam.cyclic.app/projects")
                .then(res =>setProjects(res.data))
                .catch(err => console.log(err))
    } , [])

    const leftArrow = () => {
        if (currProj > 0) {
            setCurrProj(prevCurrProj=> {
            return prevCurrProj -1 
        })
    }
    }

    const rightArrow = () => {
        if (currProj < projects.length -1) {
            setCurrProj(prevCurrProj => {
            return prevCurrProj +1 
        })
    }
    }
    


    console.log(projects)
        
 // { projects[currProj].imgUrl }

    return (
        <> 
        <div id = "projects-test-container" >
            <h1>My Projects</h1> 
            <div id = "img-container">
                <div className = "arrow left"><img onClick = {leftArrow}  src = {arrow} alt = "left-shovel" className = "left-arrow" /></div>
                <img referrerPolicy="no-referrer" src = {ProjectData[currProj].imgUrl} alt = "test" id ="test-img"/>
                <div className = "arrow left"><img onClick = {rightArrow} src = {arrow} alt = "left-shovel" className = "right-arrow" /></div>
            </div>
            <h3>{ProjectData[currProj].title}</h3>
            <div className = "project-description-div">{ProjectData[currProj].description.map(item => {
                return <li><span style = {{position: "relative", right: "12px", fontSize: "14px"}}>{item}</span></li>
            })}</div>

            <h3>Skills</h3>
            
            <ul className = "skills-container">
                            
                            <li>HTML</li>
                            <li>CSS</li> 
                             <li>Javascript</li>
                             <li>React/Remix/Redux</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>Mongoose/MongoDB</li>
                        </ul>
               
        </div>
              
        </>
    
    )
}