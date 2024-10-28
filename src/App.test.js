import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByText(/My Portfolio/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders About Me section', () => {
  render(<App />);
  const aboutElement = screen.getByText(/About Me/i);
  expect(aboutElement).toBeInTheDocument();
});

test('renders Skills & Expertise section', () => {
  render(<App />);
  const skillsElement = screen.getByText(/Skills & Expertise/i);
  expect(skillsElement).toBeInTheDocument();
});

test('renders Projects section', () => {
  render(<App />);
  const projectsElement = screen.getByText(/Projects/i);
  expect(projectsElement).toBeInTheDocument();
});

test('renders Contact Me section', () => {
  render(<App />);
  const contactElement = screen.getByText(/Contact Me/i);
  expect(contactElement).toBeInTheDocument();
});

test('renders footer with copyright', () => {
  render(<App />);
  const footerElement = screen.getByText(/2024 Sonu Rathi. All Rights Reserved/i);
  expect(footerElement).toBeInTheDocument();
});
