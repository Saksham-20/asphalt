import { motion } from 'framer-motion';
import { 
  FaFlask, 
  FaHammer, 
  FaChartLine, 
  FaShieldAlt, 
  FaAward, 
  FaClock,
  FaCog,
  FaSearch,
  FaFileAlt,
  FaCheckCircle,
  FaArrowRight
} from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: FaFlask,
      title: 'Product Recommendations',
      description: 'Expert guidance on asphalt product selection based on project requirements, environmental conditions, and Australian standards. We help clients choose the right products for optimal performance.',
      features: ['Product Selection', 'Performance Analysis', 'Environmental Considerations', 'Standards Compliance']
    },
    {
      icon: FaHammer,
      title: 'Supplier Network',
      description: 'Access to our established network of trusted suppliers and manufacturers across Australia. We connect clients with quality products and competitive pricing.',
      features: ['Supplier Relationships', 'Quality Products', 'Competitive Pricing', 'Reliable Supply']
    },
    {
      icon: FaChartLine,
      title: 'Market Analysis',
      description: 'Comprehensive market analysis and cost optimization guidance for asphalt procurement decisions. We help clients understand market trends and make cost-effective choices.',
      features: ['Market Trends', 'Cost Analysis', 'Price Optimization', 'Market Intelligence']
    },
    {
      icon: FaShieldAlt,
      title: 'Quality Standards',
      description: 'Deep knowledge of Australian quality standards and compliance requirements for product selection. We ensure all recommendations meet regulatory standards.',
      features: ['Standards Knowledge', 'Compliance Guidance', 'Quality Assurance', 'Regulatory Updates']
    },
    {
      icon: FaAward,
      title: 'Technical Support',
      description: 'Ongoing technical support and guidance for product application and project success. We provide expert advice throughout the project lifecycle.',
      features: ['Technical Guidance', 'Application Support', 'Project Consultation', 'Ongoing Assistance']
    },
    {
      icon: FaClock,
      title: 'Consultation Services',
      description: 'Professional consultation services to help clients make informed purchasing decisions. We provide personalized advice based on specific project needs.',
      features: ['Personalized Advice', 'Project Assessment', 'Decision Support', 'Expert Consultation']
    },
    {
      icon: FaCog,
      title: 'Procurement Planning',
      description: 'Strategic procurement planning and project management support. We help clients plan their material purchases efficiently and cost-effectively.',
      features: ['Strategic Planning', 'Project Management', 'Efficiency Optimization', 'Cost Management']
    },
    {
      icon: FaSearch,
      title: 'Product Research',
      description: 'Comprehensive product research and evaluation services. We help clients understand product specifications and performance characteristics.',
      features: ['Product Evaluation', 'Specification Analysis', 'Performance Research', 'Technical Documentation']
    },
    {
      icon: FaFileAlt,
      title: 'Documentation Support',
      description: 'Complete documentation support for procurement decisions and compliance requirements. We provide detailed reports and recommendations.',
      features: ['Documentation', 'Compliance Reports', 'Recommendation Reports', 'Technical Documentation']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your project requirements, budget, and specific material needs to understand your procurement goals.'
    },
    {
      step: '02',
      title: 'Project Assessment',
      description: 'Our team conducts a thorough assessment of your project to identify the best products and suppliers for your needs.'
    },
    {
      step: '03',
      title: 'Recommendation Development',
      description: 'We develop comprehensive product recommendations based on Australian standards, performance requirements, and cost optimization.'
    },
    {
      step: '04',
      title: 'Supplier Connection',
      description: 'We connect you with trusted suppliers and provide ongoing support throughout the procurement and project lifecycle.'
    }
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
              Our Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-shadow">
              Comprehensive asphalt testing solutions designed to meet your project 
              requirements and ensure compliance with Australian standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Professional Testing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive range of testing services covers every aspect of asphalt 
              quality assurance, from field sampling to laboratory analysis and compliance reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-6 group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white text-2xl" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <FaCheckCircle className="text-primary-500 text-xs" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Our Process */}
      <AnimatedSection className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Testing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure accurate results and comprehensive 
              analysis for every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">{step.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform translate-x-10"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Standards & Compliance */}
      <AnimatedSection className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Australian Standards Compliance
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                All our testing procedures are conducted in strict accordance with Australian 
                standards and industry best practices. We maintain full compliance with 
                relevant regulations and provide comprehensive documentation for all testing activities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-primary-500 text-xl" />
                  <span className="text-gray-700">AS 1141 Series - Aggregates Testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-primary-500 text-xl" />
                  <span className="text-gray-700">AS 2891 Series - Asphalt Testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-primary-500 text-xl" />
                  <span className="text-gray-700">NATA Accredited Procedures</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-primary-500 text-xl" />
                  <span className="text-gray-700">Quality Management Systems</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Our commitment to quality is demonstrated through our comprehensive 
                  quality management system and continuous improvement processes.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <FaAward className="text-white text-xl" />
                    <span>NATA Accredited Laboratory</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaShieldAlt className="text-white text-xl" />
                    <span>ISO 9001 Quality Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FaFileAlt className="text-white text-xl" />
                    <span>Comprehensive Documentation</span>
                  </div>
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
            Ready to Discuss Your Testing Requirements?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact our expert team for a customized testing plan that meets your 
            project specifications and budget requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline">
              Get Free Quote
            </a>
            <a href="tel:+61212345678" className="btn-secondary">
              Call (02) 1234 5678
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Services;



