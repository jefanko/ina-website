import { Building2, Award, Users, TrendingUp } from 'lucide-react';
import { Zoom } from 'react-awesome-reveal';

const Clients = () => {
  const clientTypes = [
    {
      icon: Building2,
      title: 'BUMN',
      description: 'Badan Usaha Milik Negara',
      examples: ['PT PLN (Persero)', 'PT PLN UIT JBT', 'PT PLN UIW NTB'],
    },
    {
      icon: Award,
      title: 'Pemerintah',
      description: 'Instansi Pemerintah',
      examples: ['Kementerian ESDM', 'Pemerintah Daerah', 'BPPT'],
    },
    {
      icon: Users,
      title: 'Swasta',
      description: 'Sektor Swasta',
      examples: ['Perusahaan Konstruksi', 'Industri Manufaktur', 'Developer'],
    },
  ];

  const achievements = [
    {
      icon: Award,
      value: '5+',
      label: 'Tahun Pengalaman',
    },
    {
      icon: Building2,
      value: '100+',
      label: 'Proyek Selesai',
    },
    {
      icon: Users,
      value: '50+',
      label: 'Klien Puas',
    },
    {
      icon: TrendingUp,
      value: '100%',
      label: 'Tingkat Kepuasan',
    },
  ];

  return (
    <section id="clients" className="py-24 bg-gray-50/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Klien Kami
            </h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dipercaya oleh berbagai instansi dan perusahaan terkemuka di
              Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Zoom cascade damping={0.2} triggerOnce>
              {clientTypes.map((client, index) => (
                <div
                  key={index}
                  className="bg-white p-8 text-center hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 bg-brand-primary bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-colors">
                      <client.icon className="w-10 h-10 text-brand-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {client.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{client.description}</p>
                  <ul className="space-y-2">
                    {client.examples.map((example, eIndex) => (
                      <li
                        key={eIndex}
                        className="text-sm text-gray-700 bg-gray-50 py-2 px-3"
                      >
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </Zoom>
          </div>

          <div className="bg-white p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Pencapaian Kami
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <achievement.icon className="w-12 h-12 text-brand-primary" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-gray-700 text-sm md:text-base">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Mengapa Memilih Kami?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div>
                  <div className="text-brand-primary text-4xl font-bold mb-2">
                    ✓
                  </div>
                  <h4 className="font-semibold mb-2">Profesional</h4>
                  <p className="text-sm text-gray-300">
                    Tim ahli berpengalaman
                  </p>
                </div>
                <div>
                  <div className="text-brand-primary text-4xl font-bold mb-2">
                    ✓
                  </div>
                  <h4 className="font-semibold mb-2">Berkualitas</h4>
                  <p className="text-sm text-gray-300">Standar kerja tinggi</p>
                </div>
                <div>
                  <div className="text-brand-primary text-4xl font-bold mb-2">
                    ✓
                  </div>
                  <h4 className="font-semibold mb-2">Tepat Waktu</h4>
                  <p className="text-sm text-gray-300">
                    Penyelesaian sesuai jadwal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;