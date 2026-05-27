import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section-padding border-top border-white border-opacity-10">
      <Container>
        <Row className="g-5 align-items-center">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="display-4 fw-800 mb-4 text-white">Crafting <span className="text-primary">Experiences</span></h2>
              <p className="text-secondary fs-5 mb-4">
                I am a dedicated MERN Stack Developer with hands-on experience in building 
                full-stack web applications. Skilled in <strong className="text-dark">REST APIs, JWT 
                authentication</strong>, and role-based access control.
              </p>
              <p className="text-secondary fs-5 mb-0">
                My focus is on writing clean, scalable code and contributing to real-world projects 
                that make a difference.
              </p>
            </motion.div>
          </Col>
          
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card-picto mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-20 p-3 rounded-circle me-3">
                    <FaGraduationCap size={24} className="text-primary" />
                  </div>
                  <h5 className="fw-bold mb-0 text-white">Education</h5>
                </div>
                <h6 className="fw-bold mb-1">B.Tech - AKTU University</h6>
                <small className="text-secondary">Bachelor of Technology</small>
              </div>

              <div className="card-picto">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary bg-opacity-20 p-3 rounded-circle me-3">
                    <FaBriefcase size={24} className="text-primary" />
                  </div>
                  <h5 className="fw-bold mb-0 text-white">Experience</h5>
                </div>
                <h6 className="fw-bold mb-1">Shiwansh Solutions</h6>
                <small className="text-secondary">Full Stack Developer(MERN) 1+ Year</small>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
