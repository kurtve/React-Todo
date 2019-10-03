import React, { Component } from 'react';
import styled from 'styled-components';


const TFWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 30px;

	font-size: 1.8rem;

`;


class TodoForm extends Component {
	constructor() {
		super();

		// local state: form input field
		this.state = { newtask: '' };
	}


	handleChange = (e) => {
		e.preventDefault();
		this.setState({ [e.target.name]: e.target.value });
	};


	clearCompleted = (e) => {
		e.preventDefault();

		// send request up the chain to clear completed
		this.props.resetForm();
	};


	submitHandler = (e) => {
		e.preventDefault();

		// if input field is blank, ignore the submit
		if (this.state.newtask === '') return;

		// send the task up the chain to be added to list
		this.props.addTodo(this.state.newtask);

		// blank out the input field
		this.setState( { newtask: '' } );
	};


	render() {

		return (
			<TFWrapper>			
			    <form onSubmit={this.submitHandler}>
				    <input
				        onChange={this.handleChange}
				        placeholder="Enter new task"
				        type="text"
				        name="newtask"
				        value={this.state.newtask}
				    />
				    <button type="submit">Add Task</button>
				    <button onClick={this.clearCompleted}>Clear Completed</button>
			    </form>
			</TFWrapper>
		);

	}
}

export default TodoForm;
