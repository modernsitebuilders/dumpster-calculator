import React from 'react';

const AlternativeOptions = ({ alternatives }) => {
  if (!alternatives || alternatives.length === 0) {
    return null;
  }

  return (
    <div className="mb-6">
      <h3 className="font-semibold text-gray-700 mb-3">Alternative Options:</h3>
      <div className="space-y-3">
        {alternatives.map((alt, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-lg font-bold text-gray-800">
                  {alt.multiple ? `Multiple ${alt.size} Yard` : `${alt.size} Yard`}
                </span>
                <span className="ml-2 text-sm font-medium text-gray-600">
                  - {alt.label}
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-500 mt-1">{alt.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlternativeOptions;