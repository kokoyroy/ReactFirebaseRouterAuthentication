import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { firestoreProject } from '../../config/firebaseConfig'
// import { stateInitialiser } from '../../store/reducers/projectReducer'
import ProjectList from '../project/ProjectList'
import Notifications from './Notifications'




class Dashboard extends PureComponent {
    state = {
        projects: ''
    }



    componentDidMount() {

        firestoreProject.collection('projects')
            .onSnapshot((snap) => {
                let projects = []
                snap.forEach((doc) => {
                    projects.push({ ...doc.data(), id: doc.id })
                })
                console.log('component did mount!!');
                //initialise the store
                this.props.storeReresh()
                this.props.initialiseState(projects);
                //initialise the state from store
                this.setState(() => ({
                    projects: this.props.projects
                }));
            }, (err) => {
                console.log('there was a problem in firebase as it was initialising the store...');
                console.log(err);
            }, () => {
            })
    }




    render() {
        if (this.state.projects) {
            console.log('to state einai tora')
            console.log(this.state.projects)
            console.log('to redux einia')
            console.log(this.props.projects)
        }


        return (
            <div className='dashboard container'>
                <div className="row">
                    {this.state.projects && <div className="col s12 m6"><ProjectList /></div>}
                    {this.state.projects && <div className="col s12 m5 offset-m1"><Notifications /></div>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.proj.projects
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initialiseState: (projects) => dispatch({ type: 'STATE_INIT', projects }),
        storeReresh: () => dispatch({ type: 'REFRESH' })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); 
