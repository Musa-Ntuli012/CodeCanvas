import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Cloud, Wrench, GraduationCap, Briefcase, Quote } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const skillIcons = {
    Frontend: <Code className="w-6 h-6" />,
    Backend: <Wrench className="w-6 h-6" />,
    Cloud: <Cloud className="w-6 h-6" />,
    Tools: <Wrench className="w-6 h-6" />,
  };

  const timelineIcons = {
    work: <Briefcase className="w-5 h-5" />,
    education: <GraduationCap className="w-5 h-5" />,
  };

  return (
    <section
      id="about"
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
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get to know more about my journey, skills, and passion for creating amazing digital experiences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Professional Summary */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Professional Summary
                </h3>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {personalInfo.summary}
                  </p>
                </div>
              </div>

              {/* Quote Section */}
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-xl border-l-4 border-primary-500"
              >
                <Quote className="w-8 h-8 text-primary-500 mb-4" />
                <blockquote className="text-lg italic text-gray-700 dark:text-gray-300 mb-2">
                  "{personalInfo.quote.text}"
                </blockquote>
                <cite className="text-sm text-gray-500 dark:text-gray-400">
                  — {personalInfo.quote.author}
                </cite>
              </motion.div>
            </motion.div>

            {/* Right Column - Skills */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Core Skills
              </h3>
              
              <div className="grid gap-6">
                {Object.entries(personalInfo.skills).map(([category, skills]) => (
                  <motion.div
                    key={category}
                    whileHover={{ scale: 1.02 }}
                    className="card p-6"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 mr-3">
                        {skillIcons[category]}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {category}
                      </h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Career Timeline
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500 hidden lg:block"></div>
              
              <div className="space-y-8">
                {personalInfo.timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Content */}
                    <div className={`w-full lg:w-5/12 ${
                      index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                    }`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="card p-6 relative"
                      >
                        {/* Timeline Dot */}
                        <div className="absolute top-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 hidden lg:block"
                             style={{
                               left: index % 2 === 0 ? '-2rem' : 'auto',
                               right: index % 2 === 1 ? '-2rem' : 'auto'
                             }}>
                        </div>
                        
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
                            {timelineIcons.work}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {item.title}
                              </h4>
                              <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
                                {item.year}
                              </span>
                            </div>
                            
                            <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                              {item.company}
                            </p>
                            
                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block w-2/12"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
