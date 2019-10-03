import React, { Component } from 'react';
import styled from 'styled-components';

import TodoList from './components/TodoComponents/TodoList';


const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 30px;

	font-size: 2rem;

	h1 {
		margin: 10px;
		font-size: 5rem;
	}

	h3 {
		margin: 5px;
		font-size: 3rem;
	}

	.done {
		text-decoration: line-through;
	}

`;



class App extends Component {
	constructor() {
		super();

		this.state = {
			newtask: '',
			todolist: []
		};
	}


	submitHandler = (e) => {
		e.preventDefault();

		if (this.state.newtask === '') return;

		const newTodo = {
			id: Date.now(),
			task: this.state.newtask,
			completed: false
		};

		this.setState({
			newtask: '',
			todolist: [...this.state.todolist, newTodo]
		});
	}


	resetForm = (e) => {
		e.preventDefault();
		const newlist = this.state.todolist.filter(item => !item.completed);

		this.setState({...this.state, todolist: newlist});
	}


	toggleDone = (e, id) => {
		e.preventDefault();

		const newlist = this.state.todolist.map(item => ({
			...item,
			completed: item.id === id ? !item.completed : item.completed
		}));

		this.setState({...this.state, todolist: newlist});
	}


	handleChange = (e) => {
		e.preventDefault();
		this.setState({...this.state, [e.target.name]: e.target.value })
	}


	render() {
		return (
			<AppWrapper>
				<h1>To-Do!</h1>
				<h3>Your Tasks:</h3>

				<TodoList todolist={this.state.todolist} todoClick={this.toggleDone} />
				
			    <form onSubmit={this.submitHandler}>
				    <input
				        onChange={this.handleChange}
				        placeholder="Enter new task"
				        type="text"
				        name="newtask"
				        value={this.state.newtask}
				    />
				    <button type="submit">Add Task</button>
				    <button onClick={this.resetForm}>Clear Completed</button>
			    </form>
			</AppWrapper>
		);
	}
}

export default App;
