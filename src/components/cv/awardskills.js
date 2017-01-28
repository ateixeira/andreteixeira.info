import React from 'react';
import { Table, Grid, Row, Col, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import Rating from './rating';

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
                                                                <Rating level={5}/>
                                                                <p className="description">NodeJS, BackboneJS, ReactJS</p>
                                                            </li>

                                                            <li>
                                                                <span className="competence">Python</span>
                                                                <Rating level={5}/>
                                                                <p className="description">Built a startup using it in backend</p>
                                                            </li>

                                                            <li>
                                                                <span className="competence">Java</span>
                                                                <Rating level={3}/>
                                                                <p className="description">Mostly on application server side</p>
                                                            </li>

                                                            <li>
                                                                <span className="competence">English</span>
                                                                <Rating level={5}/>
                                                                <p className="description">Full professional proeficiency</p>
                                                            </li>

                                                            <li>
                                                                <span className="competence">Spanish</span>
                                                                <Rating level={4}/>
                                                                <p className="description"><i>Sigo aprendiendo</i></p>
                                                            </li>

                                                        </ul>
                                                    </td>
                                                    <td width='50%'>
                                                        <ul>
                                                            <li>
                                                                <span className="competence">Back-end</span>
                                                                <Rating level={5}/>
                                                                <p className="description">Django, NodeJS, Rails</p>
                                                            </li>

                                                            <li>
                                                                <span className="competence">Front-end</span>
                                                                <Rating level={5}/>
                                                                <p className="description">BackboneJS, ReactJS, Angular, SASS</p>
                                                            </li>

                                                            <li>
                                                                <span className="competence">Databases</span>
                                                                <Rating level={4}/>
                                                                <p className="description">MongoDB, OracleDB, MySQL</p>
                                                            </li>

                                                            <li>
                                                                <span className="competence">Design</span>
                                                                <Rating level={3}/>
                                                                <p className="description">"Independent programmer"</p>
                                                            </li>

                                                            <li>
                                                                <span className="competence">OS</span>
                                                                <Rating level={4}/>
                                                                <p className="description">Linux, Unix, Shell script</p>
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