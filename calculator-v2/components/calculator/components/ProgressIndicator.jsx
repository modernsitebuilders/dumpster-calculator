import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ProgressIndicator = ({ currentStep }) => {
  const steps = [
    { num: 1, label: 'Project Type' },
    { num: 2, label: 'Size & Materials' },
    { num: 3, label: 'Results' }
  ];

  return (
    <>
      <div className="flex items-center justify-center mb-8">
        {steps.map((step, index) => (
          <React.Fragment key={step.num}>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
              currentStep >= step.num ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'
            } font-bold transition-all duration-300`}>
              {currentStep > step.num ? <CheckCircle2 className="w-6 h-6" /> : step.num}
            </div>
            {index < steps.length - 1 && (
              <div className={`w-20 h-1 ${
                currentStep > step.num ? 'bg-green-500' : 'bg-gray-200'
              } transition-all duration-300`} />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="flex justify-between mb-6 px-4">
        {steps.map((step) => (
          <span 
            key={step.num}
            className={`text-sm ${
              currentStep >= step.num ? 'text-green-600 font-semibold' : 'text-gray-400'
            }`}
          >
            {step.label}
          </span>
        ))}
      </div>
    </>
  );
};

export default ProgressIndicator;