import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: [
        'ALDEOZ BUILDING LT. 6',
        'Jl. Warung Jati Barat No. 39',
        'Jakarta Selatan',
      ],
    },
    {
      icon: Phone,
      title: 'Telepon',
      content: ['021-27534458', 'Fax: 021-27534459'],
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['indodaya.pt@gmail.com'],
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: ['Senin - Jumat: 08:00 - 17:00', 'Sabtu - Minggu: Tutup'],
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <div className="w-24 h-1 bg-brand-primary mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kami siap membantu kebutuhan proyek Anda dengan solusi terbaik
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-brand-primary bg-opacity-10 rounded-full flex items-center justify-center">
                    <info.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.content.map((line, lIndex) => (
                  <p
                    key={lIndex}
                    className="text-sm text-gray-600 leading-relaxed"
                  >
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-brand-primary to-brand-dark p-8 md:p-12 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Informasi Perusahaan
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="font-semibold mb-1">Nama Perusahaan</div>
                  <div className="text-sm opacity-90">
                    PT. INDODAYA NARATAMA ABADI
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-1">
                    Akta Notaris Pendirian
                  </div>
                  <div className="text-sm opacity-90">03 / 21-11-2019</div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Bidang Usaha</div>
                  <div className="text-sm opacity-90">
                    Engineering, Procurement and Construction
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Layanan</div>
                  <div className="text-sm opacity-90">
                    Melayani sektor swasta, pemerintah, dan BUMN
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Kirim Pesan
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-primary transition-colors"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-primary transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-brand-primary transition-colors"
                    placeholder="Tuliskan pesan Anda di sini..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-brand-primary text-white px-6 py-3 font-semibold hover:bg-brand-dark transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;