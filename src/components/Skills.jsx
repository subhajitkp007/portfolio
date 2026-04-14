import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FiCode, FiDatabase, FiServer, FiGlobe, FiTool, FiLayers,
} from 'react-icons/fi';
import {
  SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiPython,
  SiHtml5, SiMongodb, SiPostgresql, SiMysql,
  SiGit, SiDocker, SiTailwindcss, SiNextdotjs,
  SiExpress, SiRedis, SiLinux, SiFigma, SiSpringboot,
} from 'react-icons/si';
import { FiCloud } from 'react-icons/fi';
import './Skills.css';

const skillCategories = [
  {
    icon: FiGlobe,
    title: 'Frontend',
    color: '#6c63ff',
    skills: [
      { name: 'React.js', icon: SiReact, level: 90 },
      { name: 'JavaScript', icon: SiJavascript, level: 88 },
      { name: 'TypeScript', icon: SiTypescript, level: 80 },
      { name: 'Next.js', icon: SiNextdotjs, level: 78 },
      { name: 'HTML5/CSS3', icon: SiHtml5, level: 95 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85 },
    ],
  },
  {
    icon: FiServer,
    title: 'Backend',
    color: '#00d4ff',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 85 },
      { name: 'Express.js', icon: SiExpress, level: 83 },
      { name: 'Python', icon: SiPython, level: 78 },
      { name: 'Spring Boot', icon: SiSpringboot, level: 70 },
    ],
  },
  {
    icon: FiDatabase,
    title: 'Database',
    color: '#ff6b6b',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 82 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 78 },
      { name: 'MySQL', icon: SiMysql, level: 80 },
      { name: 'Redis', icon: SiRedis, level: 65 },
    ],
  },
  {
    icon: FiTool,
    title: 'DevOps & Tools',
    color: '#ffc107',
    skills: [
      { name: 'Git', icon: SiGit, level: 90 },
      { name: 'Docker', icon: SiDocker, level: 72 },
      { name: 'AWS', icon: FiCloud, level: 68 },
      { name: 'Linux', icon: SiLinux, level: 75 },
      { name: 'Figma', icon: SiFigma, level: 70 },
    ],
  },
];

function SkillBar({ name, Icon, level, color, index, inView }) {
  return (
    <motion.div
      className="skill-item"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <div className="skill-header">
        <div className="skill-name-wrapper">
          <Icon size={16} style={{ color }} />
          <span className="skill-name">{name}</span>
        </div>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.5 + index * 0.06, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

function CategoryCard({ cat, index, inView }) {
  const Icon = cat.icon;
  return (
    <motion.div
      className="category-card glass-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ '--cat-color': cat.color }}
    >
      <div className="category-header">
        <div className="category-icon-wrap" style={{ background: `${cat.color}20`, border: `1px solid ${cat.color}40` }}>
          <Icon size={22} style={{ color: cat.color }} />
        </div>
        <h3 className="category-title">{cat.title}</h3>
      </div>
      <div className="skills-list">
        {cat.skills.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            Icon={skill.icon}
            level={skill.level}
            color={cat.color}
            index={i}
            inView={inView}
          />
        ))}
      </div>
    </motion.div>
  );
}

const techStack = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'AWS', icon: FiCloud, color: '#FF9900' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" ref={ref} className="skills-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          The tools and technologies I work with
        </motion.p>

        <motion.div
          className="tech-marquee"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="marquee-track">
            {[...techStack, ...techStack].map((tech, i) => {
              const TechIcon = tech.icon;
              return (
                <div key={i} className="marquee-item">
                  <TechIcon size={28} style={{ color: tech.color }} />
                  <span>{tech.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        <div className="categories-grid">
          {skillCategories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
