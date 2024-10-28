import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './assets/styles.css';

function App() {
  return (
    <div>
      <Header />
      <main style={styles.main}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// Styles for the main content area
const styles = {
  main: {
    padding: '20px', // Adds some padding to the main content
    backgroundColor: '#f9f9f9', // Light background for contrast
  },
};

export default App;
