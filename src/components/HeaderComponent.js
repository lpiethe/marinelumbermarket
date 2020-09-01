import React, {Component} from 'react';
import {Container, Col, Row, Navbar, Nav, NavItem, NavLink,NavbarToggler, Collapse} from 'reactstrap';

class Header extends Component {
    constructor(props){
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row className='header'>
                        <img src={require("../marineLumberLogo.png")} width='250px' />
                    </Row>
                </Container>
                <Navbar fluid color='faded' light expand='md'>
                <NavbarToggler onClick={this.toggleNav} className="mr-2"/>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Container fluid className='Navigation'>
                             <NavItem>
                                 <NavLink href='/' className='navlink'>Home</NavLink>
                             </NavItem>
                             <NavItem>
                                 <NavLink href='/projects' className='navlink'>Portfolio</NavLink>
                             </NavItem>
                             <NavItem>
                                 <NavLink className='navlink' href='/about'>About</NavLink>
                             </NavItem>
                             <NavItem>
                                 <NavLink href='/contact' className='navlink'>Contact</NavLink>
                             </NavItem>
                        </Container>
                    </Collapse>
                </Navbar> 
            </React.Fragment>
        );
    }
}

export default Header;