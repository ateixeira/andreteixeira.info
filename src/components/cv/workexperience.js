import React from 'react';
import { Table, Grid, Row, Col, Button } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import Experience from './experience';

module.exports = React.createClass({
    // RENDER
    render: function() {

    	var rows = [];
    	this.props.experiences.forEach((experience) => {
        	rows.push(<Experience key={experience.id} experience={experience} />);
		});
        
        return (
            <section className="work-experience">
                <div className="workexp wrap">
                    <h2> <FontAwesome name='briefcase' /> Work Experience <small>  &ndash; 10 years committed to full-time jobs, consulting and Startups</small></h2>
                </div>
                <div className="workexp wrap">

                    <Table responsive className="layout">
                        <tbody>{rows}</tbody>
                    </Table>

                </div>
            </section>
        );
    }
});