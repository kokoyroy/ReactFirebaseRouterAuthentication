import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions';


class CreateProject extends Component {
    state = {
        title: '',
        content: '',
        disabled: true
    }
    handleChange = (e) => {
        //button disabling
        if (this.state.title && this.state.content) {
            this.setState({
                disabled: false
            })
            //button enabling
        } else this.setState({ disabled: true })

        //seting the state of title & content
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    //submit handler
    handleSubmit = e => {
        e.preventDefault();
        const proj = { title: this.state.title, content: this.state.content }
        this.props.createProject(proj)
        // console.log(this.props);
        this.props.history.push('/')
    }


    //Render method
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create a new project</h5>
                    <div className='row'>
                        <div className='col l6 m12 s12'>
                            <div className="input-field">
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" value={this.state.title} onChange={this.handleChange} />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col m12 l6 s12'>
                            <div className="input-field">
                                <label htmlFor="content">Content</label>
                                <textarea value={this.state.content} className="materialize-textarea" id="content" onChange={this.handleChange} ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="input-field">
                        <button disabled={this.state.disabled} className="btn pink lighten-1 z-depth-0" id='btn' >Create Project</button>
                    </div>
                </form>


            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}


export default connect(null, mapDispatchToProps)(CreateProject)
