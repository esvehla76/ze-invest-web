import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#DCCDB7] text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Ze-Invest Logo" className="h-36 mr-10" />
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-[#3B7CA4] transition duration-300">O nás</a></li>
              <li><a href="#benefits" className="hover:text-[#3B7CA4] transition duration-300">Výhody</a></li>
              <li><a href="#contact" className="hover:text-[#3B7CA4] transition duration-300">Kontakt</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#3B7CA4] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Investice do udržitelné budoucnosti</h2>
          <p className="text-xl max-w-3xl mx-auto">
          Vítr pro stabilní a nezávyslou budoucnost
          </p>
          <button className="mt-8 bg-[#4E7C2D] hover:bg-[#3e6324] text-white py-3 px-8 rounded-full font-semibold transition duration-300">
            Zjistit více
          </button>
        </div>
      </section>

      {/* About the Project */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#4E7C2D] mb-12">Náš projekt větrné energie</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img src="/wind-turbine.jpg" alt="Větrné turbíny" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                Ze-Invest se věnuje vývoji udržitelných řešení větrné energie, která prospívají jak životnímu prostředí, tak místním obyvatelům. Naše projekty využívají přírodní sílu větru k výrobě čisté elektřiny a snižují závislost na fosilních palivech.
              </p>
              <p className="text-lg mb-4">
                Díky nejmodernější technologii turbín a pečlivému výběru lokalit maximalizujeme výrobu energie a minimalizujeme dopad na životní prostředí. Každý projekt je navržen s důrazem na udržitelnost a integraci.
              </p>
              <p className="text-lg">
                Věříme v transparentní přístup a vytváříme energetická řešení, která přinášejí dlouhodobé výhody pro všechny zúčastněné strany.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-[#DCCDB7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#4E7C2D] mb-12">Přínosy pro obce a region</h2>
          <h3 className="text-2xl font-bold text-center text-[#4E7C2D] mb-12">Věříme, že čistá energie může vznikat v souladu s přírodou i lidmi, kteří v ní žijí.</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#3B7CA4] text-4xl mb-4">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Transparentní finanční přínos</h3>
              <p>Obce a občané získají podíl z výnosů projektu. Tyto prostředky mohou využít na rozvoj veřejných služeb nebo místní infrastruktury.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#3B7CA4] text-4xl mb-4">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Vliv na životní prostředí</h3>
              <p>Projekt respektuje krajinný ráz a je navržen s ohledem na životní prostředí i soužití s obyvateli v okolí.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#3B7CA4] text-4xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Spolupráce s obcemi</h3>
              <p>O všem jednáme otevřeně a včas. Projekt konzultujeme se zástupci obcí, aby se stal přínosem, nikoliv zdrojem napětí.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#4E7C2D] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Kontaktujte nás</h2>
          <div className="max-w-3xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <div className="mb-8 text-center">
              <p className="font-bold mb-1">	ZE Invest s.r.o.</p>
              <p className="mb-3">Chrustenice 179, 267 12 Chrustenice</p>
              <p className="mb-3">IČO: 222 68 715</p>
              <p className="mb-3">
                <a href="mailto:info@zeinvest.cz" className="text-[#3B7CA4] hover:underline">info@zeinvest.cz</a>
              </p>
            </div>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Jméno</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Příjmení</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">E-mail</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Zpráva</label>
                <textarea rows="4" className="w-full p-3 border border-gray-300 rounded-md"></textarea>
              </div>
              <button type="submit" className="bg-[#3B7CA4] hover:bg-[#336b8e] text-white py-3 px-6 rounded-md font-medium transition duration-300">
                Odeslat zprávu
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; {new Date().getFullYear()} Ze-Invest s.r.o.. Všechna práva vyhrazena.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#DCCDB7] transition duration-300">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="#" className="hover:text-[#DCCDB7] transition duration-300">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="#" className="hover:text-[#DCCDB7] transition duration-300">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
