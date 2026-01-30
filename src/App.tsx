import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="relative bg-black text-brand-white min-h-screen font-sans selection:bg-brand-electric selection:text-white overflow-x-hidden">
      <CustomCursor />
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      <Header />

      <Hero />

      <main className="relative z-10 max-w-7xl mx-auto  space-y-32 md:space-y-48 pb-20">
        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>

        <section id="experience" className="scroll-mt-20">
          <Experience />
        </section>

        <section
          id="academic"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start scroll-mt-20"
        >
          <div className="space-y-8">
            <Education />
          </div>
          <div className="space-y-8">
            <Certificates />
          </div>
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
