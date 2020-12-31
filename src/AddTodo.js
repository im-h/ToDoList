import React, { Component } from 'react'


class AddTodo extends Component {
    
    state = {
        content: ''
    }

    // handler functions
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        if (this.state.content !== ""){
            console.log("Yes")
            e.preventDefault();
            console.log(this.state);
            this.props.addTodo(this.state);
            this.setState({
                content: ''
            });
        }
        else {
            e.preventDefault();
            console.log("Nothing")
        }
    }


    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add a To-do: </label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}></input>
                    <p className="right-align">
                    <button className="btn waves-effect waves-light blue darken-1 right-align">Add</button>
                    </p>
                </form>
            </div>
        )
    }
}

export default AddTodo;