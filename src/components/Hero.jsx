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

  const handleDownloadResume = async () => {
    if (!hero.resumeFile) {
      console.error('Resume file not specified in portfolio data');
      return;
    }

    try {
      const resumeUrl = new URL(`../assets/${hero.resumeFile}`, import.meta.url).href;

      // Fetch the file as a blob
      const response = await fetch(resumeUrl);
      const blob = await response.blob();

      // Create a blob URL
      const blobUrl = window.URL.createObjectURL(blob);

      // Create and trigger download
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = hero.resumeFile; // This will now work correctly
      document.body.appendChild(link);
      link.click();

      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }
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
