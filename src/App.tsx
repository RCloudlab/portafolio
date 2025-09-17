// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Educaition';

function App() {
  return (
    <div className="relative bg-dark-obsidian text-white min-h-screen">
      <div className="fixed inset-0 z-0 overflow-hidden">       
      </div>
      <Header />
      <main className="relative z-10"> 
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;