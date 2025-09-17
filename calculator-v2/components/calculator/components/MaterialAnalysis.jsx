import React from 'react';

const MaterialAnalysis = ({ materials, avgWeight }) => {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-gray-700 mb-3">Material Analysis:</h3>
      <div className="bg-gray-50 rounded-lg p-4">
        <div className="space-y-2">
          {materials.map((material) => (
            <div key={material.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="mr-2">{material.icon}</span>
                <span className="text-sm">{material.label}</span>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                material.weight === 'heavy' ? 'bg-red-100 text-red-700' :
                material.weight === 'medium' ? 'bg-blue-100 text-blue-700' :
                'bg-green-100 text-green-700'
              }`}>
                {material.weight}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-gray-200">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Average Weight Factor:</span>
            <span className={`font-semibold ${
              avgWeight > 2.5 ? 'text-red-600' :
              avgWeight > 1.5 ? 'text-yellow-600' :
              'text-green-600'
            }`}>
              {avgWeight.toFixed(1)}x
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialAnalysis;