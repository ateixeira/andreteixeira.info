import React from 'react';
import { Table, Grid, Row, Col, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
 
module.exports = React.createClass({

    // RENDER
    render: function() {
        
        return (
            <div className="home">
                <Grid>
                    <Row>
                        <Col xs={12} md={12}>
                        	<div className="title">
                            	<strong>André Teixeira</strong>
                        	</div>
                        	<div className="description">
                        	Web Developer, Computer Scientist.
                        	</div>
                        	<div className="links">
                            	<Grid>
				                    <Row>
				                        <Col xs={4} md={4}></Col>
				                        <Col xs={1} md={1}><a href='https://github.com/ateixeira/' target='_'><FontAwesome name='github-alt' /></a></Col>
				                        <Col xs={1} md={1}><a href='http://stackoverflow.com/users/955183/' target='_'><FontAwesome name='stack-overflow' /></a></Col>
				                        <Col xs={1} md={1}><a href='https://www.linkedin.com/in/andret/' target='_'><FontAwesome name='linkedin' /></a></Col>
				                        <Col xs={1} md={1}><a href='https://twitter.com/andreteixeira' target='_'><FontAwesome name='twitter' /></a></Col>
				                        <Col xs={4} md={4}></Col>
				                    </Row>
                            	</Grid>
                        	</div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
});