import React, { Component } from 'react';
import styled from 'styled-components';


const TFWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 30px;

	.task-input {
		width: 350px;
		height: 30px;
	}

	.button-bar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: 20px 0;

		width: 350px;

		button {
			display: flex;
			flex-direction: row;
			justify-content: center;

			width: 150px;
			height: 30px;
		}
	}

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
				    	className='task-input'
				        onChange={this.handleChange}
				        placeholder="Enter new task"
				        type="text"
				        name="newtask"
				        value={this.state.newtask}
				    />
				    <div className='button-bar'>
					    <button type="submit">Add Task</button>
					    <button onClick={this.clearCompleted}>Clear Completed</button>
					</div>
			    </form>
			</TFWrapper>
		);

	}
}

export default TodoForm;
