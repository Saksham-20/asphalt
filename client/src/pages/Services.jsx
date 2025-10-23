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
      title: 'Asphalt Laboratory Testing (AS & Q Methods)',
      description: 'We provide comprehensive asphalt laboratory testing services in accordance with Australian Standards (AS) and Queensland Department of Transport and Main Roads (Q) methods. Our fully equipped facilities and skilled technicians ensure accurate results for mix design validation, density, air voids, bitumen content, and performance testing — guaranteeing quality and compliance for every project.',
      features: ['Mix Design Validation', 'Density & Air Voids Testing', 'Bitumen Content Analysis', 'Performance Testing']
    },
    {
      icon: FaHammer,
      title: 'Core Sampling and Site Testing',
      description: 'Our experienced field technicians specialise in core sampling and on-site asphalt testing, using precision equipment to assess in-situ pavement quality. From sampling and compaction testing to thickness verification, we ensure reliable data that reflects real site conditions and supports confident decision-making for project stakeholders.',
      features: ['Core Sampling', 'On-Site Testing', 'Compaction Testing', 'Thickness Verification']
    },
    {
      icon: FaChartLine,
      title: 'Data Analysis & Advanced Testing Expertise',
      description: 'At Asphaltic Science, we take pride in our strong analytical capabilities and deep understanding of the latest test methods and specifications. Our team interprets complex test data to provide clear, actionable insights, helping clients optimise mix designs, improve quality control, and ensure conformance with the latest industry standards.',
      features: ['Advanced Test Methods', 'Data Interpretation', 'Mix Design Optimization', 'Quality Control Support']
    },
    {
      icon: FaCog,
      title: 'Expert Solutions & Asphalt Specification Support',
      description: 'We offer specialised consulting and technical solutions to help clients meet complex asphalt specifications — from troubleshooting performance issues to commissioning new asphalt plants. With hands-on industry experience and a solutions-driven approach, our experts ensure your operations deliver consistent, compliant, and high-performing asphalt outcomes.',
      features: ['Specification Consulting', 'Performance Troubleshooting', 'Plant Commissioning', 'Technical Solutions']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Project Briefing',
      description: 'We discuss your testing requirements, project specifications, and quality standards to understand your testing goals and objectives.'
    },
    {
      step: '02',
      title: 'Sample Collection',
      description: 'Our field technicians collect samples using precision equipment, or we receive laboratory samples for comprehensive testing analysis.'
    },
    {
      step: '03',
      title: 'Laboratory Analysis',
      description: 'We conduct comprehensive testing per Australian Standards, ensuring accurate results for mix design, density, and performance analysis.'
    },
    {
      step: '04',
      title: 'Results & Reporting',
      description: 'We provide detailed reports with analysis, recommendations, and compliance documentation to support your project decisions.'
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
                <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white text-2xl" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                {service.features.length > 0 && (
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <FaCheckCircle className="text-primary-500 text-xs" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
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
                  <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Australian Standards Compliance
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our unwavering commitment to Australian Standards is your guarantee of quality and precision. Every test is meticulously performed to meet the highest industry benchmarks and regulatory requirements, ensuring the integrity of your project. This rigorous adherence provides you with fully documented, traceable, and certified results you can trust. By choosing us, you are choosing the peace of mind that comes from verifiable compliance and the assurance that your materials and processes are safe and reliable.
              </p>
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
              Call +61 449 987 475
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Services;



