import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FiBriefcase, FiBookOpen, FiCalendar, FiMapPin, FiUsers,
} from 'react-icons/fi';
import './Experience.css';

const experiences = [
  {
    type: 'work',
    icon: FiBriefcase,
    role: 'Technology Lead - Specialist Programmer L2 (UK)',
    company: 'Infosys (India-based global IT services company)',
    location: 'London Area, United Kingdom',
    period: 'Dec 2025 - Present · 5 mos',
    description:
      'Current on-site role in the UK, leading delivery in data and analytics with focus on scalable enterprise engineering and technical excellence.',
    highlights: [
      'Progressed from India to Germany and now London within Infosys',
      'Promoted to Specialist Programmer L2',
      'Driving impact in Big Data and cloud-focused initiatives',
      'Contributing to cross-region engineering delivery',
    ],
    color: '#6c63ff',
  },
  {
    type: 'work',
    icon: FiBriefcase,
    role: 'Technology Lead - Specialist Programmer L2 (Germany)',
    company: 'Infosys',
    location: 'Berlin, Germany',
    period: 'Jan 2024 - Dec 2025 · 2 yrs',
    description:
      'Expanded responsibilities in Germany as L2, owning delivery and technical outcomes in on-site projects.',
    highlights: [
      'Led data-driven engineering initiatives on-site',
      'Strengthened stakeholder collaboration in European projects',
      'Delivered high-quality execution in enterprise environments',
      'Built a strong foundation for UK transition',
    ],
    color: '#00d4ff',
  },
  {
    type: 'work',
    icon: FiBriefcase,
    role: 'Technology Lead - Specialist Programmer (Germany)',
    company: 'Infosys',
    location: 'Berlin, Germany',
    period: 'Dec 2022 - Dec 2023 · 1 yr 1 mo',
    description:
      'Initial Germany assignment where I transitioned from India delivery to Europe and scaled impact in technology leadership.',
    highlights: [
      'Successfully moved to Infosys Germany branch office',
      'Worked on-site in customer-facing delivery scenarios',
      'Demonstrated growth that led to L2 progression',
      'Maintained strong performance consistency',
    ],
    color: '#ff6b6b',
  },
  {
    type: 'work',
    icon: FiBriefcase,
    role: 'Specialist Programmer',
    company: 'Infosys',
    location: 'Hyderabad, Telangana, India',
    period: 'Oct 2020 - Dec 2022 · 2 yrs 3 mos',
    description:
      'Started my Infosys journey in India, building strong expertise in Big Data and analytics, which set the path for international roles.',
    highlights: [
      'Built core capabilities in data engineering and analytics',
      'Received Infy Insta Award and RISE EVOLVE recognition',
      'Contributed to high-impact technology tracks',
      'Prepared for global role transition',
    ],
    color: '#ffc107',
  },
  {
    type: 'education',
    icon: FiBookOpen,
    role: 'B.Tech in Computer Science & Engineering',
    company: 'Ramkrishna Mahato Government Engineering College, Purulia',
    location: 'West Bengal, India',
    period: '2016 - 2020',
    description:
      'Completed undergraduate engineering with strong foundations in algorithms, systems, networks, and software engineering.',
    highlights: [
      'Degree GPA: 8.5/10',
      'Focused coursework in DSA, DBMS, OS, and Computer Networks',
      'Built problem-solving depth through algorithmic practice',
      'Maintained consistent academic and technical progression',
    ],
    color: '#8b5cf6',
  },
  {
    type: 'volunteer',
    icon: FiUsers,
    role: 'Student Representative',
    company: 'Institution of Engineers of India (IEI), Kolkata',
    location: 'India',
    period: 'Sep 2019 - Jul 2020 · 11 mos',
    description:
      'Supported student and professional engagement activities while contributing to peer learning and engineering community collaboration.',
    highlights: [
      'Participated in collaborative technical initiatives',
      'Promoted community participation and networking',
      'Developed communication and leadership skills',
      'Strengthened engagement with the broader engineering ecosystem',
    ],
    color: '#10b981',
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
