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
import Form from 'react-bootstrap/Form';

const LogIn = (props) => {
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

								<div style={{ marginTop: 50 }}>
									<Card.Text>Log into you account</Card.Text>
									<Card.Text style={{ textAlign: 'left' }}>
										<Form>
											<Form.Group controlId='formBasicEmail'>
												<Form.Label>Email address</Form.Label>
												<Form.Control type='email' placeholder='Enter email' />
											</Form.Group>

											<Form.Group controlId='formBasicPassword'>
												<Form.Label>Password</Form.Label>
												<Form.Control type='password' placeholder='Password' />
											</Form.Group>

											<Button
												variant='primary'
												className='shadow-sm text-center btn-block'
												type='submit'
											>
												Submit
											</Button>
										</Form>
									</Card.Text>
								</div>
							</Card.Body>
						</Card>
						<div style={{ marginTop: 20, textAlign: 'center' }}>
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
					</Col>
					<Col xs={1} sm={1} md={3}></Col>
				</Row>
			</Container>
		</Fragment>
	);
};

LogIn.propTypes = {};

export default LogIn;
