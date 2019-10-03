import React from 'react';
import styled from 'styled-components';


const TDWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;

	.done {
		text-decoration: line-through;
	}

`;


const Todo = (props) =>  {

	const clickHandler = (e) => {
		e.preventDefault();

		props.todoClick(props.todo.id);
	};


	return (
		<TDWrapper>
			<div className={props.todo.completed ? 'done' : ''}
				 onClick={clickHandler} >
				{props.todo.task}
			</div>
		</TDWrapper>
	);
};


export default Todo;
