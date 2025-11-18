import { Wrench, ShoppingCart, HardHat, Zap } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Engineering',
      description:
        'Layanan teknik dan desain profesional untuk berbagai proyek infrastruktur dan sistem kelistrikan.',
    },
    {
      icon: ShoppingCart,
      title: 'Procurement',
      description:
        'Pengadaan material dan peralatan berkualitas tinggi untuk kebutuhan proyek Anda.',
    },
    {
      icon: HardHat,
      title: 'Construction',
      description:
        'Pelaksanaan konstruksi dengan standar tinggi, tepat waktu, dan efisien.',
    },
    {
      icon: Zap,
      title: 'Electrical Services',
      description:
        'Spesialis dalam instalasi dan pemeliharaan sistem transmisi dan distribusi listrik.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Layanan Kami
            </h2>
            <div className="w-24 h-1 bg-[#FFA500] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi komprehensif untuk kebutuhan Engineering, Procurement, dan
              Construction Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Fade direction="up" cascade damping={0.1} triggerOnce>
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 hover:shadow-xl transition-all duration-300 group border-t-4 border-transparent hover:border-[#FFA500] hover:scale-105" // Menambahkan hover:scale-105 untuk "expansion"
                >
                  <div className="mb-6">
                    <service.icon className="w-16 h-16 text-[#FFA500] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </Fade>
          </div>

          <div className="mt-16 bg-white p-8 md:p-12 border-l-4 border-[#FFA500]">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Keunggulan Layanan Kami
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-[#FFA500] mb-2">
                  100+
                </div>
                <p className="text-gray-700">Proyek Selesai</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FFA500] mb-2">
                  5+ Tahun
                </div>
                <p className="text-gray-700">Pengalaman</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FFA500] mb-2">
                  100%
                </div>
                <p className="text-gray-700">Kepuasan Klien</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;