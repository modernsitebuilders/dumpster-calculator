// calculator-v2/__tests__/engine/calculations.test.js

import { DumpsterCalculator } from '../../core/engine/calculator';

describe('DumpsterCalculator', () => {
  let calculator;
  
  beforeEach(() => {
    calculator = new DumpsterCalculator();
  });
  
  describe('Volume Calculations', () => {
    test('calculates kitchen renovation correctly', () => {
      const input = {
        projectType: 'kitchen',
        sqft: 150
      };
      
      const result = calculator.calculate(input);
      
      // 150 sq ft ÷ 20 = 7.5 cubic yards
      // With 25% buffer = 9.375 cubic yards
      expect(result.recommendation.volume).toBeCloseTo(9.375, 1);
      expect(result.recommendation.size).toBe(10);
    });

    test('calculates bathroom renovation correctly', () => {
      const input = {
        projectType: 'bathroom',
        sqft: 40
      };

      const result = calculator.calculate(input);

      // 40 sq ft ÷ 12 = 3.333 cubic yards
      // With 25% buffer = 4.1667 cubic yards
      expect(result.recommendation.volume).toBeCloseTo(4.1667, 1);
      expect(result.recommendation.size).toBe(10);
    });

    test('calculates roofing project correctly', () => {
      const input = {
        projectType: 'roofing',
        sqft: 2000  // Changed to realistic roof size
      };

      const result = calculator.calculate(input);

      // 2000 sq ft ÷ 110 = 18.18 cubic yards
      // With 25% buffer = 22.73 cubic yards
      expect(result.recommendation.volume).toBeCloseTo(22.73, 1);
      expect(result.recommendation.size).toBe(30);  // Should recommend 30-yard for this volume
    });
  });

  describe('Weight Constraints', () => {
    test('handles heavy concrete correctly', () => {
      const input = {
        projectType: 'demolition',
        sqft: 100,
        materials: ['concrete']
      };

      const result = calculator.calculate(input);
      
      expect(result.recommendation.isWeightConstrained).toBe(true);
      expect(result.recommendation.warnings).toContainEqual(
        expect.objectContaining({
          type: 'material',
          message: expect.stringContaining('Concrete')
        })
      );
    });
  });

  describe('Input Validation', () => {
    test('handles missing project type', () => {
      const input = {
        sqft: 100
      };

      const result = calculator.calculate(input);
      
      expect(result.error).toBeDefined();
      expect(result.error).toContain('Project type is required');
    });

    test('handles missing size information', () => {
      const input = {
        projectType: 'kitchen'
      };

      const result = calculator.calculate(input);
      
      expect(result.error).toBeDefined();
      expect(result.error).toContain('Size information is required');
    });
  });

  describe('Alternative Recommendations', () => {
    test('provides budget and extra capacity options', () => {
      const input = {
        projectType: 'kitchen',
        sqft: 200  // Will recommend 20-yard
      };

      const result = calculator.calculate(input);
      
      // 200 ÷ 20 = 10, with buffer = 12.5 cubic yards
      expect(result.recommendation.size).toBe(20);
      expect(result.recommendation.alternatives).toHaveLength(2);
      expect(result.recommendation.alternatives[0].size).toBe(10); // Budget option
      expect(result.recommendation.alternatives[1].size).toBe(30); // Extra capacity
    });
  });
});