import React from 'react';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>404 - Page Not Found</h2>
      <p style={styles.message}>Oops! The page you are looking for does not exist.</p>
      <a href="/" style={styles.link}>Go Back to Home</a>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',  // Stack elements vertically
    alignItems: 'center',      // Center align items
    justifyContent: 'center',   // Center vertically
    height: '100vh',           // Full height of the viewport
    backgroundColor: '#f4f4f4', // Light gray background
    color: '#333',             // Dark gray text color
    textAlign: 'center',       // Center text alignment
  },
  heading: {
    fontSize: '2.5rem',        // Large font size for the heading
    marginBottom: '20px',      // Space below the heading
  },
  message: {
    fontSize: '1.2rem',        // Font size for the message
    marginBottom: '30px',      // Space below the message
  },
  link: {
    fontSize: '1rem',          // Font size for the link
    color: '#007bff',          // Link color
    textDecoration: 'none',     // No underline
    padding: '10px 20px',      // Padding for the button style
    borderRadius: '5px',       // Rounded corners
    backgroundColor: '#fff',    // White background
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow
    transition: 'background-color 0.3s, color 0.3s', // Smooth transitions
  },
};

// Change link color on hover
link:hover = {
  backgroundColor: '#007bff', // Change background color
  color: '#fff',               // Change text color to white
};

export default NotFound;
