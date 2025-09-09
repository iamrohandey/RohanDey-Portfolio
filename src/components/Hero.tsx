import React from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Rohan_Dey_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 40% 40%, rgba(120, 199, 255, 0.3) 0%, transparent 50%)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up-slow">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4">
              <span className="block text-white">
                Rohan Dey
              </span>
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
              <span className="text-gray-300">
                Data Analyst | AI & ML Enthusiast
              </span>
            </div>
          </div>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up-delay">
            Passionate about transforming data into actionable insights and building intelligent solutions 
            that drive business growth. Specializing in machine learning, data visualization, and predictive analytics 
            to solve complex real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up-delay-2">
            <button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2 animate-pulse-glow"
            >
              <Download size={20} />
              Download CV
            </button>
            <button
              onClick={scrollToAbout}
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-slow"
      >
        <ChevronDown size={32} />
      </button>

      <style jsx>{`
        @keyframes fade-in-up-slow {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes professional-gradient {
          0%, 100% {
            background-size: 400% 400%;
            background-position: 0% 50%;
          }
          25% {
            background-size: 400% 400%;
            background-position: 100% 50%;
          }
          50% {
            background-size: 400% 400%;
            background-position: 100% 100%;
          }
          75% {
            background-size: 400% 400%;
            background-position: 0% 100%;
          }
        }
        
        @keyframes subtitle-glow {
          0%, 100% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            text-shadow: 0 0 40px rgba(255, 255, 255, 0.8);
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.7);
          }
        }
        
        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        .animate-fade-in-up-slow {
          animation: fade-in-up-slow 1.2s ease-out;
        }
        
        .animate-fade-in-up-delay {
          animation: fade-in-up-slow 1.2s ease-out 0.3s both;
        }
        
        .animate-fade-in-up-delay-2 {
          animation: fade-in-up-slow 1.2s ease-out 0.6s both;
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-subtitle-glow {
          animation: subtitle-glow 4s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;