import React, {Component} from 'react';
import {Container, Col, Row, Navbar, Nav, NavItem, NavLink,NavbarToggler, Collapse, Jumbotron, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, NavbarBrand} from 'reactstrap';

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
                <Container fluid className='header'>
                    <Row>
                    <br></br><i class="fa fa-phone" aria-hidden="true">   Call us today!</i> 
                    </Row>         
                </Container>
                <Navbar  light expand='md' className='Navigation' sticky='top'>
               <a href='/'> <NavbarBrand><img src={require("../marineLumberLogo.png")} width='155' /></NavbarBrand></a>
                <NavbarToggler onClick={this.toggleNav} className="mr-2" color='white'/>
                    <Collapse isOpen={this.state.isNavOpen} navbar navbar-dark>
                             <NavItem className='navitem'>
                                 <NavLink href='/' className='navlink'>Home</NavLink>
                             </NavItem>
                             <NavItem className='navitem'>
                                 <NavLink href='/projects' className='navlink'>Our Company</NavLink>
                             </NavItem>
                             <UncontrolledDropdown className='navitem'>
{/* =======
                <Jumbotron fluid className='header'>
                        <img src={require("../marineLumberLogo2.png")} width='650' />       
                </Jumbotron>
                <Navbar  color='faded' light expand='md' className='Navigation' sticky='top'>
                <NavbarToggler onClick={this.toggleNav} className="mr-2"/>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                      
                             <NavItem>
                                 <NavLink href='/' className='navlink'>Home</NavLink>
                             </NavItem>
                             <NavItem>
                                 <NavLink href='/projects' className='navlink'>Our Company</NavLink>
                             </NavItem>

                             <UncontrolledDropdown> */}

                                 <DropdownToggle nav caret className='navlink'>
                                     Products
                                 {/* <NavLink className='navlink' href='/about'>Products</NavLink> */}
                                 </DropdownToggle>
                                 <DropdownMenu right>
                                     <DropdownItem>
                                         Wood products 1
                                     </DropdownItem>
                                     <DropdownItem>
                                         Wood products 2
                                     </DropdownItem>
                                     <DropdownItem>
                                         Wood products 3
                                     </DropdownItem>
                                     <DropdownItem>
                                         Wood products 4
                                     </DropdownItem>
                                     <DropdownItem>
                                         Wood products 5
                                     </DropdownItem>
                                     <DropdownItem>
                                         Wood products 6
                                     </DropdownItem>
                                     <DropdownItem>
                                         Wood products 7
                                     </DropdownItem>
                                 </DropdownMenu>
                             </UncontrolledDropdown>

                             <NavItem className='navitem'>
                                 <NavLink href='/contact' className='navlink'>Contact</NavLink>
                             </NavItem>
                             <NavItem className='navitem'>
                                 <NavLink href='/contact' className='navlink'>Glossary of Lumber Terms</NavLink>
                             </NavItem>
                    </Collapse>
                </Navbar>
                
            </React.Fragment>
        );
    }
}

export default Header;