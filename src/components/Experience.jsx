import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const experiences = [
  {
    type: 'work',
    icon: FiBriefcase,
    role: 'Software Developer',
    company: 'Tech Company',
    location: 'West Bengal, India',
    period: '2022 – Present',
    description:
      'Developed and maintained full-stack web applications using React.js and Node.js. Led the migration of legacy systems to modern microservices architecture, improving performance by 40%.',
    highlights: [
      'Built responsive React frontends serving 10K+ users',
      'Designed RESTful APIs with Node.js/Express',
      'Optimized database queries reducing load time by 35%',
      'Collaborated in agile sprints and code reviews',
    ],
    color: '#6c63ff',
  },
  {
    type: 'work',
    icon: FiBriefcase,
    role: 'Junior Web Developer',
    company: 'Startup Studio',
    location: 'Remote',
    period: '2021 – 2022',
    description:
      'Contributed to multiple client projects as a full-stack developer, working across the entire software development lifecycle from design to deployment.',
    highlights: [
      'Developed 5+ client websites using React and Next.js',
      'Integrated third-party APIs and payment gateways',
      'Wrote unit and integration tests with Jest',
      'Mentored interns on best practices',
    ],
    color: '#00d4ff',
  },
  {
    type: 'education',
    icon: FiBookOpen,
    role: 'B.Tech in Computer Science',
    company: 'University',
    location: 'West Bengal, India',
    period: '2017 – 2021',
    description:
      'Graduated with honors in Computer Science and Engineering. Focused on data structures, algorithms, software engineering, and database management systems.',
    highlights: [
      'CGPA: 8.5/10',
      'Final year project: AI-powered recommendation system',
      'Active member of coding club',
      'Participated in national-level hackathons',
    ],
    color: '#ff6b6b',
  },
];

function ExperienceItem({ item, index, inView }) {
  const Icon = item.icon;
  const isRight = index % 2 === 1;

  return (
    <motion.div
      className={`timeline-item${isRight ? ' right' : ''}`}
      initial={{ opacity: 0, x: isRight ? 60 : -60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="timeline-dot" style={{ background: item.color, boxShadow: `0 0 15px ${item.color}60` }}>
        <Icon size={16} color="white" />
      </div>

      <div className="timeline-card glass-card" style={{ '--item-color': item.color }}>
        <div className="timeline-header">
          <div>
            <h3 className="timeline-role">{item.role}</h3>
            <p className="timeline-company" style={{ color: item.color }}>{item.company}</p>
          </div>
          <div className="timeline-meta">
            <span className="timeline-period">
              <FiCalendar size={13} />
              {item.period}
            </span>
            <span className="timeline-location">
              <FiMapPin size={13} />
              {item.location}
            </span>
          </div>
        </div>

        <p className="timeline-description">{item.description}</p>

        <ul className="timeline-highlights">
          {item.highlights.map((h) => (
            <li key={h}>
              <span className="highlight-dot" style={{ background: item.color }} />
              {h}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" ref={ref} className="experience-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience & Education
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My professional journey
        </motion.p>

        <div className="timeline">
          <div className="timeline-line" />
          {experiences.map((item, i) => (
            <ExperienceItem key={item.role} item={item} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
