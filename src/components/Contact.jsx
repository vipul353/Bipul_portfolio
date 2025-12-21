import { useState } from 'react';
import { usePortfolio } from '../hooks/usePortfolio';
import './Contact.css';

export const Contact = () => {
  const { data } = usePortfolio();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  const { contact } = data;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send data to a backend or email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">
          Let's <span>Connect</span>
        </h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>{contact.description}</p>
            <div className="contact-details">
              {contact.details.map((detail) => (
                <a
                  key={detail.id}
                  href={detail.link}
                  className="contact-item"
                >
                  <div className="contact-icon">{detail.icon}</div>
                  <div className="contact-item-info">
                    <h4>{detail.label}</h4>
                    <p>{detail.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <button type="submit" className="btn btn--submit">
              Send Message
            </button>

            {submitted && (
              <div className="form-success" role="alert">
                ✓ Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
