import React, { useEffect, useRef } from "react";
import { GraduationCap, Calendar, Award } from "lucide-react";

interface EducationItem {
  year: string;
  institution: string;
  degree: string;
  description: string;
  grade?: string;
}

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timelineItems = entry.target.querySelectorAll(".timeline-item");
            timelineItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-in");
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const educationData: EducationItem[] = [
    {
      year: "2021-2025",
      institution: "Techno International Newtown",
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      description:
        "Specialized in deep learning, natural language processing, and computer vision. Gained comprehensive knowledge in AI algorithms, machine learning frameworks, and data science methodologies.",
      grade: "CGPA: 7.60/10",
    },
    {
      year: "2019-2021",
      institution: "Barasat PCS Govt High School",
      degree: "Higher Secondary Education (12th)",
      description:
        "Science stream with Mathematics, Physics, Chemistry, and Computer Science. Built strong foundation in analytical thinking and problem-solving skills.",
      grade: "Percentage: 84.8%",
    },
    {
      year: "2019",
      institution: "Barasat PCS Govt High School",
      degree: "Secondary Education (10th)",
      description:
        "Strong foundation in mathematics and science subjects. Developed excellent academic discipline and study habits that carried forward throughout my educational journey.",
      grade: "Percentage: 82.4%",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My educational journey in building a strong foundation in data
            science and artificial intelligence
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-0 left-6 lg:left-1/2 transform lg:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-300 via-blue-500 to-blue-700"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`timeline-item opacity-0 translate-y-10 scale-95 transition-all duration-700 relative flex items-start lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Icon */}
                <div className="absolute left-6 lg:left-1/2 transform lg:-translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-white">
                  <GraduationCap className="text-white" size={22} />
                </div>

                {/* Content Card */}
                <div
                  className={`w-full lg:w-5/12 mt-16 lg:mt-0 ${
                    index % 2 === 0 ? "lg:pr-10" : "lg:pl-10"
                  }`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600 hover:scale-[1.02]">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="text-blue-600" size={18} />
                      <span className="text-blue-600 font-semibold">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {item.degree}
                    </h3>
                    <p className="text-lg font-medium text-gray-700 mb-3">
                      {item.institution}
                    </p>

                    {item.grade && (
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="text-orange-600" size={16} />
                        <span className="text-orange-600 font-medium">
                          {item.grade}
                        </span>
                      </div>
                    )}

                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for opposite side (desktop only) */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        .timeline-item.animate-in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      `}</style>
    </section>
  );
};

export default Education;
