import { useState } from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import { Card } from './Card';
import { Modal } from './Modal';
import './Projects.css';

export const Projects = () => {
  const { data } = usePortfolio();
  const [selectedProject, setSelectedProject] = useState(null);

  if (!data) return null;

  const { projects } = data;

  // Helper function to get image URL - handles both local assets and external URLs
  const getImageUrl = (imagePath) => {
    // If it's a full URL (starts with http or https), return as-is
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    // Otherwise, import from assets folder
    return new URL(`../assets/${imagePath}`, import.meta.url).href;
  };

  console.log(projects);

  return (
    <>
      <section className="projects" id="projects">
        <div className="container">
          <h2 className="section-title">
            My Latest <span>Projects</span>
          </h2>
          <div className="projects-grid">
            {projects.map((project) => (

              <Card
                key={project.id}
                variant="project"
                hoverable
                onClick={() => setSelectedProject(project)}
              >
                <img
                  src={getImageUrl(project.image)}
                  alt={project.imageAlt}
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
      >
        {selectedProject && (
          <div className="project-modal-content">
            <img
              src={getImageUrl(selectedProject.image)}
              alt={selectedProject.imageAlt}
              className="project-modal-image"
              loading="lazy"
            />
            <p className="project-modal-description">
              {selectedProject.fullDescription}
            </p>
            <div className="project-modal-tags">
              {selectedProject.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-modal-links">
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  View Project
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
