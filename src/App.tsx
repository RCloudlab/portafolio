import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Educaition";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div className="relative bg-dark-obsidian text-white min-h-screen ">
      <div className="fixed inset-0 z-0 overflow-hidden" />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Certificates />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
