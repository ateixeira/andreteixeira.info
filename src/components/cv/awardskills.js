import React from 'react';
import { Table, Grid, Row, Col, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

module.exports = React.createClass({
    // RENDER
    render: function() {
        
        return (
            <section className="education-skills">
                <div className="wrap">
                    <Table responsive className="layout">
                        <tbody>
                            <tr>
                                <td width='50%'>
                                    <section className="education-awards">
                                        <h2>
                                            <FontAwesome name='university' /> Education and Awards
                                        </h2>
                                        <ul>
                                            <li>
                                                <FontAwesome name='graduation-cap' /> 
                                                <span>
                                                    <span className="when">2003 &ndash; 2007</span>
                                                </span>
                                                <p className="what">
                                                    Bachelor of Computer Science <span className="where">
                                                        at UniCEUB, Brasília, DF, Brazil</span>
                                                </p>
                                                <p className="description">
                                                    Full-time job and side projects made it very challenging.
                                                </p>
                                            </li>

                                            <li>
                                                <FontAwesome name='graduation-cap' /> 
                                                <span>
                                                    <span className="when">2003 &ndash; 2007</span>
                                                </span>
                                                <p className="what">
                                                    Bachelor of Computer Science <span className="where">
                                                        at UniCEUB, Brasília, DF, Brazil</span>
                                                </p>
                                                <p className="description">
                                                    Full-time job and side projects made it very challenging.
                                                </p>
                                            </li>

                                            <li>
                                                <FontAwesome name='trophy' /> 
                                                <span>
                                                    <span className="when">August 2011</span>
                                                </span>
                                                <p className="what">
                                                    <strong>1st place</strong> at Sua Ideia Vale um Milhão
                                                </p>
                                                <p className="description">
                                                    The winning idea gave birth to Urbanizo. <br/>
                                                    <a href="http://goo.gl/ayyR1F">goo.gl/ayyR1F</a>
                                                </p>
                                            </li>
                                        </ul>


                                    </section>
                                </td>
                                <td width='50%'>
                                    <section className="skills">
                                        <h2>
                                            <FontAwesome name='tasks' /> Languages and Skills
                                        </h2>
                                        <Table responsive className="layout">
                                            <tbody>
                                                <tr>
                                                    <td width='50%'>
                                                        <ul>

                                                            <li>
                                                                <span className="competence">JavaScript</span>
                                                                <span className="rating">5</span>
                                                                <p className="description">NodeJS, BackboneJS, ReactJS</p>
                                                            </li>


                                                            <li>
                                                                <span className="competence">Python</span>
                                                                <span className="rating">5</span>
                                                                <p className="description">Built a startup using it in backend</p>
                                                            </li>

                                                            <li>
                                                                <span className="competence">English</span>
                                                                <span className="rating">5</span>
                                                                <p className="description">Full professional proeficiency</p>
                                                            </li>

                                                            <li>
                                                                <span className="competence">Spanish</span>
                                                                <span className="rating"> <span className="rating-5"/> </span>
                                                                <p className="description">Sigo aprendiendo</p>
                                                            </li>

                                                        </ul>
                                                    </td>
                                                    <td width='50%'>
                                                        <ul>
                                                            <li>
                                                                <span className="competence">JavaScript</span>
                                                                <span className="rating">5</span>
                                                                <p className="description">Using it professionally since 2003</p>
                                                            </li>
                                                        </ul>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </section>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </section>
        );
    }
});