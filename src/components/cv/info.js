import React from 'react';
import { Table, Grid, Row, Col, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

module.exports = React.createClass({
    // RENDER
    render: function() {
        
        return (
            <header className="info">

                <div className="name wrap">
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={12}>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={12} md={12}>
                                <strong>André Teixeira</strong>
                                <p className="message">Looking for an opportunity to work with innovative teams as an experienced FrontEnd Software Engineer</p>
                            </Col>
                        </Row>
                    </Grid>
                </div>

                <div className="contact wrap">
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={12} md={6}>
                                <ul>
                                    <li><FontAwesome name='phone' /> +55 (61) 98118-5049 </li>
                                </ul>
                                <ul>
                                    <li><FontAwesome name='envelope-open-o' /> <a href="mailto:andre.teixeira@gmail.com" target="_blank"> andre.teixeira@gmail.com </a></li>
                                </ul>
                                <ul>
                                    <li><FontAwesome name='map-marker' /> <a href="https://www.google.com/maps/@-15.7912711,-47.8903537,12z" target="_blank"> -15.7912711, -47.8903537 </a></li>
                                </ul>
                            </Col>
                            <Col xs={12} md={6}>
                                <ul>
                                    <li> <FontAwesome name='github-alt' /> <a href="https://github.com/ateixeira" target="_blank"> github.com/ateixeira </a></li>
                                </ul>
                                <ul>
                                    <li> <FontAwesome name='stack-overflow' /> <a href="http://stackoverflow.com/users/955183/andr%C3%A9-teixeira" target="_blank"> stackoverflow.com/users/955183/ </a> </li>
                                </ul>
                                <ul>
                                    <li> <FontAwesome name='link' /> <a href="http://www.andreteixeira.info/" > andreteixeira.info </a></li>
                                </ul>
                            </Col>
                        </Row>                            
                    </Grid>                            
                    

                </div>

            </header>
        );
    }
});