import { motion } from 'framer-motion';
import { FaFlask, FaClock, FaEnvelope } from 'react-icons/fa';

const ComingSoon = () => {
  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* Icon */}
          <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <FaFlask className="text-white text-4xl" />
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
            Glassware Supply
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary-600 mb-8">
            Coming Soon
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
            We're working on expanding our services to include professional glassware supply 
            for laboratory testing. This will complement our existing asphalt testing services 
            and provide comprehensive laboratory solutions.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <FaFlask className="text-primary-600 text-3xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-dark-900 mb-2">Laboratory Glassware</h3>
              <p className="text-gray-600">High-quality laboratory equipment and supplies</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <FaClock className="text-primary-600 text-3xl mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-dark-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable supply chain management</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold text-dark-900 mb-4">
              Get Notified When We Launch
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to be among the first to know when our glassware supply service becomes available.
            </p>
            <a 
              href="mailto:info@asphalticscience.com.au?subject=Glassware Supply Interest"
              className="inline-flex items-center space-x-2 bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors duration-300"
            >
              <FaEnvelope />
              <span>Contact Us</span>
            </a>
          </div>

          {/* Back to Home */}
          <div className="mt-8">
            <a 
              href="/"
              className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
            >
              ← Back to Home
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;
