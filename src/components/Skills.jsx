import { usePortfolio } from '../hooks/usePortfolio';
import { Card } from './Card';
import { CircularProgress } from './CircularProgress';
import './Skills.css';

export const Skills = () => {
  const { data } = usePortfolio();

  if (!data) return null;

  const { skills, experience } = data;

  return (
    <section className="skills-section" id="skills">
      {/* SVG gradient definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffa500" />
            <stop offset="100%" stopColor="#ff6b00" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container">
        <div className="skills-grid">
          <div className="skills-content">
            <h2>
              My <span>Skills</span>
            </h2>
            <div className="skills-circular-grid">
              {skills.map((skill) => (
                <CircularProgress
                  key={skill.id}
                  percentage={skill.proficiency}
                  name={skill.name}
                  size={140}
                />
              ))}
            </div>
          </div>

          <div className="experience-content">
            <h2>
              My <span>Experience</span>
            </h2>
            {experience.map((exp) => (
              <Card key={exp.id} variant="default" className="experience-card">
                <div className="experience-header">
                  <div className="exp-icon">{exp.icon}</div>
                  <div className="exp-info">
                    <h3>{exp.title}</h3>
                    <p>{exp.company}</p>
                    <p className="exp-dates">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
