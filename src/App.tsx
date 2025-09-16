// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';


import animatedBackground from './assets/images/aztec_animated_background.gif'; 

function App() {
  return (
    <div className="relative bg-dark-obsidian text-white min-h-screen">
      <div className="fixed inset-0 z-0 overflow-hidden">
        {/* <img
          src={animatedBackground}
          alt="Animated Aztec Background"
          className="w-full h-full object-cover opacity-20" 
        /> */}
       
      </div>

      <Header />
      <main className="relative z-10"> 
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;