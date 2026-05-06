'use client';

import { useState } from 'react';

interface ContactProps {
  email: string;
}

const Contact: React.FC<ContactProps> = ({ email }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend or an email service.
    console.log('Form submitted:', formData);
    alert('Thank you for your message! (Form submission is simulated)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-pageBackground text-text-primary">
      <div className="section-container text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto">
          I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        <div className="bg-white p-8 rounded-xl shadow-layout-shadow border border-border max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-inputBackground border border-inputBorder focus:border-inputFocusBorder focus:ring-1 focus:ring-inputFocusBorder outline-none transition-colors duration-200"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-inputBackground border border-inputBorder focus:border-inputFocusBorder focus:ring-1 focus:ring-inputFocusBorder outline-none transition-colors duration-200"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 rounded-lg bg-inputBackground border border-inputBorder focus:border-inputFocusBorder focus:ring-1 focus:ring-inputFocusBorder outline-none transition-colors duration-200"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              Send Message
            </button>
          </form>
          <div className="mt-8 text-center text-text-primary">
            <p>Or directly email me at:</p>
            <a href={`mailto:${email}`} className="text-primary hover:underline font-semibold mt-2 block">
              {email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;