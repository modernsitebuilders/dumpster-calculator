'use client';
import React, { useState } from 'react';
import CalculatorHeader from './components/CalculatorHeader';
import ProgressIndicator from './components/ProgressIndicator';
import ProjectTypeStep from './components/ProjectTypeStep';
import ProjectDetailsStep from './components/ProjectDetailsStep';
import ResultsDisplay from './components/ResultsDisplay';
import FooterDisclaimer from './components/FooterDisclaimer';
import { calculateDumpsterSize } from './utils/calculations';

const DumpsterCalculatorWithMaterials = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    projectSize: '',
    materials: [],
    heavyMaterials: false
  });
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const calculationResult = calculateDumpsterSize(formData);
    setResult(calculationResult);
    setCurrentStep(3);
    
    // Scroll to results
    setTimeout(() => {
      const resultsElement = document.getElementById('results-section');
      if (resultsElement) {
        resultsElement.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 100);
  };

  const reset = () => {
    setFormData({
      projectType: '',
      projectSize: '',
      materials: [],
      heavyMaterials: false
    });
    setResult(null);
    setCurrentStep(1);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl shadow-xl">
      <CalculatorHeader />
      <ProgressIndicator currentStep={currentStep} />
      
      {currentStep === 1 && (
        <ProjectTypeStep 
          formData={formData}
          setFormData={setFormData}
          onNext={() => setCurrentStep(2)}
        />
      )}
      
      {currentStep === 2 && (
        <ProjectDetailsStep
          formData={formData}
          setFormData={setFormData}
          onBack={() => setCurrentStep(1)}
          onCalculate={handleCalculate}
        />
      )}
      
      {currentStep === 3 && result && (
        <ResultsDisplay
          result={result}
          formData={formData}
          onBack={() => setCurrentStep(2)}
          onReset={reset}
        />
      )}
      
      <FooterDisclaimer />
    </div>
  );
};

export default DumpsterCalculatorWithMaterials;