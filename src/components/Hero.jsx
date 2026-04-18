import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from 'react-icons/fi';
import * as THREE from 'three';
import './Hero.css';

// Generate particle positions once at module level (avoids impure function in render)
const PARTICLE_COUNT = 3000;
const particlePositions = (() => {
  const pos = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 20;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }
  return pos;
})();

function ParticleField() {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(t / 12) * 0.2;
    ref.current.rotation.y = Math.sin(t / 8) * 0.3;
  });

  return (
    <Points ref={ref} positions={particlePositions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#6c63ff"
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingSphere({ position, color, scale }) {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.y = position[1] + Math.sin(t + position[0]) * 0.3;
    ref.current.rotation.x = t * 0.3;
    ref.current.rotation.y = t * 0.2;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.15}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <ParticleField />
      <FloatingSphere position={[-4, 1, -3]} color="#6c63ff" scale={1.5} />
      <FloatingSphere position={[4, -1, -2]} color="#00d4ff" scale={1} />
      <FloatingSphere position={[0, 2, -5]} color="#ff6b6b" scale={0.8} />
    </>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const handleScrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-canvas">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <Scene />
        </Canvas>
      </div>

      <div className="hero-overlay" />

      <motion.div
        className="hero-content container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="hero-title" variants={itemVariants}>
          Hi, I&apos;m{' '}
          <span className="highlight">Subhajit</span>
          <br />
          <span className="hero-role">Specialist Programmer at Infosys</span>
        </motion.h1>

        <motion.p className="hero-description" variants={itemVariants}>
          London-based software engineer focused on scalable digital solutions,
          continuous learning, and practical innovation across cloud, AI, and
          full-stack development. As a Specialist Programmer, I build impactful
          solutions for complex client and platform engineering challenges.
        </motion.p>

        <motion.div className="hero-actions" variants={itemVariants}>
          <a href="#projects" className="btn-primary" onClick={(e) => {
            e.preventDefault();
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            View My Work
          </a>
          <a
            href="/cv.pdf"
            download="Subhajit_Mahata_CV.pdf"
            className="btn-outline"
          >
            <FiDownload />
            Download CV
          </a>
        </motion.div>

        <motion.div className="hero-socials" variants={itemVariants}>
          <a
            href="https://github.com/subhajitkp007"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FiGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/subhajitmahata"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={22} />
          </a>
        </motion.div>

        <motion.div
          className="hero-stats"
          variants={itemVariants}
        >
          {[
            { value: '5K+', label: 'LinkedIn Followers' },
            { value: '500+', label: 'Connections' },
            { value: 'Infosys', label: 'Current Company' },
          ].map((stat) => (
            <div key={stat.label} className="stat-item">
              <span className="stat-value highlight">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        className="scroll-indicator"
        onClick={handleScrollDown}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <FiArrowDown size={24} />
      </motion.button>
    </section>
  );
}
