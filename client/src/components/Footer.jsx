import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Asphalt Laboratory Testing (AS & Q Methods)',
    'Core Sampling and Site Testing',
    'Data Analysis & Advanced Testing Expertise',
    'Expert Solutions & Asphalt Specification Support',
    'Own Glassware',
  ];

  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.svg" 
                alt="Asphaltic Science Logo" 
                className="h-28 w-auto brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">Asphaltic Science</h3>
                <p className="text-sm text-gray-400">Professional Testing Services</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading asphalt testing company in Australia, providing comprehensive 
              quality assurance and material testing services with Australian standards compliance.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-600 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-600 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-600 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 hover:text-primary-400 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    11/18-20 Cessna Dr,<br />
                    Caboolture QLD 4510<br />
                    Australia
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary-500 flex-shrink-0" />
                <a 
                  href="tel:+61212345678" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  +61 449 987 475
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary-500 flex-shrink-0" />
                <a 
                  href="mailto:admin@asphalticscience.com.au" 
                  className="text-gray-300 hover:text-primary-400 transition-colors"
                >
                  admin@asphalticscience.com.au
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Aussie Asphalt Testing. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
              <span className="text-gray-400">
                ABN: 12 345 678 901
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
