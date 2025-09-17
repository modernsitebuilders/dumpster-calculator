import React from 'react';

const WarningsSection = ({ warnings, needsMultiple }) => {
  if (!warnings.heavy && !warnings.weightLimit && !warnings.multipleLoads) {
    return null;
  }

  return (
    <div className="mb-6 space-y-3">
      {warnings.weightLimit && !needsMultiple && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h3 className="font-semibold text-red-800 mb-2">⚠️ Weight Warning</h3>
          <p className="text-sm text-red-700">
            You selected extremely heavy materials (concrete/dirt/rock). 
            The dumpster may appear less full due to weight limits.
            Consider separating heavy materials or renting multiple smaller dumpsters.
          </p>
        </div>
      )}
      
      {warnings.multipleLoads && !needsMultiple && (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <h3 className="font-semibold text-orange-800 mb-2">📦 Multiple Loads Recommended</h3>
          <p className="text-sm text-orange-700">
            Due to the weight of your materials, you may need multiple dumpsters or loads.
          </p>
        </div>
      )}
    </div>
  );
};

export default WarningsSection;