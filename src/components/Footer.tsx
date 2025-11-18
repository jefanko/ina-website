const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src="/Picture1.png" alt="Logo" className="h-12 w-auto" />
                <div>
                  <div className="text-[#FFA500] font-bold text-sm leading-tight">
                    PT. INDODAYA
                  </div>
                  <div className="text-[#FFA500] font-bold text-sm leading-tight">
                    NARATAMA ABADI
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Solusi terpercaya untuk Engineering, Procurement & Construction
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Navigasi</h3>
              <ul className="space-y-2 text-sm">
                {['Home', 'Tentang Kami', 'Layanan', 'Proyek', 'Klien', 'Kontak'].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                        className="text-gray-400 hover:text-[#FFA500] transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Kontak</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>ALDEOZ BUILDING LT. 6</li>
                <li>Jl. Warung Jati Barat No. 39</li>
                <li>Jakarta Selatan</li>
                <li className="pt-2">Phone: 021-27534458</li>
                <li>Fax: 021-27534459</li>
                <li>Email: indodaya.pt@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; {currentYear} PT. Indodaya Naratama Abadi. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
