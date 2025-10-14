import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaFlask, 
  FaHammer, 
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
      icon: FaFlask,
      title: 'Product Recommendations',
      description: 'Expert guidance on asphalt product selection based on project requirements and Australian standards.'
    },
    {
      icon: FaHammer,
      title: 'Supplier Network',
      description: 'Access to trusted supplier relationships and quality products from leading manufacturers.'
    },
    {
      icon: FaChartLine,
      title: 'Market Analysis',
      description: 'Comprehensive market analysis and cost optimization guidance for asphalt procurement decisions.'
    },
    {
      icon: FaShieldAlt,
      title: 'Quality Standards',
      description: 'Deep knowledge of Australian quality standards and compliance requirements for product selection.'
    },
    {
      icon: FaAward,
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
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop" 
            alt="Highway with cars" 
            className="w-full h-full object-cover"
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
              <Link to="/contact" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center space-x-2">
                <span>Request Consultation</span>
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>

      </section>

      {/* About Preview Section */}
      <AnimatedSection className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 mb-4 lg:mb-6">
                About Asphaltic Science
              </h2>
              <div className="space-y-3 lg:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  Asphaltic Science operates as a reference company, providing expert guidance 
                  and recommendations to help clients make informed decisions about asphalt 
                  products and materials for their infrastructure projects.
                </p>
                <p>
                  Our clients visit our office to discuss their project requirements and receive 
                  professional recommendations on what products to purchase. We provide detailed 
                  guidance on material specifications, quality standards, and supplier recommendations 
                  to ensure project success.
                </p>
                <p>
                  With deep expertise in Australian standards and market knowledge, we help 
                  clients navigate the complex world of asphalt materials and make the right 
                  purchasing decisions for safer roads and infrastructure.
                </p>
              </div>
            </div>

            {/* Right Content - Illustrations */}
            <div className="relative order-1 lg:order-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-8">
                {/* Left Worker */}
                <div className="space-y-4">
                  <div className="w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                        <FaHammer className="text-white text-lg sm:text-xl lg:text-2xl" />
                      </div>
                      <p className="text-xs sm:text-sm text-primary-800 font-medium">Field Testing</p>
                    </div>
                  </div>
                </div>

                {/* Right Worker */}
                <div className="space-y-4 sm:mt-8">
                  <div className="w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-secondary-600 rounded-full flex items-center justify-center mx-auto mb-3 lg:mb-4">
                        <FaFlask className="text-white text-lg sm:text-xl lg:text-2xl" />
                      </div>
                      <p className="text-xs sm:text-sm text-secondary-800 font-medium">Lab Analysis</p>
                    </div>
                  </div>
                </div>
              </div>
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
