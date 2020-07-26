import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';

// Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const Header = (props) => {
	const [expanded, setExpanded] = useState(false);
	return (
		<Fragment>
			<Navbar
				sticky='top'
				style={{ backgroundColor: 'white' }}
				className='bs-navbar-collapse shadow-sm'
				expand='lg'
				expanded={expanded}
			>
				<Container>
					<Fragment>
						<LinkContainer to='/dashboard'>
							<Navbar.Brand>
								<Image src={'/logo.png'} fluid style={{ maxWidth: 150 }} />
							</Navbar.Brand>
						</LinkContainer>
						<Navbar.Toggle
							aria-controls='basic-navbar-nav'
							onClick={() => setExpanded(expanded ? false : 'expanded')}
						/>

						<Navbar.Collapse id='basic-navbar-nav'>
							<Nav className='ml-auto'>
								<LinkContainer
									to='/dashboard'
									onClick={() => setExpanded(false)}
								>
									<Nav.Link>Dashboard</Nav.Link>
								</LinkContainer>
								<LinkContainer to='/account' onClick={() => setExpanded(false)}>
									<Nav.Link>Account</Nav.Link>
								</LinkContainer>
							</Nav>
						</Navbar.Collapse>
					</Fragment>
				</Container>
			</Navbar>
		</Fragment>
	);
};

Header.propTypes = {};

export default Header;
