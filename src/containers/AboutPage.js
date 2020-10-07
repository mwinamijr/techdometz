import React from 'react';

import { Container, Col, Row } from 'react-bootstrap';

const AboutPage = () => {
	return (
			<div>
				<Container>
				  <Row>
				    <Col sm={8}>sm=8</Col>
				    <Col sm={4}>sm=4</Col>
				  </Row>
				  <Row>
				    <Col sm>sm=true</Col>
				    <Col sm>sm=true</Col>
				    <Col sm>sm=true</Col>
				  </Row>
				</Container>
			</div>
		)
}

export default AboutPage;