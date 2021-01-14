import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        disabled: true
    }
    handleChange = (e) => {
        //button disabling
        if (this.state.email && this.state.password) {
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
        console.log(this.state);
    }


    //Render method
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign in</h5>
                    <div className='row'>
                        <div className='col l6 m12 s12'>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col m12 l6 s12'>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" value={this.state.password} id="password" onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>
                    <div className="input-field">
                        <button disabled={this.state.disabled} className="btn pink lighten-1 z-depth-0" id='btn' >Login</button>
                    </div>
                </form>


            </div>
        )
    }
}

export default SignIn
