import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Bootstrap
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';

const Home = (props) => {
	return (
		<Fragment>
			<Container style={{ marginTop: 50, marginBottom: 50 }}>
				<Row>
					<Col xs={1} sm={1} md={3}></Col>
					<Col xs={11} sm={11} md={6} style={{ flex: 1 }}>
						<Card
							style={{ textAlign: 'center', borderRadius: 20 }}
							className='shadow-sm text-center p-3'
						>
							<Card.Body>
								<div style={{ marginBottom: 50 }}>
									<Card.Title>
										<Card.Img
											variant='top'
											src='/logo.png'
											style={{ maxWidth: 220 }}
										/>
									</Card.Title>
								</div>

								<div style={{ marginTop: 50, marginBottom: 50 }}>
									<Card.Text style={{ color: '#f07416', fontWeight: 'bold' }}>
										Join our network to get access to our beta
									</Card.Text>
									<Card.Text>
										<Button
											variant='primary'
											style={{
												backgroundColor: '#1652F0',
												borderColor: '#1652F0',
												borderRadius: 30,
												fontWeight: 'bold',
											}}
											className='shadow-sm text-center p-3 btn-block'
										>
											Business Sign Up
										</Button>
									</Card.Text>
									<Card.Text>
										<Button
											variant='primary'
											style={{
												backgroundColor: '#f07416',
												borderColor: '#f07416',
												borderRadius: 30,
												fontWeight: 'bold',
											}}
											className='shadow-sm text-center p-3 btn-block'
										>
											Personal Sign Up
										</Button>
									</Card.Text>
								</div>

								<div style={{ marginTop: 50 }}>
									<Card.Text style={{ color: '#1652F0', fontWeight: 'bold' }}>
										Already have an account?
									</Card.Text>
									<Card.Text>
										<Button
											variant='outline-primary'
											style={{
												borderRadius: 30,
												fontWeight: 'bold',
											}}
											className='shadow-sm text-center p-3 btn-block'
										>
											Log In
										</Button>
									</Card.Text>
								</div>
							</Card.Body>
						</Card>
					</Col>
					<Col xs={1} sm={1} md={3}></Col>
				</Row>
			</Container>
		</Fragment>
	);
};

Home.propTypes = {};

export default Home;
