import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

const ResultsSummary = ({ result }) => {
  return (
    <div className="mb-6">
      {result.needsMultiple ? (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-800 mb-2">
              Multiple Dumpsters Required
            </h2>
            <p className="text-lg font-semibold text-red-800 mb-2">
              Due to weight limits, you'll need:
            </p>
            <div className="flex justify-center gap-4">
              <div className="bg-white rounded-lg p-3 border-2 border-red-300">
                <span className="text-2xl font-bold text-gray-800">
                  {result.multipleRecommendation.primary} Yard
                </span>
              </div>
              <span className="self-center text-2xl">+</span>
              <div className="bg-white rounded-lg p-3 border-2 border-red-300">
                <span className="text-2xl font-bold text-gray-800">
                  {result.multipleRecommendation.secondary} Yard
                </span>
              </div>
            </div>
            {/* Enhanced Weight Warning */}
            <div className="mt-4 bg-white border border-red-200 rounded-lg p-3">
              <div className="flex items-start">
                <span className="text-xl mr-2">⚠️</span>
                <div className="text-left">
                  <strong className="text-red-800">Heavy Materials Selected</strong>
                  <p className="text-sm text-red-700 mt-1">
                    You selected extremely heavy materials (concrete/dirt/rock). This residential calculator 
                    recommends multiple loads due to DOT weight regulations. For projects involving large 
                    quantities of heavy materials, consider consulting a waste management professional for 
                    the most accurate sizing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 text-center">
          <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-2" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {result.recommendedSize} Yard Dumpster
          </h2>
          <p className="text-gray-600">Recommended for your project</p>
          
          {result.weightAdjusted && (
            <div className="mt-3 text-sm text-yellow-700 bg-yellow-50 rounded p-2">
              <AlertCircle className="inline w-4 h-4 mr-1" />
              Size adjusted for heavy materials
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResultsSummary;