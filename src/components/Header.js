import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Sonu Rathi's Portfolio</h1>
      <nav style={styles.nav}>
        <a href="#about" style={styles.link}>About Me</a>
        <span style={styles.separator}>|</span>
        <a href="#skills" style={styles.link}>Skills</a>
        <span style={styles.separator}>|</span>
        <a href="#projects" style={styles.link}>Projects</a>
        <span style={styles.separator}>|</span>
        <a href="#contact" style={styles.link}>Contact</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333', // Dark background for the header
    color: '#fff',           // White text color
    padding: '20px 0',      // Padding for the header
    textAlign: 'center',     // Center text alignment
  },
  title: {
    fontSize: '2.5rem',     // Larger font size for the title
    margin: '0 0 10px 0',   // Margin below the title
  },
  nav: {
    fontSize: '1.2rem',      // Font size for the navigation links
  },
  link: {
    color: '#fff',          // White link color
    textDecoration: 'none',  // Remove underline from links
    margin: '0 10px',       // Margin between links
    transition: 'color 0.3s', // Smooth color transition on hover
  },
  separator: {
    margin: '0 5px',        // Margin for the separator
    color: '#fff',           // Separator color
  },
};

export default Header;
