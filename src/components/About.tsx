import React from "react";
import { User, MapPin, Mail, Phone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-blue-100">
                <img
                  src="/profile.jpeg" // 👈 directly reference from public folder
                  alt="Rohan Dey Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
                <User size={24} />
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Hello! I'm Rohan Dey
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                👋 Hi, I’m{" "}
                <span className="font-semibold text-gray-900">Rohan Dey</span>,
                a
                <span className="text-blue-600 font-medium">
                  {" "}
                  B.Tech graduate in Artificial Intelligence & Machine Learning
                  (AIML)
                </span>
                . I’m deeply passionate about{" "}
                <span className="text-blue-700 font-medium">Data Science</span>,
                <span className="text-purple-700 font-medium">
                  {" "}
                  Data Analytics
                </span>
                , and
                <span className="text-green-700 font-medium">
                  {" "}
                  Software Development
                </span>
                . My curiosity drives me to transform raw data into powerful
                insights and build intelligent solutions that bridge data with
                decision-making.
              </p>

              <p className="text-gray-600 leading-relaxed mt-4 text-lg">
                As a{" "}
                <span className="font-semibold text-gray-900">
                  Data Analyst
                </span>
                , I bring hands-on expertise in
                <span className="text-blue-700 font-medium"> SQL</span>,{" "}
                <span className="text-blue-700 font-medium">Python</span>,
                <span className="text-blue-700 font-medium">Excel</span>, and
                <span className="text-blue-700 font-medium">Power BI</span>. I
                also have working knowledge of{" "}
                <span className="text-indigo-700 font-medium">
                  Machine Learning
                </span>
                ,<span className="text-gray-800 font-medium">C</span>, and{" "}
                <span className="text-gray-800 font-medium">C++</span>. I excel
                at{" "}
                <span className="underline decoration-blue-400">
                  cleaning, analyzing, and visualizing data
                </span>{" "}
                to uncover patterns, optimize processes, and drive informed
                decision-making.
              </p>

              <p className="text-gray-600 leading-relaxed">
                I specialize in Python, SQL, and various machine learning
                frameworks including TensorFlow and scikit-learn. My experience
                spans across predictive modeling, data mining, and building
                end-to-end ML Projects that deliver real business value.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not analyzing data or training models, you'll find me
                exploring the latest developments in AI research, contributing
                to open-source projects, or mentoring aspiring data scientists
                in my community.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                <MapPin className="text-blue-600" size={20} />
                <div>
                  <p className="font-medium text-gray-800">Location</p>
                  <p className="text-gray-600">Kolkata, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-teal-50 rounded-lg">
                <Mail className="text-teal-600" size={20} />
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600">deyrohan02@email.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
