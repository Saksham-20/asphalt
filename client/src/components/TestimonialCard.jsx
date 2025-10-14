import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialCard = ({ 
  name, 
  company, 
  text, 
  rating = 5,
  delay = 0,
  className = '' 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`card p-4 sm:p-6 relative ${className}`}
    >
      {/* Quote Icon */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-primary-200">
        <FaQuoteLeft size={20} className="sm:w-6 sm:h-6" />
      </div>
      
      {/* Rating Stars */}
      <div className="flex justify-center mb-3 sm:mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar
            key={i}
            className={`text-xs sm:text-sm ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      {/* Testimonial Text */}
      <p className="text-sm sm:text-base text-gray-700 italic text-center mb-4 sm:mb-6 leading-relaxed">
        "{text}"
      </p>
      
      {/* Author Info */}
      <div className="text-center">
        <h4 className="text-sm sm:text-base font-semibold text-gray-800">{name}</h4>
        <p className="text-xs sm:text-sm text-primary-600">{company}</p>
      </div>
      
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10"></div>
    </motion.div>
  );
};

export default TestimonialCard;
