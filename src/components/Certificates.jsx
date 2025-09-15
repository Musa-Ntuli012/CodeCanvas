import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  GraduationCap, 
  Download, 
  Eye, 
  ExternalLink, 
  X,
  Cloud,
  Code,
  Briefcase,
  Wrench
} from 'lucide-react';
import { personalInfo } from '../config/personalInfo';

const Certificates = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const categories = [
    { label: 'All', value: 'all', icon: <GraduationCap className="w-4 h-4" /> },
    { label: 'Cloud', value: 'Cloud', icon: <Cloud className="w-4 h-4" /> },
    { label: 'Programming', value: 'Programming', icon: <Code className="w-4 h-4" /> },
    { label: 'Management', value: 'Management', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'DevOps', value: 'DevOps', icon: <Wrench className="w-4 h-4" /> },
  ];

  const filteredCertificates = activeTab === 0 
    ? personalInfo.certificates 
    : personalInfo.certificates.filter(cert => cert.category === categories[activeTab].value);

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedCertificate(null);
  };

  const handleDownload = (certificate) => {
    // Open the certificate verification URL (Google Drive link)
    window.open(certificate.verificationUrl, '_blank');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      Cloud: 'from-orange-500 to-red-500',
      Programming: 'from-green-500 to-emerald-500',
      Management: 'from-purple-500 to-pink-500',
      DevOps: 'from-blue-500 to-cyan-500',
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="certificates"
      className="section-padding bg-gray-50 dark:bg-gray-900"
    >
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Certificates & <span className="gradient-text">Qualifications</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional certifications and qualifications that validate my expertise 
              in various technologies and methodologies.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="flex flex-wrap justify-center gap-2 bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg">
              {categories.map((category, index) => (
                <button
                  key={category.value}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    activeTab === index
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.icon}
                  <span className="font-medium">{category.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Certificates Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCertificates.map((certificate, index) => (
              <motion.div
                key={certificate.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="card p-6 h-full flex flex-col cursor-pointer"
                     onClick={() => handleCertificateClick(certificate)}>
                  
                  {/* Certificate Image/Icon */}
                  <div className={`h-48 bg-gradient-to-br ${getCategoryColor(certificate.category)} rounded-lg flex items-center justify-center mb-4 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="relative z-10 text-center text-white">
                      <GraduationCap className="w-16 h-16 mx-auto mb-2" />
                      <h3 className="text-lg font-semibold">{certificate.issuer}</h3>
                    </div>
                    
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rounded-full"></div>
                      <div className="absolute top-4 right-4 w-6 h-6 border-2 border-white rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-4 h-4 border-2 border-white rounded-full"></div>
                      <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-white rounded-full"></div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(certificate.category)} text-white`}>
                      {certificate.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                    {certificate.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1 line-clamp-2">
                    {certificate.description}
                  </p>

                  {/* Date */}
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                    Issued: {formatDate(certificate.date)}
                  </p>

                  {/* Actions */}
                  <div className="flex space-x-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCertificateClick(certificate);
                      }}
                      className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(certificate);
                      }}
                      className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Certificate Details Modal */}
      {dialogOpen && selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCloseDialog}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {selectedCertificate.title}
                </h3>
              </div>
              <button
                onClick={handleCloseDialog}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Category Badge */}
              <div>
                <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full bg-gradient-to-r ${getCategoryColor(selectedCertificate.category)} text-white`}>
                  {selectedCertificate.category}
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300">
                {selectedCertificate.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Issuer
                  </h4>
                  <span className="text-gray-900 dark:text-white">
                    {selectedCertificate.issuer}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Issue Date
                  </h4>
                  <span className="text-gray-900 dark:text-white">
                    {formatDate(selectedCertificate.date)}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Credential ID
                  </h4>
                  <span className="text-gray-900 dark:text-white font-mono text-sm">
                    {selectedCertificate.credentialId}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Verification
                  </h4>
                  <button
                    onClick={() => window.open(selectedCertificate.verificationUrl, '_blank')}
                    className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Verify Online</span>
                  </button>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Skills & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCertificate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handleCloseDialog}
                className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => handleDownload(selectedCertificate)}
                className="btn-primary flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Certificate</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Certificates;
