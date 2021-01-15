import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from './components/auth/SignIn'
import { Dashboard } from './components/dashboard/Dashboard'
import Navbar from './components/layout/Navbar'
import ProjectDetails from './components/project/ProjectDetails'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/project/CreateProject'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* Routes inside the switch tag */}
          <Switch>
            <Route path='/createproject' component={CreateProject} />
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route exact path='/' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
