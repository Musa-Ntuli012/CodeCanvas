import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Star, GitFork, ExternalLink, Eye, Calendar, Code2, X } from 'lucide-react';
import { personalInfo } from '../config/personalInfo';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRepo, setSelectedRepo] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Language colors mapping
  const languageColors = {
    JavaScript: '#f7df1e',
    TypeScript: '#3178c6',
    Python: '#3776ab',
    Java: '#ed8b00',
    'C#': '#239120',
    'C++': '#00599c',
    Go: '#00add8',
    Rust: '#000000',
    PHP: '#777bb4',
    Ruby: '#cc342d',
    Swift: '#fa7343',
    Kotlin: '#7f52ff',
    HTML: '#e34f26',
    CSS: '#1572b6',
    Vue: '#4fc08d',
    React: '#61dafb',
    Angular: '#dd0031',
    'Node.js': '#339933',
  };

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        
        // Try to fetch public repositories first
        const response = await fetch(
          `https://api.github.com/users/${personalInfo.github.username}/repos?sort=updated&per_page=12`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        
        const data = await response.json();
        
        // If no public repos or very few, use custom data for private repos
        if (data.length === 0 || data.length < 3) {
          setRepositories(getCustomRepositories());
        } else {
          setRepositories(data);
        }
      } catch (err) {
        setError('Using custom project data (repositories may be private)');
        setRepositories(getCustomRepositories());
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  // Custom repository data for private repos
  const getCustomRepositories = () => {
    return [
      {
        id: 1,
        name: 'ServeSA',
        description: 'A comprehensive service management platform for South African businesses, featuring appointment booking, service tracking, and customer management.',
        language: 'JavaScript',
        stargazers_count: 0,
        forks_count: 0,
        html_url: 'https://github.com/XENTRIX-Portfolio/ServeSA',
        topics: ['javascript', 'react', 'nodejs', 'mongodb', 'service-management'],
        created_at: '2024-01-15T10:00:00Z',
        updated_at: '2024-01-20T15:30:00Z',
      },
      {
        id: 2,
        name: 'PulseCare',
        description: 'A healthcare management system designed to streamline patient care, appointment scheduling, and medical record management.',
        language: 'TypeScript',
        stargazers_count: 0,
        forks_count: 0,
        html_url: 'https://github.com/XENTRIX-Portfolio/PulseCare',
        topics: ['typescript', 'react', 'healthcare', 'patient-management', 'medical-records'],
        created_at: '2023-12-01T09:00:00Z',
        updated_at: '2024-01-18T12:00:00Z',
      },
      {
        id: 3,
        name: 'Stock-Management-Site',
        description: 'An inventory management solution for businesses to track stock levels, manage suppliers, and optimize inventory operations.',
        language: 'JavaScript',
        stargazers_count: 0,
        forks_count: 0,
        html_url: 'https://github.com/XENTRIX-Portfolio/Stock-Management-Site',
        topics: ['javascript', 'inventory', 'stock-management', 'business-solution', 'supply-chain'],
        created_at: '2023-11-20T14:00:00Z',
        updated_at: '2024-01-10T16:45:00Z',
      },
    ];
  };

  const handleRepoClick = (repo) => {
    setSelectedRepo(repo);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedRepo(null);
  };

  const handleViewOnGitHub = (url) => {
    window.open(url, '_blank');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getLanguageColor = (language) => {
    return languageColors[language] || '#6c757d';
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

  if (loading) {
    return (
      <section
        id="projects"
        className="section-padding bg-white dark:bg-gray-800"
      >
        <div className="container-custom">
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="section-padding bg-white dark:bg-gray-800"
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
              GitHub <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A collection of my open-source projects and contributions. 
              Click on any project to learn more about it.
            </p>
          </motion.div>

          {error && (
            <motion.div variants={itemVariants} className="mb-8">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <p className="text-yellow-800 dark:text-yellow-200">
                  {error}. Showing demo data instead.
                </p>
              </div>
            </motion.div>
          )}

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {repositories.map((repo, index) => (
              <motion.div
                key={repo.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="card p-6 h-full flex flex-col cursor-pointer"
                     onClick={() => handleRepoClick(repo)}>
                  
                  {/* Featured Badge */}
                  {personalInfo.github.featuredRepos.includes(repo.name) && (
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </div>
                  )}

                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2 flex-1">
                      <Github className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {repo.name}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1 line-clamp-3">
                    {repo.description || 'No description available'}
                  </p>

                  {/* Language and Stats */}
                  <div className="flex items-center justify-between mb-4">
                    {repo.language && (
                      <div className="flex items-center space-x-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: getLanguageColor(repo.language) }}
                        ></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {repo.language}
                        </span>
                      </div>
                    )}

                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="w-4 h-4" />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>
                  </div>

                  {/* Topics */}
                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                      {repo.topics.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                          +{repo.topics.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex space-x-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRepoClick(repo);
                      }}
                      className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Details</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewOnGitHub(repo.html_url);
                      }}
                      className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>GitHub</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Details Modal */}
      {dialogOpen && selectedRepo && (
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
                <Github className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {selectedRepo.name}
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
              <p className="text-gray-600 dark:text-gray-300">
                {selectedRepo.description || 'No description available'}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Language
                  </h4>
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: getLanguageColor(selectedRepo.language) }}
                    ></div>
                    <span className="text-gray-900 dark:text-white">
                      {selectedRepo.language || 'Not specified'}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Stars
                  </h4>
                  <span className="text-gray-900 dark:text-white">
                    {selectedRepo.stargazers_count}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Forks
                  </h4>
                  <span className="text-gray-900 dark:text-white">
                    {selectedRepo.forks_count}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                    Last Updated
                  </h4>
                  <span className="text-gray-900 dark:text-white">
                    {formatDate(selectedRepo.updated_at)}
                  </span>
                </div>
              </div>

              {selectedRepo.topics && selectedRepo.topics.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                    Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRepo.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}
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
                onClick={() => handleViewOnGitHub(selectedRepo.html_url)}
                className="btn-primary flex items-center space-x-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>View on GitHub</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
