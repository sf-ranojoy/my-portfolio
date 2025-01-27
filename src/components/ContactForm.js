import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/1rTxjMO38rJJc2t3myg186xLADlpeKnpWnX2JOemrshc/formResponse';
      const payload = new URLSearchParams();

      // Replace entry.xxxx with the field IDs from your Google Form
      payload.append('entry.1234567890', formData.name);
      payload.append('entry.0987654321', formData.email);
      payload.append('entry.1122334455', formData.message);

      await axios.post(googleFormUrl, payload);
      setSubmitted(true);
    } catch (error) {
      console.error('Error submitting the form', error);
    }
  };

  if (submitted) {
    return <p>Thank you for your message! I'll get back to you soon.</p>;
  }
  
  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem' }}
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem', minHeight: '100px' }}
          ></textarea>
        </div>
        <button type="submit" style={{ padding: '0.5rem 1rem', backgroundColor: '#48C9B0', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;