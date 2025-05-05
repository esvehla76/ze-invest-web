import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#DCCDB7] text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Ze-Invest Logo" className="h-12 mr-4" />
            <h1 className="text-3xl font-bold text-[#4E7C2D]">Ze-Invest</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-[#3B7CA4] transition duration-300">About</a></li>
              <li><a href="#benefits" className="hover:text-[#3B7CA4] transition duration-300">Benefits</a></li>
              <li><a href="#contact" className="hover:text-[#3B7CA4] transition duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#3B7CA4] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Investing in a Sustainable Future</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering communities through clean, renewable wind energy solutions
          </p>
          <button className="mt-8 bg-[#4E7C2D] hover:bg-[#3e6324] text-white py-3 px-8 rounded-full font-semibold transition duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* About the Project */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#4E7C2D] mb-12">Our Wind Energy Project</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <img src="/wind-turbine.jpg" alt="Wind Turbines" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                Ze-Invest is dedicated to developing sustainable wind energy solutions that benefit both the environment and local communities. Our projects harness the natural power of wind to generate clean electricity, reducing reliance on fossil fuels.
              </p>
              <p className="text-lg mb-4">
                With state-of-the-art turbine technology and careful site selection, we maximize energy production while minimizing environmental impact. Each project is designed with sustainability and community integration at its core.
              </p>
              <p className="text-lg">
                We believe in transparent partnerships with communities, creating energy solutions that provide long-term benefits for all stakeholders involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-[#DCCDB7]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#4E7C2D] mb-12">Benefits for Communities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#3B7CA4] text-4xl mb-4">
                <i className="fas fa-hand-holding-usd"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Economic Growth</h3>
              <p>Our projects create jobs, stimulate local businesses, and provide financial returns to community investors.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#3B7CA4] text-4xl mb-4">
                <i className="fas fa-leaf"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Environmental Impact</h3>
              <p>Clean energy production reduces carbon emissions and pollution, contributing to a healthier local environment.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-[#3B7CA4] text-4xl mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Community Ownership</h3>
              <p>Our cooperative model ensures communities have a say in project development and share in the benefits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#4E7C2D] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-3xl mx-auto bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea rows="4" className="w-full p-3 border border-gray-300 rounded-md"></textarea>
              </div>
              <button type="submit" className="bg-[#3B7CA4] hover:bg-[#336b8e] text-white py-3 px-6 rounded-md font-medium transition duration-300">
                Send Message
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
              <img src="/logo.png" alt="Ze-Invest Logo" className="h-10 mb-2" />
              <p>&copy; {new Date().getFullYear()} Ze-Invest. All rights reserved.</p>
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