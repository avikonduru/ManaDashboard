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

const PersonalSignUp = (props) => {
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
								<div style={{ marginBottom: 30 }}>
									<Card.Text style={{ color: '#1652F0' }}>
										Create a personal Mana account
									</Card.Text>
									<Card.Text style={{ textAlign: 'left' }}>
										<Form>
											<Form.Group controlId='formBasicName'>
												<Form.Label>Full Name</Form.Label>
												<Form.Control placeholder='Enter full name' />
											</Form.Group>

											<Form.Group controlId='formBasicEmail'>
												<Form.Label>Email address</Form.Label>
												<Form.Control type='email' placeholder='Enter email' />
											</Form.Group>

											<Form.Group controlId='formBasicPassword'>
												<Form.Label>Password</Form.Label>
												<Form.Control type='password' placeholder='Password' />
											</Form.Group>

											<Form.Group controlId='formBasicCheckbox'>
												<Form.Check
													type='checkbox'
													label='I have read and agree to the Trilo Terms of Service and Privacy Policy.'
												/>
											</Form.Group>

											<Form.Group controlId='formBasicCheckbox'>
												<Form.Check
													type='checkbox'
													label='Keep me in the loop for my Trilo updates'
												/>
											</Form.Group>

											<Button
												variant='primary'
												className='shadow-sm text-center btn-block'
												type='submit'
											>
												Sign Up
											</Button>
										</Form>
									</Card.Text>
								</div>
								<div tyle={{ marginTop: 30 }}>
									<Card.Text>
										<Button
											variant='primary'
											className='shadow-sm text-center btn-block'
										>
											Create a business account
										</Button>
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

PersonalSignUp.propTypes = {};

export default PersonalSignUp;
