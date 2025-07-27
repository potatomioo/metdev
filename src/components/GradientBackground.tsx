import React from 'react';

const GradientBackground = () => {
  return (
    <div className="min-h-screen p-8 space-y-8">
      <h1 className="text-3xl font-bold text-white mb-8">Background Gradient Options</h1>
      
      <div className="relative">
        <h2 className="text-xl text-white mb-4">Option 1: Mintlify-style with Blue-500</h2>
        <div 
          className="h-96 rounded-lg flex items-center justify-center text-white text-lg font-semibold"
          style={{
            background: `
              radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(16, 185, 129, 0.2) 0%, transparent 50%),
              linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)
            `
          }}
        >
          Content goes here
        </div>
      </div>
    </div>
  );
};

export default GradientBackground;