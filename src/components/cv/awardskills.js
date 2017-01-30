import React from 'react';
import { Table, Grid, Row, Col, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import Skill from './skill';

module.exports = React.createClass({
    // RENDER
    render: function() {

        var column1 = [];
        var column2 = [];
        var skills_length = this.props.skills.length;

        this.props.skills.forEach((skill) => {
            if (skill.id <= skills_length/2) {
                column1.push(<Skill key={skill.id} skill={skill} />);
            } else {
                column2.push(<Skill key={skill.id} skill={skill} />);
            }
        });
        
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
                                                            {column1}
                                                        </ul>
                                                    </td>
                                                    <td width='50%'>
                                                        <ul>
                                                            {column2}
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