import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

// Components
import Header from '../components/Header';

// Bootstrap
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Spinner from 'react-bootstrap/Spinner';

const Dashboard = (props) => {
	return (
		<Fragment>
			<Header />
			<Container>
				<Card
					style={{ marginTop: 20, marginBottom: 20, borderRadius: 20 }}
					className='shadow-sm'
				>
					<Card.Body style={{ textAlign: 'center' }}>
						<Card.Title>Hi Avi, welcome to Mana you are</Card.Title>
						<Card.Title style={{ color: '#1652F0' }}>
							<p>
								<span style={{ fontWeight: 'bold', fontSize: 120 }}>635</span>th
							</p>
						</Card.Title>
					</Card.Body>
				</Card>
				<Card
					style={{ marginTop: 20, marginBottom: 20, borderRadius: 20 }}
					className='shadow-sm'
				>
					<Card.Body style={{ textAlign: 'center' }}>
						<Card.Title>Invite your friends to move up the list</Card.Title>
						<Card.Title>
							<Container>
								<Row>
									<Col style={{ textAlign: 'right' }}>
										Referrals: <span style={{ color: '#1652F0' }}>1</span>
									</Col>
									<Col style={{ textAlign: 'left' }}>
										Cashback: <span style={{ color: '#1652F0' }}>$1</span>
									</Col>
								</Row>
							</Container>
						</Card.Title>
					</Card.Body>

					<Card.Body>
						<Container>
							<Card
								style={{
									marginTop: 20,
									marginBottom: 20,
									borderRadius: 20,
									backgroundColor: '#0CB068',
									color: 'white',
								}}
								className='shadow-sm'
							>
								<Card.Body style={{ textAlign: 'center' }}>
									<Card.Title>Share Mana</Card.Title>
									<Card.Title>Link</Card.Title>
									<Card.Title>Facebook LinkedIn Twitter</Card.Title>
								</Card.Body>
							</Card>
						</Container>
					</Card.Body>

					<Card.Body style={{ textAlign: 'center' }}>
						<Card.Text>
							Earn $1 cashback for every friend who joins, the top people will
							unlock their cashback when we launch. Refer friends to climb!
						</Card.Text>
					</Card.Body>
				</Card>
			</Container>
		</Fragment>
	);
};

Dashboard.propTypes = {};

export default Dashboard;
