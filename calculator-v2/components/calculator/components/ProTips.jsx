import React from 'react';

const ProTips = ({ isSmallProject, hasHeavyWarning }) => {
  return (
    <div className="bg-blue-50 rounded-lg p-4 mb-6">
      <h3 className="font-semibold text-blue-800 mb-2">💡 Pro Tips:</h3>
      <ul className="space-y-1 text-sm text-blue-700">
        {isSmallProject ? (
          <>
            <li>• A 10-yard dumpster holds about 3 pickup truck loads</li>
            <li>• Perfect size for small bathroom or single room projects</li>
            <li>• Keep prohibited items out (paint, batteries, tires)</li>
          </>
        ) : (
          <>
            <li>• Load heavy materials first and evenly distribute weight</li>
            <li>• Break down large items to maximize space</li>
            <li>• Keep dumpster level with street for easier loading</li>
          </>
        )}
        {hasHeavyWarning && (
          <li>• Consider a separate load for concrete/dirt to avoid overage fees</li>
        )}
      </ul>
    </div>
  );
};

export default ProTips;