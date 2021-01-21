import React from 'react'

function ProjectSummary(props) {
    return (
        <>
            <div className='card z-depth-1 project-summary'>
                <div className='card-content grey-text text-darken-3' >
                    <span className="card-title">{props.title}</span>
                    <p>{props.content}</p>
                    <p>{`posted by ${props.authorFirstname} ${props.authorLastname}`}</p>
                    <p className="grey-text">3rd of september , 02:00</p>
                </div>
            </div>

        </>
    )
}

export default ProjectSummary
