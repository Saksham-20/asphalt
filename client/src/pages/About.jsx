import { motion } from 'framer-motion';
import { 
  FaAward, 
  FaUsers, 
  FaShieldAlt, 
  FaChartLine, 
  FaCheckCircle,
  FaCertificate,
  FaGlobe,
  FaHandshake,
  FaLightbulb
} from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  const values = [
    {
      icon: FaShieldAlt,
      title: 'Quality First',
      description: 'We maintain the highest standards in our recommendations, ensuring clients receive guidance on the best quality products for their projects.'
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Our experienced professionals bring decades of industry knowledge and market expertise to help clients make informed purchasing decisions.'
    },
    {
      icon: FaCheckCircle,
      title: 'Compliance',
      description: 'Full knowledge of Australian standards and industry regulations, ensuring our recommendations meet all compliance requirements.'
    },
    {
      icon: FaHandshake,
      title: 'Partnership',
      description: 'We work closely with our clients as trusted advisors, providing ongoing support and guidance throughout their purchasing decisions.'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'We stay ahead of market trends and new products to provide cutting-edge recommendations and innovative solutions.'
    }
  ];

  const marketExpertise = [
    { name: 'Product Specifications', description: 'Deep knowledge of asphalt product specifications and standards' },
    { name: 'Supplier Networks', description: 'Established relationships with leading asphalt suppliers' },
    { name: 'Quality Standards', description: 'Expertise in Australian quality standards and compliance requirements' },
    { name: 'Market Trends', description: 'Up-to-date knowledge of industry trends and new products' },
    { name: 'Cost Optimization', description: 'Guidance on cost-effective product selection and procurement' },
    { name: 'Technical Support', description: 'Ongoing technical support for product selection and application' }
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
              About Aussie Asphalt Testing
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-shadow">
              Leading Australia's construction industry with professional testing services 
              and quality assurance solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to be the trusted technical partner behind every superior construction outcome. We provide expert guidance and precise, standards-compliant asphalt testing that allows our clients to make informed decisions with confidence. We are dedicated to ensuring the quality, safety, and durability of Australia's vital infrastructure projects from start to finish.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To be Australia's most trusted and innovative reference company for asphalt products, 
                  setting the standard for expert guidance, market knowledge, and customer service 
                  in the construction industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Company Values */}
      <AnimatedSection className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our commitment 
              to excellence in service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Market Expertise & Knowledge */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Market Expertise & Knowledge
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We maintain comprehensive knowledge of the asphalt market, Australian standards, 
              and industry regulations to provide expert guidance on product selection and procurement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketExpertise.map((expertise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCertificate className="text-white text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {expertise.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {expertise.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Team & Expertise */}
      <AnimatedSection className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Team & Expertise
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The foundation of our service is an expert team where our key professionals each possess over 10 years of hands-on experience in asphalt technology and materials analysis. This specialized knowledge, grounded in a deep understanding of Australian Standards, ensures we deliver exceptionally accurate and reliable results, providing you with the critical insights needed for project success.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaUsers className="text-white text-3xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Expert Team</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our multidisciplinary team combines technical expertise with practical 
                    industry experience to deliver comprehensive testing solutions tailored 
                    to your specific project requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner With Australia's Leading Testing Experts
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the difference that professional expertise and commitment to quality 
            can make for your project. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline">
              Get In Touch
            </a>
            <a href="/services" className="btn-secondary">
              View Our Services
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;



