import React, { Component } from 'react'
import { auth } from '../../config/firebaseConfig'
class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        disabled: true
    }
    handleChange = (e) => {
        //button disabling
        if (this.state.email && this.state.password && this.state.firstname && this.state.lastname) {
            this.setState({
                disabled: false
            })
            //button enabling
        } else this.setState({ disabled: true })

        //seting the state email & password
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    //submit handler
    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state);
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => console.log(res)).catch(err=>console.log(err.message))
    }


    //Render method
    render() {
        return (
            // FORM
            <div className='container'>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign Up!</h5>

                    {/* First name! */}
                    <div className='row'>
                        <div className='col l6 m12 s12'>
                            <div className="input-field">
                                <label htmlFor="firstname">Firstname</label>
                                <input type="text" id="firstname" value={this.state.firstname} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>

                    {/* lastname */}
                    <div className='row'>
                        <div className='col l6 m12 s12'>
                            <div className="input-field">
                                <label htmlFor="lastname">Lastname</label>
                                <input type="text" id="lastname" value={this.state.lastname} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>

                    {/* email */}
                    <div className='row'>
                        <div className='col l6 m12 s12'>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>

                    {/* password */}
                    <div className='row'>
                        <div className='col m12 l6 s12'>
                            <div className="input-field ">
                                <label htmlFor="password">Password</label>
                                <input type="password" value={this.state.password} id="password" onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>

                    {/* submit button */}
                    <div className="input-field">
                        <button disabled={this.state.disabled} className="btn green  z-depth-2" id='btn' >Sign up!</button>
                    </div>
                </form>


            </div>
        )
    }
}

export default SignUp
