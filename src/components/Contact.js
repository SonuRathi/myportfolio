import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false); // New state for confirmation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    const mailtoLink = `mailto:rathisonu123@example.com?subject=Message from ${name}&body=${message}`;
    window.location.href = mailtoLink;

    setSubmitted(true); // Show confirmation after submit
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <section id="contact" style={{ textAlign: 'center', margin: '2rem 0' }}>
      <h2>Contact Me</h2>
      {submitted && <p style={{ color: 'green' }}>Thank you for your message! I'll get back to you soon.</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '400px', margin: 'auto' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: '10px', margin: '10px 0', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: '10px', margin: '10px 0', width: '100%', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{ padding: '10px', margin: '10px 0', width: '100%', height: '150px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
