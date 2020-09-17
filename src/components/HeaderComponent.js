import React, {Component} from 'react';
import {Container, Col, Row, Navbar, Nav, NavItem, NavLink,NavbarToggler, Collapse, Jumbotron, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu, NavbarBrand, Button} from 'reactstrap';

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
                    <Row className='callUs'>
                   <a href='tel: +1234567890'><i class="fa fa-phone" aria-hidden="true"> CALL US TODAY!</i></a>
                    </Row>         
                </Container>
                <Navbar  light expand='md' className='Navigation'>
               <a href='/'> <NavbarBrand><img src={require("../marineLumberLogo3.png")} width='155' /></NavbarBrand></a>
                <NavbarToggler onClick={this.toggleNav} className="mr-2" color='white'/>
                    <Collapse isOpen={this.state.isNavOpen} navbar navbar-dark>
                             <NavItem className='navitem'>
                                 <NavLink href='/' className='navlink'>Home</NavLink>
                             </NavItem>
                             <NavItem className='navitem'>
                                 <NavLink href='/about' className='navlink'>Our Company</NavLink>
                             </NavItem>
                             <UncontrolledDropdown className='navitem'>


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
                                 <NavLink href='/Glossary' className='navlink'>Glossary of Lumber Terms</NavLink>
                             </NavItem>
                    </Collapse>
                </Navbar>
                
            </React.Fragment>
        );
    }
}

export default Header;