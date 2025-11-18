import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* LAPISAN LATAR BELAKANG */}
      <div className="absolute inset-0 bg-transmission-lines bg-cover bg-fixed bg-center opacity-5 z-0"></div>

      {/* LAPISAN KONTEN */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Clients />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;