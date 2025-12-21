import { usePortfolio } from '../hooks/usePortfolio';
import { Card } from './Card';
import './Services.css';

export const Services = () => {
  const { data } = usePortfolio();

  if (!data) return null;

  const { services } = data;

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">
          My <span>Services</span>
        </h2>
        <div className="services-grid">
          {services.map((service) => (
            <Card key={service.id} variant="default" hoverable>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
