import React, { Component } from 'react'
import ProjectList from '../project/ProjectList'
// import { connect } from 'react-redux'
import Notifications from './Notifications'




export class Dashboard extends Component {
    render() {
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

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = dispatch => (
//     {}
// )

// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
export default Dashboard 