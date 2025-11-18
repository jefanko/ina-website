import { CheckCircle2 } from 'lucide-react';
import { Slide } from 'react-awesome-reveal';

const Projects = () => {
  const projectCategories = [
    {
      title: 'Transmission Line Services',
      projects: [
        'GSW Wire and Stringset Replacement Services at SUTET 500kV South Bandung - New Ujungberung',
        'Replacement Services for Corrosive GSW Wire and Stringset on SUTET 500kV Cilegon - Cibinong',
        'Installation of Lightning Protection Independent Ground Wire Transmission System 150 kV',
        'Replacement of GSW Rantas Span EA32 - Gantry SUTT 150kV Kembangan-Petukangan',
      ],
    },
    {
      title: 'Substation & Equipment',
      projects: [
        'Installation of PMT AIS Manometer Cover in Tangerang City ULTG Area',
        'Completion of 20 kV Power Cable Transformer 3 GI Citra Habitat',
        'Line Dropper Replacement, LA Bay Bekasi Replacement at GIS Marunda',
        'Uprating Trafo 1 GI 150 kV Bumi Semarang Baru',
      ],
    },
    {
      title: 'Procurement Projects',
      projects: [
        'Procurement of U-Bolt GSW 120 kN, Socket Clevis 120 kN, Eye Link 120 Kn',
        'Procurement of Stringset Insulators and Replacement Services at SUTT 150 kV',
        'Replacement of Transmission Line Insulators for GI Sumbawa-GI Labuhan',
        'Material Supply for MTU Installation Services in the UIT JBTB Area',
      ],
    },
    {
      title: 'Installation & Maintenance',
      projects: [
        'Pest Control Installation of 500 kV Control Building Animal Barriers',
        'Installation of Animal Barriers for GIS Buildings',
        'Installation of Multi Direct Grounding and Counter Poise',
        'Repair Services for Grounding Anomalies in UPT Semarang Region',
      ],
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Pengalaman Proyek
            </h2>
            <div className="w-24 h-1 bg-[#FFA500] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai proyek yang telah kami kerjakan dengan standar kualitas
              tertinggi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectCategories.map((category, index) => (
              <Slide
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'} // Animasi dari kiri untuk index genap, kanan untuk ganjil
                triggerOnce
              >
                <div className="bg-gray-50 p-8 hover:shadow-lg transition-shadow duration-300 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#FFA500]">
                    {category.title}
                  </h3>
                  <ul className="space-y-4">
                    {category.projects.map((project, pIndex) => (
                      <li key={pIndex} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-[#FFA500] flex-shrink-0 mt-1" />
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {project}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Slide>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] p-8 md:p-12 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Siap untuk Proyek Anda?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Hubungi kami untuk konsultasi dan penawaran terbaik
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-[#FFA500] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
            >
              Konsultasi Gratis
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;