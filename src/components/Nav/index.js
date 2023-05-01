import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { Navbar, Nav } from "react-bootstrap";

function Navigation(props) {
  const {
    pages,
    setCurrentPage,
    currentPage
  } = props;

  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand href="/" className={"pl-5 text-light"}>
        <span role="img" aria-label="camera"> </span> Nigel Loch
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav >
          <Nav.Link onClick={() => setCurrentPage(pages[0])} className={`mx-3 ${currentPage === pages[0] && 'navActive'}`}>About Me</Nav.Link>
          <Nav.Link onClick={() => setCurrentPage(pages[1])} className={`mx-3 ${currentPage === pages[1] && 'navActive'}`}>Projects</Nav.Link>
          <Nav.Link onClick={() => setCurrentPage(pages[2])} className={`mx-3 ${currentPage === pages[2] && 'navActive'}`}>Resume</Nav.Link>
        </Nav>

        <Nav class="float-right flex-row">
          <Nav.Link href="mailto:nigelloch@gmail.com?subject=Hello there!" target="_blank">
            <img className="nav-icon" src={require(`../../assets/icons/mail.png`).default} alt="mail icon"></img>
          </Nav.Link>
          <Nav.Link href="https://dribbble.com/NigelLoch" target="_blank">
            <img className="nav-icon" src={require(`../../assets/icons/dribbble.png`).default} alt="dribbble logo"></img>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/nigel-loch-ba212257/" target="_blank">
            <img className="nav-icon" src={require(`../../assets/icons/linkedin.png`).default} alt="linkedin logo"></img>
          </Nav.Link>
          <Nav.Link href="https://github.com/nigelloch" target="_blank">
            <img className="nav-icon" src={require(`../../assets/icons/github.png`).default} alt="github logo"></img>
          </Nav.Link>
        </Nav>
        </Navbar.Collapse>
    
    </Navbar>
  );
}

export default Navigation;
