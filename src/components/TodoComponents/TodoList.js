import React from 'react';
import styled from 'styled-components';


const TLWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 30px;

	font-size: 2rem;

	li {
		margin: 10px;
		font-size: 2rem;
	}

	.done {
		text-decoration: line-through;
	}

`;



const TodoList = (props) =>  {


	return (
		<TLWrapper>

			<ul>
				{props.todolist.map(todo => {
					return (
						<li key={todo.id}
							className={todo.completed ? 'done' : ''}
							onClick={e => props.todoClick(e, todo.id)} >
							{todo.task}
						</li>
					);
				})}
			</ul>
			
		</TLWrapper>
	);

};


export default TodoList;
