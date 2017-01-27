import React from 'react';
import FontAwesome from 'react-fontawesome';
 
module.exports = React.createClass({

    // RENDER
    render: function() {
        
        var hashtags = [];
        this.props.experience.hashtags.forEach((hashtag) => {
            hashtags.push(<span className="tag"> #{hashtag} </span>);
        });

        return (
            <tr>
                <td className="dates">
                    from <strong> {this.props.experience.from} </strong>
                    <br/>
                    until <strong> {this.props.experience.until} </strong>
                </td>

                <td className="line">
                    <span className="vertical-line"></span>
                    <span className="bullet"></span>
                </td>
                <td className="content">
                    <p className="position">
                        <strong> {this.props.experience.title} </strong>
                        {hashtags}

                    </p>
                    <p className="company">
                        <FontAwesome name='home' />
                        <span className=""> {this.props.experience.location} </span>
                        <FontAwesome name='user' />
                        <span className=""> {this.props.experience.contact_name} </span>
                        <FontAwesome name={this.props.experience.contact_icon} />
                        <span className=""> {this.props.experience.contact_value} </span>
                    </p>
                    <p className="description">
                        {this.props.experience.information}
                    </p>
                </td>
            </tr>

        );
    }
});
