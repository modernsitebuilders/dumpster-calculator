// app/calculator-materials/page.js
'use client';

export default function CalculatorMaterialsPage() {
  console.log("Page is rendering"); // Add this to check if page loads
  
  try {
    const DumpsterCalculatorWithMaterials = require('../../calculator-v2/components/calculator/CalculatorV2').default;
    console.log("Component imported successfully");
    
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <h1 className="text-center text-2xl mb-4">Calculator Page</h1>
        <DumpsterCalculatorWithMaterials />
      </div>
    );
  } catch (error) {
    console.error("Import error:", error);
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="text-center">
          <h1 className="text-2xl text-red-600 mb-4">Error Loading Calculator</h1>
          <pre className="text-left inline-block bg-red-100 p-4 rounded">
            {error.toString()}
          </pre>
        </div>
      </div>
    );
  }
}