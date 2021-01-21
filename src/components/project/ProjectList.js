import React from 'react'
import ProjectsHook from '../../Hooks/ProjectsHook'
import ProjectSummary from './ProjectSummary'

function ProjectList() {
    const projects = ProjectsHook('projects')



    return (
        <>
            { projects && projects.map(proj => (
                <ProjectSummary
                    key={proj.id}
                    title={proj.title}
                    content={proj.content}
                    authonFirstname={proj.authorFirstname}
                    authorLastname={proj.authorLastname}
                    authorID={proj.authorId}
                />
            ))}


        </>
    )
}

export default ProjectList
