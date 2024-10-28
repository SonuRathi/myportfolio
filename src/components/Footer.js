import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>&copy; {new Date().getFullYear()} Sonu Rathi. All Rights Reserved.</p>
      <div style={styles.links}>
        <a href="mailto:rathisonu123@example.com" style={styles.link}>Email</a>
        <span style={styles.separator}>|</span>
        <a href="https://github.com/SonuRathi" target="_blank" rel="noopener noreferrer" style={styles.link}>GitHub</a>
        <span style={styles.separator}>|</span>
        <a href="https://www.linkedin.com/in/sonu-rathi-" target="_blank" rel="noopener noreferrer" style={styles.link}>LinkedIn</a>
      </div>
    </footer>
  );
};

// Inline styles for a more visually appealing footer
const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    marginTop: '40px',
  },
  text: {
    margin: 0,
    fontSize: '1rem',
  },
  links: {
    marginTop: '10px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s',
  },
  separator: {
    margin: '0 5px',
  },
};

export default Footer;
