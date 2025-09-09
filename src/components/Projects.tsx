import React, { useState } from 'react';
import { Github, X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: 'Movie Recommendation System',
    description: 'Content-based movie recommendation system deployed with Streamlit.',
    longDescription:
      'Built a movie recommendation system using Python, Numpy, Pandas, and NLTK. Implemented content-based filtering techniques to generate personalized recommendations. Cleaned and prepared datasets, trained models, and deployed the solution with Streamlit for a user-friendly experience.',
    image:
      'https://images.pexels.com/photos/7991379/pexels-photo-7991379.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Python', 'Numpy', 'Pandas', 'NLTK', 'Streamlit'],
    features: [
      'Data gathering and preprocessing from multiple sources',
      'Content-based filtering approach for recommendations',
      'Evaluation and tuning of recommendation quality',
      'Streamlit deployment with intuitive UI',
    ],
    githubUrl: 'https://github.com/iamrohandey/Movie_Recommender_System',
  },
  {
    title: 'OLA Data Analytics',
    description: 'Analytics and dashboard creation for OLA ride and business insights.',
    longDescription:
      'Analyzed OLA ride data to uncover insights and business metrics. Leveraged SQL for data extraction and Power BI for dashboard visualizations. Used Python libraries for exploratory analysis, visualization, and insights reporting.',
    image:
      'https://media.geeksforgeeks.org/wp-content/uploads/20250112162244587738/overall.png',
    technologies: ['Python', 'SQL', 'Power BI', 'Pandas', 'Matplotlib', 'Seaborn'],
    features: [
      'SQL queries for answering key business questions',
      'Interactive Power BI dashboards with KPIs',
      'Data cleaning and visualization with Python libraries',
      'Actionable insights for operational decision-making',
    ],
    githubUrl: 'https://github.com/iamrohandey/OLA-Data-Anaalysis',
  },
  {
    title: 'Vendor Performance Analysis - Retail Inventory & Sales',
    description:
      'Analyzed vendor efficiency and profitability to optimize inventory decisions.',
    longDescription:
      'Performed vendor performance analysis on retail sales and inventory datasets using SQL, Python, and Power BI. Designed an optimized ETL pipeline to aggregate data efficiently. Conducted hypothesis testing and EDA in Python, uncovering high vendor dependence and low-performing stock. Built dashboards to support decision-making.',
    image:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['SQL', 'Python', 'Power BI'],
    features: [
      'Optimized SQL ETL pipeline for large datasets',
      'Exploratory Data Analysis & Hypothesis Testing in Python',
      'Identified $2.71M in unsold inventory from low-performing vendors',
      'Interactive Power BI dashboards for KPIs and vendor profitability',
      'Recommended diversification to reduce vendor dependency',
    ],
    githubUrl: 'https://github.com/iamrohandey/Vendor-Performance-Analysis',
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
          <p className="mt-4 text-lg text-gray-600">
            A showcase of my recent data science and analytics projects.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image with hover zoom + gradient */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600/90 text-white px-3 py-2 rounded-md text-sm font-medium">
                      View Details
                    </span>
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* "All Projects" link section */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/iamrohandey"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition-all"
          >
            View All Projects →
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in shadow-xl">
            {/* Header with image */}
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-all hover:scale-110"
              >
                <X size={20} />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <p className="text-gray-200">{selectedProject.description}</p>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Overview</h3>
              <p className="text-gray-600 leading-relaxed">{selectedProject.longDescription}</p>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Key Features</h3>
              <ul className="space-y-2">
                {selectedProject.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full text-sm font-medium border border-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all"
                >
                  <Github size={18} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Projects;
