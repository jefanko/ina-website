import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFA500] via-[#FF8C00] to-[#FF7F00] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border-4 border-white transform rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border-4 border-white transform -rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8 inline-block">
            <img src="/Picture1.png" alt="Logo" className="h-24 w-auto mb-4 mx-auto" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            PT. INDODAYA
            <br />
            NARATAMA ABADI
          </h1>

          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
            Solusi Terpercaya untuk Engineering, Procurement & Construction
          </p>

          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Melayani sektor swasta, pemerintah, dan BUMN dengan komitmen tinggi
            terhadap kualitas dan profesionalisme
          </p>

          <button
            onClick={scrollToContact}
            className="group bg-white text-[#FFA500] px-8 py-4 rounded-none font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>Hubungi Kami</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
