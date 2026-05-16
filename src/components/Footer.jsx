import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-5 bg-white bg-opacity-5 border-top border-white border-opacity-10">
      <Container>
        <div className="d-flex flex-column align-items-center text-center">
          <div className="d-flex gap-4 mb-4">
            <a 
              href="https://www.linkedin.com/in/sohail-alam-4a1783322" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover-primary transition-all scale-hover"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://github.com/sohail-alam" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-secondary hover-primary transition-all scale-hover"
            >
              <FaGithub size={24} />
            </a>
          </div>

          <p className="text-secondary mb-0 fw-600">
            &copy; {new Date().getFullYear()} Sohail Alam. 
            <span className="mx-2 opacity-25">|</span>
            Built with <FaHeart className="mx-1 text-danger" size={12} /> for excellence.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
