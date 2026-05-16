import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-white bg-opacity-5 border-top border-white border-opacity-10">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-4 fw-800 text-white">Say <span className="text-primary">Hello!</span></h2>
          <div className="mx-auto bg-primary mt-2" style={{ width: '40px', height: '4px', borderRadius: '10px' }}></div>
          <p className="text-secondary mt-3">I'm always open to discussing new projects or creative ideas.</p>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-picto p-5"
            >
              <Row className="mb-5 text-center">
                <Col md={6} className="mb-3 mb-md-0">
                  <div className="d-flex flex-column align-items-center">
                    <div className="bg-primary bg-opacity-20 p-3 rounded-circle mb-2 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                       <FaEnvelope className="text-white" size={24} />
                    </div>
                    <h6 className="fw-bold mb-0 text-white">Email</h6>
                    <p className="text-secondary small">alamsohail002@gmail.com</p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="d-flex flex-column align-items-center">
                    <div className="bg-primary bg-opacity-20 p-3 rounded-circle mb-2 d-flex align-items-center justify-content-center" style={{ width: '60px', height: '60px' }}>
                       <FaPhoneAlt className="text-white" size={24} />
                    </div>
                    <h6 className="fw-bold mb-0 text-white">Phone</h6>
                    <p className="text-secondary small">+91 8102668516</p>
                  </div>
                </Col>
              </Row>

              <Form>
                <Row className="g-4">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small fw-bold text-white">Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Your Name" 
                        className="bg-white bg-opacity-5 border-white border-opacity-10 p-3 rounded-4 text-white custom-input"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label className="small fw-bold text-white">Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="email@example.com" 
                        className="bg-white bg-opacity-5 border-white border-opacity-10 p-3 rounded-4 text-white custom-input"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mt-4">
                  <Form.Label className="small fw-bold text-white">Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    placeholder="How can I help you?" 
                    className="bg-white bg-opacity-5 border-white border-opacity-10 p-3 rounded-4 text-white custom-input"
                  />
                </Form.Group>

                <div className="text-center mt-5">
                  <Button className="btn-picto-primary w-100 py-3 shadow-lg">
                    Send Message <FaPaperPlane className="ms-2" size={14} />
                  </Button>
                </div>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
