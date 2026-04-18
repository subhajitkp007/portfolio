import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const socials = [
  { icon: FiGithub, href: 'https://github.com/subhajitkp007', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/subhajitmahata', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:subhajitmahata@email.com', label: 'Email' },
];

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-gradient" />
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">SM</span>
            <p className="footer-tagline">
              Building the web, one component at a time.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-socials">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="footer-social"
                  aria-label={s.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} Subhajit Mahata. Made with{' '}
            <FiHeart className="heart-icon" size={14} />{' '}
            and lots of ☕
          </p>
          <p className="footer-tech">Built with React & Three.js</p>
        </div>
      </div>
    </footer>
  );
}
