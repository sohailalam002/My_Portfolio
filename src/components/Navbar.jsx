import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaLinkedin } from 'react-icons/fa';

const Navigation = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container fluid>
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <div className="logo-circle me-3">S</div>
          <span className="navbar-brand-name fw-bold fs-4 d-none d-sm-block text-white">Sohail   <span className="text-primary">Alam</span></span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1) grayscale(100%) brightness(2)' }}></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((link) => (
              <Nav.Link key={link.name} href={link.href} className="nav-text-link">
                {link.name}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="align-items-center flex-row gap-3">
            <Nav.Link
              href="https://www.linkedin.com/in/sohail-alam-4a1783322"
              target="_blank"
              className="text-primary p-0"
            >
              <FaLinkedin size={24} />
            </Nav.Link>
            <Nav.Link href="#contact" className="contact-btn text-white px-4">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
