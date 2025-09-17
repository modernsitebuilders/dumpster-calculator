import React from 'react';
import { Trash2 } from 'lucide-react';

const CalculatorHeader = () => {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <Trash2 className="w-10 h-10 text-green-600 mr-2" />
        <h1 className="text-3xl font-bold text-gray-800">Smart Dumpster Calculator</h1>
      </div>
      <p className="text-gray-600 mb-4">Get the perfect size with material-specific calculations</p>
      
      {/* Residential Disclaimer */}
      <div className="bg-blue-50 border border-blue-300 rounded-lg p-3 mx-auto max-w-2xl">
        <div className="flex items-center justify-center">
          <span className="text-xl mr-2">🏠</span>
          <div className="text-left">
            <strong className="text-blue-900">For Residential Projects Only</strong>
            <p className="text-sm text-blue-700 mt-1">
              This calculator is designed for typical home renovation and landscaping projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorHeader;