import React from 'react'

function ProjectDetails(props) {
    console.log(props);
    const id = props.match.params.id
    return (
        <div className='container section project-details'>
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">project title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam porro perspiciatis placeat temporibus, neque perferendis aliquam nostrum error sint laudantium laborum, nesciunt doloremque incidunt eveniet consectetur veritatis accusamus. Minima, nesciunt.</p>
                </div>
                <div className="card-action grey lighten-4 black-text ">
                    <div>posted by kostas kourouklidis</div>
                    <div>13nth of january 2021</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
