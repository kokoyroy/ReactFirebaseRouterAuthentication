import { useEffect, useState } from "react"
import { firestoreProject } from "../config/firebaseConfig";


function ProjectsHook(db) {
    const [projs, setProjs] = useState('');

    useEffect(() => {
        const unsub = firestoreProject.collection(db)
            .onSnapshot((snap) => {
                let projects = []
                snap.forEach((doc) => {
                    projects.push({ ...doc.data(), id: doc.id })
                })
                setProjs(projects)
            }, (err) => {
                console.log('there was a problem in firebase as it was initialising the store...');
                console.log(err);
            })
        return () => {
            unsub();
        }
    }, [db])

    return projs;
}

export default ProjectsHook
