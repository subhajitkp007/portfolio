import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCloud, FiCpu, FiDatabase, FiLayers } from 'react-icons/fi';
import './About.css';

const highlights = [
  { icon: FiCpu, label: 'AI & GenAI', color: '#6c63ff' },
  { icon: FiCloud, label: 'Cloud (GCP)', color: '#00d4ff' },
  { icon: FiDatabase, label: 'Big Data', color: '#ff6b6b' },
  { icon: FiLayers, label: 'Architecture', color: '#ffc107' },
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
              I&apos;m Subhajit Mahata, currently working with Infosys, an
              India-based global technology company, and based in London Area,
              United Kingdom. I focus on engineering reliable, scalable software
              solutions and continuously improving my craft.
            </p>

            <p>
              As I share on LinkedIn, I&apos;m in the process of becoming the best
              version of myself. I bring a highly motivated mindset to every
              challenge and enjoy working where technology meets impact.
            </p>

            <p>
              Beyond project work, I actively engage in learning initiatives,
              industry activities, and technical communities around software,
              cloud, and AI.
            </p>

            <div className="about-info">
              {[
                { label: 'Name', value: 'Subhajit Mahata' },
                { label: 'Location', value: 'London Area, United Kingdom' },
                { label: 'Current Company', value: 'Infosys' },
                { label: 'Education', value: 'RKMGEC, Purulia (B.Tech CSE)' },
                { label: 'Network', value: '5K followers · 500+ connections' },
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
