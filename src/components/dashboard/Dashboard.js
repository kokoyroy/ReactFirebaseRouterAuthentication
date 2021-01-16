import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProjectList from '../project/ProjectList'
import Notifications from './Notifications'




export class Dashboard extends Component {
    render() {
        // gkio giati re malaka den douleuei to redux? sto line 13 prpei na diksei sto console to projects alla den... ti kano lathos re mlk?
        console.log('log the props');
        console.log(this.props);
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

const mapStateToProps = state =>{
    return{
        projects : state.proj.projects
    }
}

// const mapDispatchToProps = dispatch => {

// }

export default connect(mapStateToProps)(Dashboard); 