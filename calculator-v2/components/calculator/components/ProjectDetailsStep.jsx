import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getProjectSizes } from '../constants/projectSizes';
import MaterialSelector from './MaterialSelector';

const ProjectDetailsStep = ({ formData, setFormData, onBack, onCalculate }) => {
  const toggleMaterial = (materialId) => {
    setFormData(prev => ({
      ...prev,
      materials: prev.materials.includes(materialId)
        ? prev.materials.filter(m => m !== materialId)
        : [...prev.materials, materialId]
    }));
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Project Details</h2>
      
      {/* Size Selection */}
      <div className="mb-6">
        <h3 className="font-medium text-gray-700 mb-3">Project Size:</h3>
        <div className="space-y-2">
          {getProjectSizes(formData.projectType).map((size) => (
            <button
              key={size.id}
              onClick={() => setFormData({ ...formData, projectSize: size.id })}
              className={`w-full p-3 rounded-lg border-2 text-left transition-all ${
                formData.projectSize === size.id
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="font-medium">{size.label}</div>
              <div className="text-sm text-gray-600">{size.desc}</div>
              {/* Helper text for landscaping projects */}
              {formData.projectType === 'landscaping' && (
                <div className="text-xs text-gray-500 mt-1 italic">
                  {size.id === 'small' && 'Examples: Small patio removal, garage cleanout'}
                  {size.id === 'medium' && 'Examples: Deck removal, basement cleanout'}
                  {size.id === 'large' && 'Examples: Whole house renovation, large landscaping'}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Materials Selection */}
      <MaterialSelector 
        selectedMaterials={formData.materials}
        onToggleMaterial={toggleMaterial}
      />

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 text-gray-600 hover:text-gray-800 flex items-center"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back
        </button>
        <button
          onClick={onCalculate}
          disabled={!formData.projectSize || formData.materials.length === 0}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center"
        >
          Calculate Size
          <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default ProjectDetailsStep;