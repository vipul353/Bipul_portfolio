import { usePortfolio } from '../hooks/usePortfolio';
import './Footer.css';

export const Footer = () => {
  const { data } = usePortfolio();

  if (!data) return null;

  const { meta, social } = data;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">{meta.logo}</div>
          
          {social && social.length > 0 && (
            <div className="social-links">
              {social.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="footer-divider" />

        <p className="footer-text">
          © {currentYear} {meta.author}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
