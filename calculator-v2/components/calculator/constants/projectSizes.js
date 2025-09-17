export const PROJECT_SIZES = {
  bathroom: [
    { id: 'small', label: 'Powder Room / Half Bath', desc: '< 40 sq ft', multiplier: 0.5 },
    { id: 'medium', label: 'Standard Full Bathroom', desc: '40-100 sq ft', multiplier: 1 },
    { id: 'large', label: 'Master Bathroom', desc: '> 100 sq ft', multiplier: 1.5 }
  ],
  kitchen: [
    { id: 'small', label: 'Galley Kitchen', desc: '< 150 sq ft', multiplier: 1 },
    { id: 'medium', label: 'Standard Kitchen', desc: '150-250 sq ft', multiplier: 1.5 },
    { id: 'large', label: 'Large/Open Kitchen', desc: '> 250 sq ft', multiplier: 2 }
  ],
  roofing: [
    { id: 'small', label: 'Small House/Ranch', desc: '1,000-1,500 sq ft', multiplier: 1 },
    { id: 'medium', label: 'Average House', desc: '1,500-2,500 sq ft', multiplier: 2 },
    { id: 'large', label: 'Large House', desc: '> 2,500 sq ft', multiplier: 3 }
  ],
  cleanout: [
    { id: 'small', label: '1-2 Rooms', desc: 'Garage or basement', multiplier: 1 },
    { id: 'medium', label: 'Half House', desc: '3-5 rooms', multiplier: 2 },
    { id: 'large', label: 'Whole House', desc: '6+ rooms', multiplier: 3 }
  ],
  landscaping: [
    { id: 'small', label: 'Small Residential Project', desc: 'up to 1,500 sq ft', multiplier: 1 },
    { id: 'medium', label: 'Medium Residential Project', desc: '1,500-4,000 sq ft', multiplier: 2 },
    { id: 'large', label: 'Large Residential Project', desc: '4,000-8,000 sq ft', multiplier: 2.5 }
  ],
  construction: [
    { id: 'small', label: 'Small Structure', desc: 'Shed, small addition', multiplier: 1 },
    { id: 'medium', label: 'Medium Project', desc: 'Room addition, deck', multiplier: 2 },
    { id: 'large', label: 'Major Construction', desc: 'Multiple rooms', multiplier: 3 }
  ]
};

export const getProjectSizes = (type) => PROJECT_SIZES[type] || [];