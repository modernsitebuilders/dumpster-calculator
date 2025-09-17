import React from 'react';
import { MATERIALS_BY_WEIGHT } from '../constants/materials';

const MaterialSelector = ({ selectedMaterials, onToggleMaterial }) => {
  return (
    <div className="mb-6">
      <h3 className="font-medium text-gray-700 mb-3">Select Materials:</h3>
      
      {/* Light Materials */}
      <div className="mb-4">
        <div className="text-sm text-gray-600 mb-2">💨 Light Materials</div>
        <div className="grid grid-cols-2 gap-2">
          {MATERIALS_BY_WEIGHT.light.map((material) => (
            <button
              key={material.id}
              onClick={() => onToggleMaterial(material.id)}
              className={`p-2 rounded-lg border-2 text-sm transition-all ${
                selectedMaterials.includes(material.id)
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="mr-1">{material.icon}</span>
              {material.label}
            </button>
          ))}
        </div>
      </div>

      {/* Medium Materials */}
      <div className="mb-4">
        <div className="text-sm text-gray-600 mb-2">📦 Medium Weight</div>
        <div className="grid grid-cols-2 gap-2">
          {MATERIALS_BY_WEIGHT.medium.map((material) => (
            <button
              key={material.id}
              onClick={() => onToggleMaterial(material.id)}
              className={`p-2 rounded-lg border-2 text-sm transition-all ${
                selectedMaterials.includes(material.id)
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="mr-1">{material.icon}</span>
              {material.label}
            </button>
          ))}
        </div>
      </div>

      {/* Heavy Materials */}
      <div className="mb-4">
        <div className="text-sm text-gray-600 mb-2">⚠️ Heavy Materials (Weight Limited)</div>
        <div className="grid grid-cols-2 gap-2">
          {MATERIALS_BY_WEIGHT.heavy.map((material) => (
            <button
              key={material.id}
              onClick={() => onToggleMaterial(material.id)}
              className={`p-2 rounded-lg border-2 text-sm transition-all ${
                selectedMaterials.includes(material.id)
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200 hover:border-gray-300'
              } ${material.warning ? 'ring-2 ring-yellow-200' : ''}`}
            >
              <span className="mr-1">{material.icon}</span>
              {material.label}
              {material.popular && (
                <span className="ml-1 text-xs bg-yellow-100 text-yellow-800 px-1 rounded">Popular</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {selectedMaterials.length > 0 && (
        <div className="mt-2 text-sm text-gray-600">
          Selected: {selectedMaterials.length} material{selectedMaterials.length > 1 ? 's' : ''}
        </div>
      )}
    </div>
  );
};

export default MaterialSelector;