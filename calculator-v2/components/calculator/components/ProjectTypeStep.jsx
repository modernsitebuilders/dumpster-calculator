import React from 'react';
import { PROJECT_TYPES } from '../constants/projectTypes';

const ProjectTypeStep = ({ formData, setFormData, onNext }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">What type of project?</h2>
      <div className="grid grid-cols-2 gap-4">
        {PROJECT_TYPES.map((type) => (
          <button
            key={type.id}
            onClick={() => {
              setFormData({ ...formData, projectType: type.id });
              onNext();
            }}
            className={`p-4 rounded-lg border-2 transition-all hover:scale-105 hover:shadow-md ${
              formData.projectType === type.id
                ? `border-${type.color}-500 bg-${type.color}-50`
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <type.icon className="w-8 h-8 mb-2" />
            <div className="font-medium">{type.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectTypeStep;