import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter, FaSearch } from 'react-icons/fa';
import ImageGallery from '../components/ImageGallery';
import AnimatedSection from '../components/AnimatedSection';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'lab', name: 'Laboratory Work' },
    { id: 'field', name: 'Field Operations' },
    { id: 'equipment', name: 'Equipment' },
    { id: 'projects', name: 'Projects' }
  ];

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      alt: 'Asphalt core testing in laboratory',
      title: 'Core Testing Laboratory',
      category: 'lab',
      description: 'Professional core testing equipment in our accredited laboratory'
    },
    {
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      alt: 'Field density testing equipment',
      title: 'Field Density Testing',
      category: 'field',
      description: 'On-site density testing using advanced field equipment'
    },
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      alt: 'Asphalt compaction equipment',
      title: 'Compaction Equipment',
      category: 'equipment',
      description: 'State-of-the-art compaction testing equipment'
    },
    {
      src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      alt: 'Highway construction project',
      title: 'Highway Construction',
      category: 'projects',
      description: 'Quality testing on major highway construction project'
    },
    {
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      alt: 'Material analysis in lab',
      title: 'Material Analysis',
      category: 'lab',
      description: 'Detailed material composition analysis'
    },
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      alt: 'Field sampling operation',
      title: 'Field Sampling',
      category: 'field',
      description: 'Professional sampling procedures in the field'
    },
    {
      src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      alt: 'Testing equipment calibration',
      title: 'Equipment Calibration',
      category: 'equipment',
      description: 'Regular calibration of testing equipment'
    },
    {
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      alt: 'Residential development project',
      title: 'Residential Development',
      category: 'projects',
      description: 'Quality testing for residential development project'
    },
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      alt: 'Laboratory testing setup',
      title: 'Lab Testing Setup',
      category: 'lab',
      description: 'Professional laboratory testing environment'
    },
    {
      src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      alt: 'Quality control inspection',
      title: 'Quality Control',
      category: 'field',
      description: 'On-site quality control inspection procedures'
    },
    {
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      alt: 'Advanced testing instruments',
      title: 'Testing Instruments',
      category: 'equipment',
      description: 'Advanced testing instruments and equipment'
    },
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      alt: 'Commercial construction project',
      title: 'Commercial Project',
      category: 'projects',
      description: 'Testing services for commercial construction project'
    },
    {
      src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      alt: 'Sample preparation in lab',
      title: 'Sample Preparation',
      category: 'lab',
      description: 'Careful sample preparation for accurate testing'
    },
    {
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      alt: 'Field testing documentation',
      title: 'Field Documentation',
      category: 'field',
      description: 'Comprehensive field testing documentation'
    },
    {
      src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      alt: 'Precision measurement tools',
      title: 'Measurement Tools',
      category: 'equipment',
      description: 'Precision measurement tools and instruments'
    },
    {
      src: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      alt: 'Infrastructure project testing',
      title: 'Infrastructure Project',
      category: 'projects',
      description: 'Large-scale infrastructure project testing'
    }
  ];

  const filteredImages = activeFilter === 'all' 
    ? images 
    : images.filter(image => image.category === activeFilter);

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
              Project Gallery
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-shadow">
              Explore our work through our comprehensive gallery showcasing laboratory testing, 
              field operations, equipment, and completed projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <AnimatedSection className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Work in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse through our extensive portfolio of testing projects, laboratory work, 
              and field operations across Australia.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 border border-gray-200'
                }`}
              >
                <FaFilter className="inline mr-2" />
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Image Gallery */}
          <ImageGallery 
            images={filteredImages} 
            className="mb-12"
          />

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSearch className="text-white text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">500+</h3>
              <p className="text-gray-600">Tests Completed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">15+</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Years</h3>
              <p className="text-gray-600">Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">100%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Compliance</h3>
              <p className="text-gray-600">Australian Standards</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-lg"
            >
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">24/7</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Support</h3>
              <p className="text-gray-600">Customer Service</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="section-padding bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to discuss your testing requirements and see how we can 
            help ensure the success of your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-outline">
              Get Free Quote
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

export default Gallery;



