'use client';

import React, { useState, useEffect } from 'react';

interface RoadmapStep {
  step: number;
  title: string;
  desc: string;
  image: string;
}

interface RoadmapCarouselProps {
  steps: RoadmapStep[];
}

const RoadmapCarousel: React.FC<RoadmapCarouselProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  // No auto-rotation - user controls navigation

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
      
      {/* Sidebar Navigation - Hidden on mobile, shown on desktop */}
      <div className="hidden lg:block w-80 bg-gray-800 border-r border-gray-700">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-white mb-1">Getting Started</h3>
          <p className="text-sm text-gray-400 mb-6">Follow the steps below to get started</p>
          
          <nav className="space-y-1">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => handleStepClick(index)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-500 ease-in-out group relative ${
                  index === currentStep
                    ? 'bg-violet-500/10 text-violet-400'
                    : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                <div className="flex items-center">
                  {/* Active border indicator */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-violet-500 rounded-r transition-all duration-500 ease-in-out ${
                    index === currentStep ? 'opacity-100' : 'opacity-0'
                  }`} />
                  
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0 transition-all duration-500 ease-in-out ${
                    index === currentStep
                      ? 'bg-violet-500 text-white'
                      : 'bg-gray-600 text-gray-300 group-hover:bg-gray-500'
                  }`}>
                    {step.step}
                  </div>
                  <span className="font-medium text-sm transition-colors duration-500 ease-in-out">{step.title}</span>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-[400px] lg:min-h-[600px]">
        
        {/* Content Header */}
        <div className="p-4 sm:p-6 border-b border-gray-700">
          <div className="flex items-center mb-3">
            <div className="bg-violet-500 text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold mr-3">
              {steps[currentStep].step}
            </div>
            <h2 className="text-lg sm:text-2xl font-bold text-white">{steps[currentStep].title}</h2>
          </div>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {steps[currentStep].desc}
          </p>
        </div>

        {/* Image/Visual Content */}
        <div className="flex-1 p-4 sm:p-6">
          <div className="w-full h-full bg-gray-800 rounded-lg overflow-hidden border border-gray-700 relative">
            <img
              src={steps[currentStep].image}
              alt={steps[currentStep].title}
              className="w-full h-full object-contain transition-all duration-700 ease-in-out"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = document.createElement('div');
                fallback.className = 'w-full h-full bg-gray-700 flex items-center justify-center';
                fallback.innerHTML = `
                  <div class="text-center text-gray-400">
                    <svg class="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <p class="text-base sm:text-lg font-medium">Preview Coming Soon</p>
                    <p class="text-xs sm:text-sm text-gray-500 mt-2">Step ${steps[currentStep].step}: ${steps[currentStep].title}</p>
                  </div>
                `;
                target.parentElement?.appendChild(fallback);
              }}
            />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="p-4 sm:p-6 border-t border-gray-700">
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleStepClick((currentStep - 1 + steps.length) % steps.length)}
              className="flex items-center px-3 sm:px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              disabled={currentStep === 0}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
              <span className="hidden sm:inline">Previous</span>
            </button>

            {/* Progress Dots */}
            <div className="flex space-x-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleStepClick(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? 'bg-violet-500 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => handleStepClick((currentStep + 1) % steps.length)}
              className="flex items-center px-3 sm:px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              disabled={currentStep === steps.length - 1}
            >
              <span className="hidden sm:inline">Next</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Step Selector - Only visible on mobile */}
      <div className="lg:hidden bg-gray-800 border-t border-gray-700 p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-white">Step {currentStep + 1} of {steps.length}</h3>
          <span className="text-xs text-gray-400">{steps[currentStep].title}</span>
        </div>
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => handleStepClick(index)}
              className={`flex-shrink-0 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                index === currentStep
                  ? 'bg-violet-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {step.step}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapCarousel;