import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.svg'
import Offcanvas from "react-bootstrap/Offcanvas";
import {Button, NavDropdown} from "react-bootstrap";
import iconcalender from '../images/icon-calendar.svg'
import icontodo from '../images/icon-todo.svg'
import iconreminder from '../images/icon-reminders.svg'
import iconplanning from '../images/icon-planning.svg'
import icondown from '../images/icon-arrow-down.svg'
import iconup from '../images/icon-arrow-up.svg'
import './Navbar.css'
import {useState} from "react";


const expand = 'lg'

function NavBar() {
    const [toggleDropdownFeature, setToggleDropdownFeature] = useState(false)
    const [toggleDropdownCompany, setToggleDropdownCompany] = useState(false)

    const navDropdownFeature = (<div>Features <img src={toggleDropdownFeature ? icondown: iconup} alt={'toggle-icon'}/></div>);
    const navDropdownCompany = (<div>Company <img src={toggleDropdownCompany ? icondown: iconup} alt={'toggle-icon'}/></div>);


    const handleToggle = (target) =>{
        if(target === 'company'){
            setToggleDropdownCompany(!toggleDropdownCompany)
        }else{
            setToggleDropdownFeature(!toggleDropdownFeature)

        }
    }

    return (
        <Navbar key={expand} expand={expand} className={"p-4 me-1"}>
            <Container fluid>
                <Navbar.Brand href={"#"}><img src={logo} alt={'img-logo'} className={'pe-5'}/></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement={"end"}
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className={'mt-5'}>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className={"me-auto my-2 my-lg-0 gap-3"}

                             navbarScroll>
                            <NavDropdown title={navDropdownFeature} href="#action1" className={'fw-bold feature'} onClick={() => handleToggle('feature')} >
                                <NavDropdown.Item href="#action/3.1" className={'icon-nav-format'}><img src={icontodo} alt={'todo-icon'}/>Todo List</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" className={'icon-nav-format'}><img src={iconcalender} alt={'calender-icon'}/>Calender</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className={'icon-nav-format1'}><img src={iconreminder} alt={'reminder-icon'}/>Reminders</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" className={'icon-nav-format'}><img src={iconplanning} alt={'planning-icon'}/>Planning</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title={navDropdownCompany} href="#action2" className={'fw-bold company'} onClick={() => handleToggle('company')}>
                                <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Out Team</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href={"#action3"} className={'fw-bold'}>Careers</Nav.Link>
                            <Nav.Link href={"#action4"} className={'fw-bold'}>About</Nav.Link>
                        </Nav>
                        <Container className="d-flex justify-content-end">
                            <Button className={'me-4 button-login'}>Login</Button>
                            <Button variant="outline-dark">Register</Button>
                        </Container>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
}

export default NavBar;
