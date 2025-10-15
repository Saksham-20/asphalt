import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaCheckCircle
} from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Office Address',
      details: [
        '123 Construction Way',
        'Sydney, NSW 2000',
        'Australia'
      ]
    },
    {
      icon: FaPhone,
      title: 'Phone Numbers',
      details: [
        'Main: (02) 1234 5678',
        'Mobile: 0400 123 456',
        'Fax: (02) 1234 5679'
      ]
    },
    {
      icon: FaEnvelope,
      title: 'Email Addresses',
      details: [
        'General: info@aussieasphalttesting.com.au',
        'Sales: sales@aussieasphalttesting.com.au',
        'Support: support@aussieasphalttesting.com.au'
      ]
    },
    {
      icon: FaClock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 7:00 AM - 5:00 PM',
        'Saturday: 8:00 AM - 2:00 PM',
        'Sunday: Closed',
        'Emergency: 24/7 Available'
      ]
    }
  ];

  const services = [
    'Asphalt Laboratory Testing (AS & Q Methods)',
    'Core Sampling and Site Testing',
    'Data Analysis & Advanced Testing Expertise',
    'Expert Solutions & Asphalt Specification Support',
    'Own Glassware'
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-shadow">
              Contact Us
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-shadow">
              Get in touch with our expert team for professional asphalt testing services. 
              We're here to help ensure your project meets the highest quality standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Ready to discuss your testing requirements? Our expert team is here to 
                  provide professional consultation and customized solutions for your project.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-primary-600 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <FaFacebook className="text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-primary-600 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-primary-600 hover:bg-primary-500 rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Services Overview */}
      <AnimatedSection className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Testing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive asphalt testing services to ensure your project 
              meets Australian standards and quality requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-primary-500 text-xl flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{service}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Map Section */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Find Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Visit our office in Sydney or contact us for on-site testing services 
              throughout Australia.
            </p>
          </div>

          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <FaMapMarkerAlt className="text-4xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
              <p className="mb-4">123 Construction Way, Sydney, NSW 2000</p>
              <p className="text-sm">
                Google Maps integration can be added here
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Emergency Contact */}
      <AnimatedSection className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Emergency Testing Services
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Need urgent testing services? Our emergency response team is available 
            24/7 for critical project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+61400123456" className="btn-outline">
              Emergency Hotline: 0400 123 456
            </a>
            <a href="mailto:emergency@aussieasphalttesting.com.au" className="btn-secondary">
              Emergency Email
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;



