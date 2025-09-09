import React, { useEffect, useRef } from 'react';
import { Code, Database, Brain, BarChart } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                const fill = bar.querySelector('.progress-fill') as HTMLElement;
                const percentage = bar.getAttribute('data-percentage');
                if (fill && percentage) {
                  fill.style.width = percentage + '%';
                }
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Updated skillset
  const skills: Skill[] = [
    // Programming & Querying
    { name: 'Python', level: 95, category: 'programming' },
    { name: 'C++', level: 80, category: 'programming' },
    { name: 'SQL', level: 90, category: 'programming' },
    { name: 'MySQL', level: 85, category: 'programming' },

    // Data Manipulation & Analysis
    { name: 'NumPy', level: 90, category: 'data' },
    { name: 'Pandas', level: 92, category: 'data' },
    { name: 'Matplotlib', level: 88, category: 'data' },
    { name: 'Seaborn', level: 85, category: 'data' },
    { name: 'Scikit-learn', level: 90, category: 'data' },
    { name: 'SciPy', level: 80, category: 'data' },

    // Data Visualization Tools
    { name: 'Power BI', level: 85, category: 'analytics' },
    { name: 'MS Excel (Advanced)', level: 95, category: 'analytics' },

    // Web Technologies
    { name: 'HTML', level: 80, category: 'web' },
    { name: 'CSS', level: 78, category: 'web' },
    { name: 'JavaScript (Basic)', level: 70, category: 'web' },
    { name: 'React.js (Basic)', level: 68, category: 'web' },

    // Analytical Abilities
    { name: 'Data Cleaning', level: 90, category: 'analysis' },
    { name: 'EDA', level: 88, category: 'analysis' },
    { name: 'Insight Generation', level: 85, category: 'analysis' },
    { name: 'Descriptive Statistics', level: 82, category: 'analysis' },

    // Core Subjects
    { name: 'OOP', level: 87, category: 'core' },
    { name: 'DBMS', level: 89, category: 'core' },
  ];

  const categories = [
    { key: 'programming', label: 'Programming & Querying', icon: Code, color: 'blue' },
    { key: 'data', label: 'Data Manipulation & Analysis', icon: Database, color: 'green' },
    { key: 'analytics', label: 'Data Visualization Tools', icon: BarChart, color: 'orange' },
    { key: 'web', label: 'Web Technologies', icon: Code, color: 'purple' },
    { key: 'analysis', label: 'Analytical Abilities', icon: Brain, color: 'teal' },
    { key: 'core', label: 'Core Subjects', icon: Database, color: 'red' },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-500', light: 'bg-blue-100', text: 'text-blue-600' },
      green: { bg: 'bg-green-500', light: 'bg-green-100', text: 'text-green-600' },
      purple: { bg: 'bg-purple-500', light: 'bg-purple-100', text: 'text-purple-600' },
      orange: { bg: 'bg-orange-500', light: 'bg-orange-100', text: 'text-orange-600' },
      teal: { bg: 'bg-teal-500', light: 'bg-teal-100', text: 'text-teal-600' },
      red: { bg: 'bg-red-500', light: 'bg-red-100', text: 'text-red-600' }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across programming, data science, analytics, web technologies, and core CS concepts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category.key);
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;

            return (
              <div key={category.key} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg ${colors.light}`}>
                    <IconComponent className={colors.text} size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{category.label}</h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm font-semibold text-gray-500">{skill.level}%</span>
                      </div>
                      <div 
                        className="progress-bar w-full bg-gray-200 rounded-full h-3 overflow-hidden"
                        data-percentage={skill.level}
                      >
                        <div 
                          className={`progress-fill h-full ${colors.bg} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Quick Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600">Technologies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600">Certifications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
