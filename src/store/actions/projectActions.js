import { firestoreProject } from '../../config/firebaseConfig'






export const createProject = (proj) => {
    return (dispatch, getState) => {
        const projectsDB = firestoreProject.collection('projects');

        const project = {
            ...proj,
            createdAt: new Date(),
            authorFirstname: 'Kostas',
            authorLastname: 'Kourouklidis',
            authorId: 12345
        }
        projectsDB.add(project)
            .then(res => {
                project.id = res.id
                dispatch({ type: 'CREATE_PROJECT', project })
            }).catch((error) => {
                dispatch({ type: 'CREATE_PROJECT_ERROR', error })
            })

        //make async call to the database

    }
}




// const data = { title: project.title, content: project.content, time }
// fetch('https://kokoyroyprojects-default-rtdb.firebaseio.com/projects.json', {
//     method: 'POST', // or 'PUT'
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
//         dispatch({ type: 'CREATE_PROJECT', project })
//     }).catch((error) => {
//         console.error('Error:', error);
//     });