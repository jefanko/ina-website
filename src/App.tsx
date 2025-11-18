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
      {/* LAPISAN LATAR BELAKANG
        Ini akan menjadi gambar 'tipis' Anda.
        - bg-transmission-lines: Gambar kustom Anda.
        - bg-cover: Memastikan gambar menutupi seluruh area.
        - bg-fixed: Membuat gambar diam saat scroll (efek parallax).
        - bg-center: Posisi gambar di tengah.
        - opacity-5: Ini kuncinya, membuat gambar sangat tipis (5% opacity). Anda bisa ganti ke opacity-10 jika kurang terlihat.
        - z-0: Menempatkannya di lapisan paling belakang.
      */}
      <div className="absolute inset-0 bg-transmission-lines bg-cover bg-fixed bg-center opacity-5 z-0"></div>

      {/* LAPISAN KONTEN
        Semua konten website Anda diletakkan di sini.
        - relative z-10: Memastikan lapisan ini ada di atas lapisan latar belakang.
      */}
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