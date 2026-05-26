import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaArrowRight, FaLinkedin, FaGithub } from 'react-icons/fa';
import sohailImg from '../assets/sohail.png';

const Hero = () => {
  return (
    <section id="home" className="section-padding py-lg-5">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={7}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="display-2 fw-800 mb-4 lh-tight">
                Hello, I'm <br />
                <motion.span
                  className="text-primary d-inline-block"
                  initial={{ opacity: 1, x: 0 }}
                  whileInView={{ opacity: [0, 1], x: [-220, 0] }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 0.75, ease: 'easeOut', delay: 0.25 }}
                >
                  Sohail Alam
                </motion.span>
              </h1>
              <p className="lead text-secondary mb-5 pe-lg-5 fs-4">
                I'm a <strong className="text-dark">MERN Stack Developer</strong> specializing
                in building immersive and beautiful web applications through
                carefully crafted code and user-centric design.
              </p>

              <div className="d-flex flex-wrap gap-4 align-items-center">
                <Button href="#contact" className="btn-picto-primary shadow-lg">
                  Say Hello! <FaArrowRight className="ms-2" size={14} />
                </Button>

                <div className="d-flex gap-3 ms-lg-2">
                  <motion.a
                    whileHover={{ y: -3, color: 'var(--primary-hover)' }}
                    href="https://www.linkedin.com/in/sohail-alam-4a1783322"
                    target="_blank"
                    className="text-white p-2 transition-all d-flex align-items-center justify-content-center bg-white bg-opacity-10 rounded-circle shadow-sm"
                    style={{ width: '45px', height: '45px', backdropFilter: 'blur(10px)' }}
                  >
                    <FaLinkedin size={22} className="text-white" />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3, color: 'var(--primary-hover)' }}
                    href="https://github.com/sohail-alam"
                    target="_blank"
                    className="text-secondary p-2 transition-all d-flex align-items-center justify-content-center bg-white bg-opacity-10 rounded-circle shadow-sm"
                    style={{ width: '45px', height: '45px', backdropFilter: 'blur(10px)' }}
                  >
                    <FaGithub size={22} className="text-white" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </Col>

          <Col lg={5} className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="position-relative d-inline-block"
            >
              {/* Circular Glowing Portrait */}
              <div className="hero-image-circle mx-auto">
                <img
                  src={sohailImg}
                  alt="Sohail Alam"
                  className="img-fluid hero-portrait"
                />
              </div>

              {/* Decorative Elements */}

              {/* MERN */}

            </motion.div>
          </Col>
        </Row>
      </Container>

      <style dangerouslySetInnerHTML={{
        __html: `
        .fw-800 { font-weight: 800; }
        .hero-image-circle {
          position: relative;
          width: 350px;
          height: 350px;
          background: var(--bg-inner); /* Updated for dark theme */
          border: 4px solid var(--primary-color);
          border-radius: 50%;
          padding: 0;
          box-shadow: 0 0 40px rgba(56, 163, 209, 0.28), inset 0 0 20px rgba(189,235,255,0.55);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-portrait {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Zoom in for passport/headshot look */
          object-position: top center; /* Focus on the face/shoulders */
          transform: scale(1.1); /* Slight additional zoom for better framing */
        }
        .freebie-tag {
          background: var(--accent-gradient);
          color: white;
          padding: 10px 25px;
          border-radius: 12px;
          font-weight: 800;
          transform: rotate(-12deg);
          box-shadow: 0 10px 18px -6px rgba(56, 163, 209, 0.32);
          z-index: 10;
        }
      `}} />
    </section>
  );
};

export default Hero;
