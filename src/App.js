import React, { Component } from 'react';
import styled from 'styled-components';

import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 30px;

	font-size: 2rem;

	h1 {
		margin: 20px;
		font-size: 5rem;
	}

	h3 {
		margin-bottom: 20px;
		font-size: 3rem;
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


	addTodo = (newtask) => {
		const newTodo = {
			id: Date.now(),
			task: newtask,
			completed: false
		};

		this.setState({
			newtask: '',
			todolist: [...this.state.todolist, newTodo]
		});
	}


	resetForm = () => {
		const newlist = this.state.todolist.filter(item => !item.completed);

		this.setState({...this.state, todolist: newlist});
	}


	toggleDone = (id) => {
		const newlist = this.state.todolist.map(item => ({
			...item,
			completed: item.id === id ? !item.completed : item.completed
		}));

		this.setState({...this.state, todolist: newlist});
	}


	render() {
		return (
			<AppWrapper>
				<h1>To-Do!</h1>
				<h3>Your Tasks:</h3>

				<TodoList todolist={this.state.todolist} todoClick={this.toggleDone} />
				
				<TodoForm addTodo={this.addTodo} resetForm={this.resetForm} />
			</AppWrapper>
		);
	}
}

export default App;
