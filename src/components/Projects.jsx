import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaRocket, FaMobileAlt } from 'react-icons/fa';

const Projects = () => {
  const zoomInDown = {
    initial: { opacity: 0, y: -120, scale: 0.75 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: false, amount: 0.45 },
    transition: { duration: 0.55, ease: 'easeOut' }
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured MERN marketplace with secure payments and real-time inventory management.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      icon: <FaRocket size={32} className="text-white" />,
      gradient: "linear-gradient(135deg, #FFFFFF 0%, #BDEBFF 48%, #38A3D1 100%)",
      github: "https://github.com/sohail-alam",
      live: "#"
    },
    {
      title: "Employee Payroll System",
      description: "Automated salary calculation and leave management system built with the MERN stack.",
      tech: ["Node.js", "Express", "MongoDB", "PDF Kit"],
      icon: <FaMobileAlt size={32} className="text-white" />,
      gradient: "linear-gradient(135deg, #EAF8FF 0%, #7ED3F7 52%, #0F6FA8 100%)",
      github: "https://github.com/sohail-alam",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <Container>
        <motion.div className="text-center mb-5" {...zoomInDown}>
          <h2 className="display-4 fw-800 text-white">Featured <span className="text-primary">Projects</span></h2>
          <div className="mx-auto bg-primary mt-2" style={{ width: '40px', height: '4px', borderRadius: '10px' }}></div>
        </motion.div>

        <Row className="g-5">
          {projects.map((project, idx) => (
            <Col key={idx} lg={6}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-picto p-0 overflow-hidden"
              >
                <div 
                  className="p-5 d-flex align-items-center justify-content-center" 
                  style={{ background: project.gradient, minHeight: '200px' }}
                >
                  <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                    {project.icon}
                  </motion.div>
                </div>
                
                <div className="p-5">
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, tIdx) => (
                      <span key={tIdx} className="badge-picto bg-white bg-opacity-10 border-0">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="fw-800 mb-3 fs-2 text-white">{project.title}</h3>
                  <p className="text-secondary mb-4 fs-6">
                    {project.description}
                  </p>
                  <div className="d-flex gap-3">
                    <Button href={project.github} target="_blank" className="btn-picto-primary py-2 px-4 fs-6 shadow-none">
                      <FaGithub className="me-2" /> Github
                    </Button>
                    <Button href={project.live} target="_blank" variant="outline-light" className="border-2 rounded-4 fw-bold px-4 hover-shadow">
                      <FaExternalLinkAlt className="me-2" size={14} /> Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
