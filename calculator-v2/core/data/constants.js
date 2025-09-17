// calculator-v2/core/data/constants.js

export const PROJECT_TYPES = {
  kitchen: {
    id: 'kitchen',
    name: 'Kitchen Renovation',
    cubicYardsPerSqFt: 1/20,  // 1 cubic yard per 20 sq ft
    avgWeightPerCubicYard: 350,
    commonMaterials: ['cabinets', 'appliances', 'drywall', 'flooring'],
    visualOptions: [
      { label: 'Small Galley Kitchen (70 sq ft)', sqft: 70 },
      { label: 'Standard Kitchen (150 sq ft)', sqft: 150 },
      { label: 'Large Kitchen with Island (300 sq ft)', sqft: 300 }
    ]
  },
  bathroom: {
    id: 'bathroom', 
    name: 'Bathroom Renovation',
    cubicYardsPerSqFt: 1/12,  // 1 cubic yard per 12 sq ft
    avgWeightPerCubicYard: 500,
    commonMaterials: ['tile', 'tub', 'vanity', 'drywall'],
    visualOptions: [
      { label: 'Powder Room (20 sq ft)', sqft: 20 },
      { label: 'Standard Full Bath (40 sq ft)', sqft: 40 },
      { label: 'Master Bath (80+ sq ft)', sqft: 80 }
    ]
  },
  roofing: {
    id: 'roofing',
    name: 'Roof Replacement', 
    cubicYardsPerSqFt: 1/110,  // Based on your project data: 1 cubic yard per 110 sq ft
    avgWeightPerCubicYard: 400,
    commonMaterials: ['shingles', 'underlayment', 'flashing'],
    visualOptions: [
      { label: 'Small Ranch (1,000 sq ft)', sqft: 1000 },
      { label: 'Standard Home (2,000 sq ft)', sqft: 2000 },
      { label: 'Large Home (3,000+ sq ft)', sqft: 3000 }
    ]
  },
  flooring: {
    id: 'flooring',
    name: 'Flooring Removal',
    cubicYardsPerSqFt: 1/80,  // Average based on your data
    avgWeightPerCubicYard: 300,
    commonMaterials: ['carpet', 'hardwood', 'tile', 'laminate'],
    visualOptions: [
      { label: 'Single Room (200 sq ft)', sqft: 200 },
      { label: 'Multiple Rooms (600 sq ft)', sqft: 600 },
      { label: 'Whole House (1,500 sq ft)', sqft: 1500 }
    ]
  },
  cleanout: {
    id: 'cleanout',
    name: 'General Cleanout',
    cubicYardsPerSqFt: 1/100,  // 1 cubic yard per 100 sq ft
    avgWeightPerCubicYard: 200,
    commonMaterials: ['furniture', 'boxes', 'misc'],
    visualOptions: [
      { label: 'Garage Cleanout (400 sq ft)', sqft: 400 },
      { label: 'Basement Cleanout (800 sq ft)', sqft: 800 },
      { label: 'Whole House Cleanout (2,000 sq ft)', sqft: 2000 }
    ]
  },
  demolition: {
    id: 'demolition',
    name: 'Demolition',
    cubicYardsPerSqFt: 1/15,  // More debris from demolition
    avgWeightPerCubicYard: 500,
    commonMaterials: ['concrete', 'wood', 'drywall', 'mixed'],
    visualOptions: [
      { label: 'Small Structure (200 sq ft)', sqft: 200 },
      { label: 'Medium Structure (500 sq ft)', sqft: 500 },
      { label: 'Large Structure (1,000 sq ft)', sqft: 1000 }
    ]
  }
};

export const MATERIALS = {
  concrete: {
    name: 'Concrete/Asphalt',
    lbsPerCubicYard: 4050,
    weightMultiplier: 3,
    requiresWeightWarning: true
  },
  drywall: {
    name: 'Drywall',
    lbsPerCubicYard: 500,
    weightMultiplier: 1,
    requiresWeightWarning: false
  },
  shingles: {
    name: 'Asphalt Shingles', 
    lbsPerCubicYard: 800,
    weightMultiplier: 1.5,
    requiresWeightWarning: true
  },
  tile: {
    name: 'Ceramic/Porcelain Tile',
    lbsPerCubicYard: 1800,
    weightMultiplier: 2,
    requiresWeightWarning: true
  },
  carpet: {
    name: 'Carpet & Padding',
    lbsPerCubicYard: 150,
    weightMultiplier: 0.5,
    requiresWeightWarning: false
  },
  hardwood: {
    name: 'Hardwood Flooring',
    lbsPerCubicYard: 400,
    weightMultiplier: 1,
    requiresWeightWarning: false
  },
  dirt: {
    name: 'Dirt/Soil',
    lbsPerCubicYard: 2200,
    weightMultiplier: 2.5,
    requiresWeightWarning: true
  }
};

export const DUMPSTER_SIZES = [
  { size: 10, maxWeight: 20000, idealForVolume: '0-10 cubic yards' },
  { size: 20, maxWeight: 20000, idealForVolume: '10-20 cubic yards' },
  { size: 30, maxWeight: 20000, idealForVolume: '20-30 cubic yards' },
  { size: 40, maxWeight: 20000, idealForVolume: '30+ cubic yards' }
];

export const CALCULATION_CONFIG = {
  SAFETY_BUFFER: 0.25,          // 25% buffer
  FEDERAL_WEIGHT_LIMIT: 20000,  // 10 tons in pounds
  DEFAULT_FILL_RATE: 0.75       // Assume 75% efficiency
};