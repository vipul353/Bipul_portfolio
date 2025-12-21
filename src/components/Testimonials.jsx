import { usePortfolio } from '../hooks/usePortfolio';
import { Card } from './Card';
import './Testimonials.css';

export const Testimonials = () => {
  const { data } = usePortfolio();

  if (!data) return null;

  const { testimonials } = data;

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">
          <span>Testimonials</span>
        </h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} variant="default" hoverable={false}>
              <div className="testimonial-header">
                <div className="testimonial-avatar">
                  {testimonial.avatar}
                </div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
