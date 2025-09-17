// app/calculator-dev/page.js
import CalculatorV2 from '@/calculator-v2/components/calculator/CalculatorV2';

export default function CalculatorDevPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8">
          <p className="font-bold">⚠️ Development Environment</p>
          <p>This is the V2 calculator in development. Not for production use.</p>
        </div>
        
        <CalculatorV2 />
      </div>
    </div>
  );
}