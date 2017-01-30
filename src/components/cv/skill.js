import React from 'react';
import FontAwesome from 'react-fontawesome';
 
import Rating from './rating';

module.exports = React.createClass({

    // RENDER
    render: function() {
        

        return (
            <li>
                <span className="competence">{this.props.skill.title}</span>
                <Rating level={this.props.skill.rating}/>
                <p className="description">{this.props.skill.description}</p>
            </li>
        );
    }
});
