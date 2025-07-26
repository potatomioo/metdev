import React from 'react';
import { features } from "@/data/content";

interface Feature {
    name: string;
    desc: string;
    image: string;
  }
  
  const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => {
    return (
      <div className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-gray-600 transition-all duration-300 cursor-pointer">
        
        {/* Image Container with Zoom Effect */}
        <div className="relative h-48 overflow-hidden bg-gray-800">
          <img
            src={feature.image}
            alt={feature.name}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            onError={(e) => {
              // Fallback for broken images
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = document.createElement('div');
              fallback.className = 'w-full h-full bg-gray-800 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110';
              fallback.innerHTML = `
                <div class="text-center text-gray-500">
                  <svg class="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p class="text-sm">${feature.name}</p>
                </div>
              `;
              target.parentElement?.appendChild(fallback);
            }}
          />
          
          {/* Subtle overlay that appears on hover */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
  
        {/* Content Section */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">
            {feature.name}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {feature.desc}
          </p>
        </div>
      </div>
    );
  };
  
  // Usage Example Component
  const FeaturesSection = () => {
    return (
      <div className="min-h-screen bg-gray-950 p-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default FeaturesSection;