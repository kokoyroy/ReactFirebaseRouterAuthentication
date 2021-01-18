import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreProject } from '../../config/firebaseConfig'
// import { stateInitialiser } from '../../store/reducers/projectReducer'
import ProjectList from '../project/ProjectList'
import Notifications from './Notifications'




class Dashboard extends Component {
    state = {
        projects: []
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.projects.length !== this.props.projects.length) {
            let projects = []
            firestoreProject.collection('projects')
                .onSnapshot((snap) => {
                    snap.forEach((doc) => {
                        // console.log('snap doc');
                        // console.log(doc.data());
                        projects.push({ ...doc.data(), id: doc.id })
                    })
                    this.props.state(projects);
                    this.setState({ projects })
                }, (err) => {
                    console.log(err);
                }, () => {

                })

        }

    }

    componentDidMount() {
        let projects = []
        firestoreProject.collection('projects')
            .onSnapshot((snap) => {
                snap.forEach((doc) => {
                    // console.log('snap doc');
                    // console.log(doc.data());
                    projects.push({ ...doc.data(), id: doc.id })
                })
                console.log('kouokoy!');
                this.setState({ projects })
                console.log('tza!');
                this.props.state(projects);
                console.log(this.props);
            }, (err) => {
                console.log(err);
            }, () => {
                console.log('epityxia!');
            })

    }
    // componentWillUnmount() {
    //     console.log('Dashboard component unmounts');
    //     this.state.unmount();
    // }



    render() {
        console.log('log the State');
        console.log(this.state.projects);
        console.log('log the props');
        console.log(this.props.projects);
        console.log(this.state.projects === this.props.projects);
        return (
            <div className='dashboard container'>
                <div className="row">
                    <div className="col s12 m6"><ProjectList /></div>
                    <div className="col s12 m5 offset-m1"><Notifications /></div>
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
        state: (projects) => dispatch({ type: 'STATE_INIT', projects })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard); 
