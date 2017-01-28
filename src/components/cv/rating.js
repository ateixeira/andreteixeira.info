import React from 'react';
import FontAwesome from 'react-fontawesome';

module.exports = React.createClass({
        
    // RENDER
    render: function() {
        var rating_bullets = [];

        [0,1,2,3,4].forEach((i) => {
            var is_active = i < this.props.level;
            if (is_active) {
                rating_bullets.push(<FontAwesome name="circle" />);
            } else {
                rating_bullets.push(<FontAwesome name="circle-o" />);
            }
        });

        return (
            <span className="rating fa accent">{rating_bullets}</span>
        );
    }
});