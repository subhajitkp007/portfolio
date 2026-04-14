import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiSmartphone } from 'react-icons/fi';
import './About.css';

const highlights = [
  { icon: FiCode, label: 'Frontend Dev', color: '#6c63ff' },
  { icon: FiServer, label: 'Backend Dev', color: '#00d4ff' },
  { icon: FiDatabase, label: 'Database', color: '#ff6b6b' },
  { icon: FiSmartphone, label: 'Mobile Dev', color: '#ffc107' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Get to know me better
        </motion.p>

        <div className="about-grid">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="avatar-wrapper">
              <div className="avatar-ring" />
              <div className="avatar-bg">
                <span className="avatar-initials">SM</span>
              </div>
              <div className="avatar-badge">
                <span>🚀</span>
              </div>
            </div>

            <div className="about-highlights">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  className="highlight-card glass-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  style={{ '--card-color': h.color }}
                >
                  <h.icon size={20} style={{ color: h.color }} />
                  <span>{h.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="about-heading">
              A passionate developer who loves building
              <span className="highlight"> digital experiences</span>
            </h3>

            <p>
              I&apos;m Subhajit Mahata, a Full Stack Developer based in West Bengal, India.
              With over 3 years of professional experience, I specialize in building
              scalable web applications using modern technologies like React, Node.js,
              and cloud platforms.
            </p>

            <p>
              My journey in software development started with curiosity about how
              websites work, and evolved into a passion for crafting robust,
              user-friendly applications. I enjoy solving complex problems and
              turning ideas into reality through clean, efficient code.
            </p>

            <p>
              When I&apos;m not coding, you can find me exploring new technologies,
              contributing to open source, or sharing knowledge with the developer community.
            </p>

            <div className="about-info">
              {[
                { label: 'Name', value: 'Subhajit Mahata' },
                { label: 'Location', value: 'West Bengal, India' },
                { label: 'Email', value: 'subhajitmahata@email.com' },
                { label: 'Availability', value: 'Open to opportunities' },
              ].map((item) => (
                <div key={item.label} className="info-item">
                  <span className="info-label">{item.label}:</span>
                  <span className="info-value">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a
                href="https://www.linkedin.com/in/subhajitmahata"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View LinkedIn
              </a>
              <a
                href="https://github.com/subhajitkp007"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                GitHub Profile
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
