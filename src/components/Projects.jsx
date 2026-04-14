import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import './Projects.css';

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce application with product management, cart, authentication, and payment integration using Stripe.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    github: 'https://github.com/subhajitkp007',
    live: '#',
    gradient: 'linear-gradient(135deg, #6c63ff 0%, #00d4ff 100%)',
    icon: '🛒',
    featured: true,
  },
  {
    title: 'Task Management App',
    description:
      'Real-time collaborative project management tool with drag-and-drop boards, team collaboration, and deadline tracking.',
    tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    github: 'https://github.com/subhajitkp007',
    live: '#',
    gradient: 'linear-gradient(135deg, #00d4ff 0%, #00ff88 100%)',
    icon: '📋',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description:
      'Personal portfolio with 3D animations, Three.js particle effects, and smooth scroll interactions to showcase projects and skills.',
    tech: ['React', 'Three.js', 'Framer Motion', 'Vite'],
    github: 'https://github.com/subhajitkp007/portfolio',
    live: '#',
    gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ffc107 100%)',
    icon: '🌐',
    featured: true,
  },
  {
    title: 'Weather Dashboard',
    description:
      'A weather forecasting dashboard with location search, 7-day forecast, and beautiful animated weather visualizations.',
    tech: ['React', 'OpenWeather API', 'Chart.js', 'Tailwind'],
    github: 'https://github.com/subhajitkp007',
    live: '#',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    icon: '🌤️',
    featured: false,
  },
  {
    title: 'Blog Platform',
    description:
      'A full-featured blogging platform with rich text editor, markdown support, tags, comments, and SEO optimization.',
    tech: ['Next.js', 'MongoDB', 'Tailwind', 'NextAuth'],
    github: 'https://github.com/subhajitkp007',
    live: '#',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    icon: '✍️',
    featured: false,
  },
  {
    title: 'REST API Service',
    description:
      'Scalable RESTful API with JWT authentication, rate limiting, caching with Redis, and comprehensive Swagger documentation.',
    tech: ['Node.js', 'Express', 'Redis', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/subhajitkp007',
    live: '#',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    icon: '⚙️',
    featured: false,
  },
];

function ProjectCard({ project, index, inView }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 15;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -15;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      className={`project-card glass-card${project.featured ? ' featured' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.1s ease',
      }}
    >
      <div
        className="project-top"
        style={{ background: project.gradient }}
      >
        <span className="project-icon">{project.icon}</span>
        {project.featured && <span className="featured-badge">Featured</span>}
        <div className="project-links">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label="Live demo"
          >
            <FiExternalLink size={18} />
          </a>
        </div>
      </div>

      <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        <div className="project-tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">
              <FiCode size={12} />
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" ref={ref} className="projects-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A selection of things I&apos;ve built
        </motion.p>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          className="projects-more"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="https://github.com/subhajitkp007"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FiGithub />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
