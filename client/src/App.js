import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

// Pages
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';
import BusinessSignUp from './pages/SignUp/BusinessSignUp';
import PersonalSignUp from './pages/SignUp/PersonalSignUp';

// Bootstrap
import Container from 'react-bootstrap/Container';

const StyledContainer = styled.div`
	font-family: 'Montserrat', sans-serif;
`;

function App() {
	return (
		<Router>
			<StyledContainer
				style={{
					backgroundColor: '#eceff1',
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100vh',
				}}
			>
				<Switch>
					<Route exact path='/dashboard' component={Dashboard} />
					<Route exact path='/account' component={Account} />
					<Container>
						<Route exact path='/' component={Home} />
						<Route exact path='/login' component={LogIn} />
						<Route exact path='/business' component={BusinessSignUp} />
						<Route exact path='/personal' component={PersonalSignUp} />
					</Container>
				</Switch>
			</StyledContainer>
		</Router>
	);
}

export default App;
