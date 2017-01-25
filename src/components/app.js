import React from 'react';

import Cabecalho from './header.js';

module.exports = React.createClass({

    // RENDER
    render: function() {
        
        return (
            <div>
                <br/><br/>
                <Cabecalho />
                <div className="conteudo">
                    {this.props.children}
                </div>
                <br/><br/><br/><br/>
            </div>
        );
    }
});