import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import ReCAPTCHA from 'react-google-recaptcha'; // Install react-google-recaptcha
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

   const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      setError('Please verify the CAPTCHA.');
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        process.env.GATSBY_EMAILJS_SERVICE_ID,
        process.env.GATSBY_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date().toLocaleString(),
          title: "Portfolio Contact",
        },
        process.env.GATSBY_EMAILJS_USER_ID
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('There was an issue submitting the form. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <section style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '1rem', fontSize: '2rem', color: '#34495E' }}>Contact Me</h2>
      {submitted ? (
        <p style={{ textAlign: 'center', color: '#48C9B0', fontSize: '2.5rem' }}>
          Thank you for your message! I'll get back to you soon.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: '#F4F6F6',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div style={{ marginBottom: '1.5rem' }}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleInputChange}
              variant="outlined"
              required
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formData.email}
              onChange={handleInputChange}
              variant="outlined"
              type="email"
              required
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <TextField
              fullWidth
              id="message"
              name="message"
              label="Message"
              value={formData.message}
              onChange={handleInputChange}
              variant="outlined"
              multiline
              rows={4}
              required
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <ReCAPTCHA
              sitekey={process.env.GATSBY_RECAPTCHA_SITE_KEY}
              onChange={handleCaptchaChange}
            />
          </div>

          {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}

          <Button
            type="submit"
            variant="contained"
            disabled={!captchaVerified}
            style={{
              backgroundColor: '#48C9B0',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
            }}
          >
            Submit
          </Button>
        </form>
      )}
    </section>
  );
};

export default ContactForm;