import React from 'react';
import profilePhoto from '../assets/images/profile.jpg'; // Adjust this based on the actual path to your photo

const AboutMe = () => {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>
      <div style={styles.content}>
        <img src={profilePhoto} alt="Profile" style={styles.photo} />
        <div style={styles.textContainer}>
          <p style={styles.description}>
            I am a passionate and dedicated developer with experience in building web applications using the MERN stack.
            My journey in technology has equipped me with the skills to create user-friendly and efficient solutions.
            I thrive on challenges and constantly seek to improve my knowledge and skills in the ever-evolving tech landscape.
          </p>
          <p style={styles.description}>
            When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and sharing my knowledge
            with others through blogs and tutorials. I'm always excited about the potential of technology to make a positive impact
            on the world.
          </p>
          <a 
            href="https://www.linkedin.com/in/sonu-rathi-" 
            style={styles.link} 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={handleLinkHover} 
            onMouseLeave={handleLinkLeave}
          >
            Connect with me
          </a>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px 20px',
    margin: '20px 0',
    backgroundColor: '#121212', // Dark background
    color: '#ffffff', // White text
    borderRadius: '8px',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
  },
  photo: {
    width: '150px', // Adjust as needed
    height: '150px', // Adjust as needed
    borderRadius: '50%', // Circular photo
    border: '3px solid #00bcd4', // Border around the photo
    marginRight: '20px', // Space between photo and text
  },
  textContainer: {
    flex: 1,
  },
  heading: {
    marginBottom: '20px',
    fontSize: '2.5rem',
    color: '#00bcd4', // Cyan color for heading
    borderBottom: '2px solid #00bcd4',
    paddingBottom: '10px',
    textAlign: 'center', // Center heading
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#e0e0e0', // Light gray for description
    margin: '10px 0',
  },
  link: {
    display: 'inline-block',
    marginTop: '20px',
    color: '#00bcd4',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '10px 15px',
    border: '1px solid #00bcd4',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
  },
};

// Change link color on hover
const handleLinkHover = (e) => {
  e.currentTarget.style.backgroundColor = '#00bcd4'; // Change background on hover
  e.currentTarget.style.color = '#fff'; // Change text color on hover
};

const handleLinkLeave = (e) => {
  e.currentTarget.style.backgroundColor = 'transparent'; // Reset background
  e.currentTarget.style.color = '#00bcd4'; // Reset text color
};

export default AboutMe;
