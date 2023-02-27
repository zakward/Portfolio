import React from "react"

export default function Project({...project}) {
    return (
        <>
            <div className = "project-card" style = {{backgroundImage: `url(${project.imgUrl})`}}>

            </div>

            <div className = "project-card" id = "project-details">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
            </div>

        </>
    )
}