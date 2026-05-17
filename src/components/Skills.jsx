import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaWrench } from 'react-icons/fa';

const Skills = () => {
  const skillSets = [
    {
      category: "Frontend",
      icon: <FaCode className="text-primary" size={24} />,
      skills: ["React.js", "JavaScript (ES6+)", "Bootstrap 5", "HTML5/CSS3"]
    },
    {
      category: "Backend",
      icon: <FaServer className="text-primary" size={24} />,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Auth"]
    },
    {
      category: "Database",
      icon: <FaDatabase className="text-primary" size={24} />,
      skills: ["MongoDB", "MySQL", " PostgreSQL", "Mongoose"]
    },
    {
      category: "Tools",
      icon: <FaWrench className="text-primary" size={24} />,
      skills: ["Git", "GitHub", "Swagger", "Postman", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-white bg-opacity-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-4 fw-800 text-white">My <span className="text-primary">Skills</span></h2>
          <div className="mx-auto bg-primary mt-2" style={{ width: '40px', height: '4px', borderRadius: '10px' }}></div>
        </div>

        <Row className="g-4">
          {skillSets.map((set, idx) => (
            <Col key={idx} lg={3} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -15, scale: 1.01 }}
                className="card-picto h-100"
              >
                <div className="bg-white bg-opacity-10 p-3 rounded-circle d-inline-flex mb-4 shadow-sm" style={{ backdropFilter: 'blur(10px)' }}>
                  {set.icon}
                </div>
                <h4 className="fw-bold mb-3 text-white">{set.category}</h4>
                <div className="d-flex flex-wrap gap-2">
                  {set.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="badge-picto">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
