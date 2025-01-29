import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import ReCAPTCHA from 'react-google-recaptcha'; // Install react-google-recaptcha
import TextField from '@mui/material/TextField';


const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

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

    try {
      const googleFormUrl = 'https://docs.google.com/forms/u/0/d/e/<YOUR_GOOGLE_FORM_ID>/formResponse';
      const payload = new URLSearchParams();

      // Replace entry.xxxx with the field IDs from your Google Form
      payload.append('entry.1234567890', formData.name);
      payload.append('entry.0987654321', formData.email);
      payload.append('entry.1122334455', formData.message);

      await axios.post(googleFormUrl, payload, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      setSubmitted(true);
    } catch (err) {
      setError('There was an issue submitting the form. Please try again later.');
    }
  };

  if (submitted) {
    return <p style={{ textAlign: 'center', color: '#48C9B0', fontSize: '1.5rem' }}>Thank you for your message! I'll get back to you soon.</p>;
  }

  
  return (
<section style={{ padding: '2rem', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '1rem', fontSize: '2rem', color: '#34495E' }}>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#F4F6F6', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
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
        <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <ReCAPTCHA
            sitekey="<YOUR_RECAPTCHA_SITE_KEY>" // Replace with your Google reCAPTCHA site key
            onChange={handleCaptchaChange}
          />
        </div>
        <Button
          type="submit"
          variant="contained"
          style={{ backgroundColor: '#48C9B0', color: '#fff', padding: '0.75rem 1.5rem', fontSize: '1rem' }}
          disabled={!captchaVerified}
        >
          Submit
        </Button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </section>
  );
};

export default ContactForm;