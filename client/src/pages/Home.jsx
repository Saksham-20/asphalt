import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaChartLine, 
  FaShieldAlt, 
  FaAward, 
  FaClock,
  FaUsers,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  const services = [
    {
      icon: FaChartLine,
      title: 'Product Recommendations',
      description: 'Expert guidance on asphalt product selection based on project requirements and Australian standards.'
    },
    {
      icon: FaShieldAlt,
      title: 'Supplier Network',
      description: 'Access to trusted supplier relationships and quality products from leading manufacturers.'
    },
    {
      icon: FaUsers,
      title: 'Market Analysis',
      description: 'Comprehensive market analysis and cost optimization guidance for asphalt procurement decisions.'
    },
    {
      icon: FaAward,
      title: 'Quality Standards',
      description: 'Deep knowledge of Australian quality standards and compliance requirements for product selection.'
    },
    {
      icon: FaCheckCircle,
      title: 'Technical Support',
      description: 'Ongoing technical support and guidance for product application and project success.'
    },
    {
      icon: FaClock,
      title: 'Consultation Services',
      description: 'Professional consultation services to help clients make informed purchasing decisions.'
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
    },
    {
      icon: FaShieldAlt,
      title: 'Supplier Network',
      description: 'Established relationships with trusted suppliers and manufacturers across Australia.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'Metro Construction Group',
      text: 'Aussie Asphalt Testing has been our go-to partner for over 5 years. Their expertise and reliability have been instrumental in our project success.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Highway Infrastructure Ltd',
      text: 'Professional service with accurate results. Their team understands the complexities of large-scale infrastructure projects.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      company: 'Urban Development Corp',
      text: 'Outstanding quality assurance services. They helped us maintain the highest standards across all our residential developments.',
      rating: 5
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
                At Asphaltic Science, we combine technical expertise, state-of-the-art equipment, and industry insight to help our clients achieve superior construction outcomes. Whether for major infrastructure projects or local road upgrades, our commitment remains the same — delivering accurate results, dependable service, and unmatched professional support in every project we undertake.
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
              We combine technical expertise, industry experience, and commitment to quality 
              to deliver exceptional testing services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
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
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 lg:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Trusted by leading construction companies across Australia for reliable 
              and professional testing services.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                company={testimonial.company}
                text={testimonial.text}
                rating={testimonial.rating}
                delay={index * 0.1}
              />
            ))}
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
              Call (02) 1234 5678
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;
