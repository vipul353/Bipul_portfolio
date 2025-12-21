import { usePortfolio } from '../hooks/usePortfolio';
import './Hero.css';

export const Hero = () => {
  const { data } = usePortfolio();

  if (!data) return null;

  const { hero } = data;

  // Dynamically import profile image from assets
  const getImageUrl = (imageName) => {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
  };

  const handleHireMe = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // In a real app, this would download a resume file
    console.log('Downloading resume...');
  };

  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>
            {hero.greeting}, <span className="hero-name">{hero.name}</span> {hero.emoji}
          </h1>
          <p>{hero.description}</p>
          <div className="hero-buttons">
            {hero.buttons.map((btn) => (
              <button
                key={btn.text}
                className={`btn btn--${btn.type}`}
                onClick={btn.action === 'scroll-to-contact' ? handleHireMe : handleDownloadResume}
              >
                {btn.text}
              </button>
            ))}
          </div>
        </div>
        <div className="hero-image">
          <img
            src={getImageUrl(hero.profileImage)}
            alt={hero.profileImageAlt}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
