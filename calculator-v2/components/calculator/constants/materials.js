export const MATERIALS = [
  // Light materials
  { id: 'drywall', label: 'Drywall', icon: '🪵', weight: 'light', multiplier: 1, color: 'gray' },
  { id: 'carpet', label: 'Carpet & Padding', icon: '🏠', weight: 'light', multiplier: 0.5, color: 'blue' },
  { id: 'insulation', label: 'Insulation', icon: '📦', weight: 'light', multiplier: 0.3, color: 'pink' },
  { id: 'cardboard', label: 'Cardboard/Boxes', icon: '📦', weight: 'light', multiplier: 0.2, color: 'yellow' },
  
  // Medium materials
  { id: 'wood', label: 'Wood/Lumber', icon: '🪵', weight: 'medium', multiplier: 1.2, color: 'amber' },
  { id: 'furniture', label: 'Furniture', icon: '🪑', weight: 'medium', multiplier: 1, color: 'purple' },
  { id: 'cabinets', label: 'Cabinets', icon: '🗄️', weight: 'medium', multiplier: 1.3, color: 'indigo' },
  { id: 'flooring', label: 'Hardwood Flooring', icon: '🪵', weight: 'medium', multiplier: 1.5, color: 'orange' },
  
  // Heavy materials
  { id: 'shingles', label: 'Roofing Shingles', icon: '🏠', weight: 'heavy', multiplier: 2.5, color: 'red', popular: true },
  { id: 'tile', label: 'Tile/Ceramic', icon: '🧱', weight: 'heavy', multiplier: 3, color: 'cyan' },
  { id: 'concrete', label: 'Concrete/Brick', icon: '🧱', weight: 'heavy', multiplier: 4, color: 'slate', warning: true },
  { id: 'dirt', label: 'Dirt/Soil', icon: '🌍', weight: 'heavy', multiplier: 3.5, color: 'amber', warning: true },
  { id: 'rock', label: 'Rock/Gravel', icon: '⛰️', weight: 'heavy', multiplier: 3.8, color: 'gray', warning: true }
];

export const MATERIALS_BY_WEIGHT = {
  light: MATERIALS.filter(m => m.weight === 'light'),
  medium: MATERIALS.filter(m => m.weight === 'medium'),
  heavy: MATERIALS.filter(m => m.weight === 'heavy')
};