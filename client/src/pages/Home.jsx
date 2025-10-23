import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaChartLine, 
  FaAward, 
  FaClock,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaFlask,
  FaHammer,
  FaCog
} from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = [
    {
      icon: FaFlask,
      title: 'Asphalt Laboratory Testing (AS & Q Methods)',
      description: 'Comprehensive laboratory testing services in accordance with Australian Standards and Queensland methods for mix design validation and performance testing.'
    },
    {
      icon: FaHammer,
      title: 'Core Sampling and Site Testing',
      description: 'Expert field technicians specialise in core sampling and on-site asphalt testing using precision equipment to assess pavement quality.'
    },
    {
      icon: FaChartLine,
      title: 'Data Analysis & Advanced Testing Expertise',
      description: 'Strong analytical capabilities and deep understanding of latest test methods to provide clear, actionable insights for quality control.'
    },
    {
      icon: FaCog,
      title: 'Expert Solutions & Asphalt Specification Support',
      description: 'Specialised consulting and technical solutions to help meet complex asphalt specifications and troubleshoot performance issues.'
    }
  ];

  const features = [
    {
      icon: FaAward,
      title: 'Market Expertise',
      description: 'Deep knowledge of Australian standards and industry best practices for product selection.'
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Experienced professionals with decades of combined industry and market expertise.'
    },
    {
      icon: FaCheckCircle,
      title: 'Quality Guaranteed',
      description: 'Comprehensive guidance ensuring clients select the highest quality products for their projects.'
    },
    {
      icon: FaClock,
      title: 'Fast Response',
      description: 'Quick response times and efficient consultation processes for your project timeline.'
    }
  ];


  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/34214043/pexels-photo-34214043.jpeg" 
            alt="Aerial view of Jönköping highway in autumn" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/50 to-dark-900/80"></div>
        </div>
        
        {/* Cloud Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white via-white/80 to-transparent"></div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-16 lg:py-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-center lg:text-left order-2 lg:order-1"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 leading-tight">
                <span className="block text-primary-400">Assuring Quality.</span>
                <span className="block text-primary-400">Securing Safer Journey for Australians.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 lg:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Experienced and independent asphalt testing service for <span className="text-accent-500 font-semibold">Australian Roads</span>
              </p>
            </motion.div>

            {/* Right Content - CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end order-1 lg:order-2"
            >
              <Link to="/contact" className="btn-primary-mobile lg:btn-primary text-base sm:text-lg flex items-center space-x-3 group">
                <span className="relative z-10">Request Consultation</span>
                <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>

      </section>

      {/* About Preview Section */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 mb-6 lg:mb-8 text-center">
              About Asphaltic Science
            </h2>
            <div className="space-y-4 lg:space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            
                
              
              <p>
                Asphaltic Science is a trusted Australian contractor specialising in the provision of expert laboratory and field technicians for asphalt testing and quality assurance. We play a vital role in supporting the country's road and infrastructure development through precise, reliable, and standards-compliant testing solutions.
              </p>
              <p>
                Our team of highly trained professionals delivers a complete range of laboratory and on-site testing services, ensuring that every mix design, sample, and material meets stringent Australian Standards and project specifications. From density and air-void analysis to bitumen content, compaction, and performance testing, we ensure the quality, safety, and durability of asphalt works from start to finish.
              </p>
              <p>
                At Asphaltic Science, we combine technical expertise—honed over a decade of working strictly to Australian Standards—with state-of-the-art equipment and industry insight to help our clients achieve superior construction outcomes. Whether for major infrastructure projects or local road upgrades, our commitment remains the same — delivering accurate results, dependable service, and unmatched professional support in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-900 mb-3 lg:mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive asphalt testing solutions tailored to meet your project requirements 
              and ensure compliance with Australian standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary-600 rounded-xl flex items-center justify-center mb-3 lg:mb-4">
                  <service.icon className="text-white text-lg sm:text-xl lg:text-2xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-dark-900 mb-2 lg:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/services" 
              className="relative inline-block bg-primary-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg hover:bg-primary-700 transition-colors duration-300 text-sm sm:text-base"
            >
              View All Services
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary-600"></div>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-900 mb-3 lg:mb-4">
              Why Choose Us
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              We combine technical expertise, extensive industry experience, and an unwavering commitment to quality to deliver exceptional testing services. Understanding the critical nature of your projects, we are available 24/7 and proudly offer flexible fly-in/fly-out services to ensure our support is always where and when you need it most.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary-600 rounded-xl flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <feature.icon className="text-white text-lg sm:text-xl lg:text-2xl" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-dark-900 mb-2 lg:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Coming Soon Feature - Separate and Distinct */}
          <div className="mt-16 lg:mt-20 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative bg-white rounded-2xl p-8 lg:p-12 shadow-xl border-2 border-primary-100 max-w-md mx-auto"
            >
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                NEW
              </div>
              <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FaFlask className="text-white text-3xl lg:text-4xl" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-dark-900 mb-4 text-center">
                Own Set of Lab Glassware
              </h3>
              <p className="text-primary-600 font-medium italic text-center text-lg">
                Coming soon...
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>


      {/* CTA Section */}
      <AnimatedSection className="section-padding bg-primary-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 max-w-2xl mx-auto opacity-90 px-4">
            Get in touch with our expert team for a free consultation and quote. 
            We're here to help ensure your project meets the highest quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link to="/contact" className="btn-outline text-sm sm:text-base">
              Get Free Quote
            </Link>
            <a href="tel:+61212345678" className="btn-secondary text-sm sm:text-base">
              Call +61 449 987 475
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
