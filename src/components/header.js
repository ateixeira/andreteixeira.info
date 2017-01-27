import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

module.exports = React.createClass({
  render: function() {
    return (
        <div className="cabecalho">
            <Navbar collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">andreteixeira</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/cv">
                            <NavItem eventKey={1} href="#"> .cv </NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
  }
});