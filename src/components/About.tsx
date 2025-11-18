import { Target, Eye, Building2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tentang Kami
            </h2>
            <div className="w-24 h-1 bg-[#FFA500] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                PT. Indodaya Naratama Abadi adalah perusahaan yang bergerak di
                bidang <span className="font-semibold text-[#FFA500]">Engineering, Procurement dan Construction</span>.
                Melayani sektor swasta, pemerintah, serta Badan Usaha Milik Negara (BUMN).
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dengan komitmen tinggi terhadap kualitas dan profesionalisme,
                kami hadir untuk menyediakan solusi terbaik bagi kebutuhan
                pengadaan Anda.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sejak berdiri, kami telah dipercaya oleh berbagai instansi dan
                perusahaan dalam menyediakan berbagai produk dan layanan
                berkualitas. Dengan pengalaman yang luas dan tenaga ahli yang
                profesional, kami memastikan setiap proyek berjalan sesuai
                dengan standar yang tinggi, tepat waktu, dan efisien.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#FFA500] to-[#FF8C00] p-8 text-white">
              <Building2 className="w-16 h-16 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Kualifikasi Perusahaan</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold">Nama Perusahaan</div>
                  <div className="opacity-90">PT. INDODAYA NARATAMA ABADI</div>
                </div>
                <div>
                  <div className="font-semibold">Alamat</div>
                  <div className="opacity-90">
                    ALDEOZ BUILDING LT. 6<br />
                    Jl. Warung Jati Barat No. 39,<br />
                    Jakarta Selatan
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Akta Notaris Pendirian</div>
                  <div className="opacity-90">03 / 21-11-2019</div>
                </div>
                <div>
                  <div className="font-semibold">Bidang Usaha</div>
                  <div className="opacity-90">
                    Engineering, Procurement and Construction
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 border-l-4 border-[#FFA500]">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Eye className="w-12 h-12 text-[#FFA500]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">VISI</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Menjadi perusahaan yang bergerak di bidang Engineering,
                    Procurement dan Construction serta rental peralatan terkemuka
                    yang dikelola secara profesional dengan konsep bisnis dan
                    memberikan kepuasan yang maksimal kepada klien.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 border-l-4 border-[#FFA500]">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Target className="w-12 h-12 text-[#FFA500]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">MISI</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Menekuni usaha di bidang Engineering Procurement, Konstruksi
                    dan Penyewaan Peralatan yang menjadi bisnis utama serta
                    meningkatkan kualitas dalam pelayanan dan kepuasan pelanggan,
                    dengan mengedepankan langkah-langkah dalam menciptakan nilai
                    tambah bagi para pemangku kepentingan.
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

export default About;
