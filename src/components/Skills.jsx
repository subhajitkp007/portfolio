import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FiDatabase, FiServer, FiGlobe, FiTool,
} from 'react-icons/fi';
import {
  SiTypescript, SiPython, SiGooglebigquery, SiGooglecloud,
  SiApachespark, SiApachekafka, SiGoogle,
  SiOpenai, SiLangchain,
} from 'react-icons/si';
import { FiCloud } from 'react-icons/fi';
import './Skills.css';

const skillCategories = [
  {
    icon: FiTool,
    title: 'AI & GenAI',
    color: '#6c63ff',
    skills: [
      { name: 'Generative AI', icon: SiOpenai, level: 93 },
      { name: 'Artificial Intelligence (AI)', icon: SiOpenai, level: 87 },
      { name: 'Agentic AI Development', icon: SiOpenai, level: 85 },
      { name: 'Retrieval-Augmented Generation (RAG)', icon: SiLangchain, level: 86 },
      { name: 'Google Gemini', icon: SiGoogle, level: 83 },
      { name: 'Prompt Engineering', icon: SiOpenai, level: 81 },
    ],
  },
  {
    icon: FiServer,
    title: 'Architecture',
    color: '#00d4ff',
    skills: [
      { name: 'Data Architecture', icon: FiServer, level: 94 },
      { name: 'Solution Architecture', icon: FiServer, level: 92 },
      { name: 'Architectural Design', icon: FiServer, level: 91 },
      { name: 'Model Context Protocol (MCP)', icon: FiServer, level: 88 },
    ],
  },
  {
    icon: FiDatabase,
    title: 'Data & Cloud',
    color: '#ff6b6b',
    skills: [
      { name: 'Google BigQuery', icon: SiGooglebigquery, level: 87 },
      { name: 'Google Cloud Platform (GCP)', icon: SiGooglecloud, level: 85 },
      { name: 'Apache Spark', icon: SiApachespark, level: 88 },
      { name: 'Apache Kafka', icon: SiApachekafka, level: 82 },
    ],
  },
  {
    icon: FiGlobe,
    title: 'Programming',
    color: '#ffc107',
    skills: [
      { name: 'Python', icon: SiPython, level: 91 },
      { name: 'TypeScript', icon: SiTypescript, level: 74 },
      { name: 'LangChain', icon: SiLangchain, level: 82 },
      { name: 'Cloud Engineering', icon: FiCloud, level: 84 },
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
  { name: 'Generative AI', icon: SiOpenai, color: '#10a37f' },
  { name: 'Google Gemini', icon: SiGoogle, color: '#4285F4' },
  { name: 'RAG', icon: SiLangchain, color: '#1C3C3C' },
  { name: 'Google BigQuery', icon: SiGooglebigquery, color: '#669DF6' },
  { name: 'GCP', icon: SiGooglecloud, color: '#4285F4' },
  { name: 'Apache Spark', icon: SiApachespark, color: '#E25A1C' },
  { name: 'Apache Kafka', icon: SiApachekafka, color: '#231F20' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'MCP', icon: FiServer, color: '#00d4ff' },
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
