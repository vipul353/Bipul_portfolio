import { usePortfolio } from '../hooks/usePortfolio';
import { Card } from './Card';
import './About.css';

export const About = () => {
  const { data } = usePortfolio();

  if (!data) return null;

  const { education, about } = data;

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="education">
            <h2>
              My <span>Education</span>
            </h2>
            {education.map((edu) => (
              <Card key={edu.id} variant="default" className="education-card">
                <div className="education-header">
                  <div className="edu-icon">{edu.icon}</div>
                  <div className="edu-info">
                    <h3>{edu.school}</h3>
                    <p>{edu.degree}</p>
                    <p className="edu-years">
                      {edu.startYear} - {edu.endYear}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="about-content">
            <h2>
              More <span>About Me</span>
            </h2>
            <p>{about.description}</p>
            <div className="stats">
              {about.stats.map((stat) => (
                <Card key={stat.id} variant="compact" className="stat-card">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
