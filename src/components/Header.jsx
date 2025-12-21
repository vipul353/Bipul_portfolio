import { useState } from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import './Header.css';

export const Header = () => {
  const { data } = usePortfolio();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!data) return null;

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'About Me', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="header">
      <div className="container header-container">
        <div className="logo">{data.meta.logo}</div>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={handleNavClick}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
