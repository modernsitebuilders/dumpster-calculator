import React from 'react';
import { ChevronLeft, Sparkles } from 'lucide-react';
import ResultsSummary from './ResultsSummary';
import WarningsSection from './WarningsSection';
import MaterialAnalysis from './MaterialAnalysis';
import AlternativeOptions from './AlternativeOptions';
import ProTips from './ProTips';
import { PROJECT_TYPES } from '../constants/projectTypes';
import { getProjectSizes } from '../constants/projectSizes';

const ResultsDisplay = ({ result, formData, onBack, onReset }) => {
  return (
    <div id="results-section" className="bg-white rounded-xl p-6 shadow-lg">
      
      {/* Main Recommendation */}
      <ResultsSummary result={result} />

      {/* Project Summary */}
      <div className="mb-6 bg-blue-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-700 mb-2">Your Project:</h3>
        <div className="space-y-1 text-sm text-gray-600">
          <div className="flex items-center">
            <span className="font-medium mr-2">Type:</span>
            <span>{PROJECT_TYPES.find(p => p.id === formData.projectType)?.label}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium mr-2">Size:</span>
            <span className="text-gray-800 font-medium">
              {getProjectSizes(formData.projectType).find(s => s.id === formData.projectSize)?.label}
            </span>
            <span className="ml-2 text-gray-500">
              ({getProjectSizes(formData.projectType).find(s => s.id === formData.projectSize)?.desc})
            </span>
          </div>
          <div className="flex items-start">
            <span className="font-medium mr-2">Materials:</span>
            <span>{result.materials.length} selected</span>
          </div>
        </div>
      </div>

      {/* Warnings */}
      <WarningsSection warnings={result.warnings} needsMultiple={result.needsMultiple} />

      {/* Material Analysis */}
      <MaterialAnalysis materials={result.materials} avgWeight={result.avgWeight} />

      {/* Alternative Options */}
      <AlternativeOptions alternatives={result.alternatives} />

      {/* Pro Tips */}
      <ProTips 
        isSmallProject={result.isSmallProject}
        hasHeavyWarning={result.warnings.heavy}
      />

      {/* Action Buttons */}
      <div className="flex gap-3">
        <button
          onClick={onBack}
          className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 flex items-center justify-center"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Adjust Details
        </button>
        <button
          onClick={onReset}
          className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center justify-center"
        >
          <Sparkles className="w-4 h-4 mr-1" />
          New Calculation
        </button>
      </div>
    </div>
  );
};

export default ResultsDisplay;