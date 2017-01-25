import React from 'react';
import FontAwesome from 'react-fontawesome';
 
module.exports = React.createClass({

    // RENDER
    render: function() {
        
        return (
            <tr>
                <td className="dates">
                    from <strong> Ago, 2001 </strong>
                    <br/>
                    until <strong> Ago 2004</strong>
                </td>

                <td className="line">
                    <span className="vertical-line"></span>
                    <span className="bullet"></span>
                </td>
                <td className="content">
                    <p className="position">
                        <strong> FrontEnd Engineer </strong>
                        <span className="tag"> #Android </span>
                        <span className="tag"> #Android </span>
                        <span className="tag"> #Android </span>
                        <span className="tag"> #Android </span>
                    </p>
                    <p className="company">
                        <FontAwesome name='home' />
                        <span className="">Urbanizo &ndash; Brasília, DF, Brazil</span>
                        <FontAwesome name='user' />
                        <span className="">Marcos Beto</span>
                        <FontAwesome name='phone' />
                        <span className="">+55 61 98158-5100</span>
                    </p>
                    <p className="description">
                        Very strong Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis turpis ac porttitor malesuada. Donec eu vehicula tortor. Nulla scelerisque augue turpis, vel vestibulum turpis gravida id. Maecenas vel efficitur ligula.
                    </p>
                </td>
            </tr>

        );
    }
});
