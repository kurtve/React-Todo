import React from 'react';
import styled from 'styled-components';


const AppWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	margin-top: 30px;

	h1 {
		font-size: 5rem;
	}
`;


class App extends React.Component {
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
	constructor() {
		super();

	}




	render() {
		return (
			<AppWrapper>
				<div>
					<h1>Todo!</h1>
				</div>
			</AppWrapper>
		);
	}
}

export default App;
