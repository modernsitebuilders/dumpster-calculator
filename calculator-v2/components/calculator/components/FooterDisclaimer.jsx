import React from 'react';

const FooterDisclaimer = () => {
  return (
    <div className="mt-8 bg-gray-50 border border-gray-300 rounded-lg p-4">
      <h4 className="font-semibold text-gray-700 mb-2">Important Disclaimer</h4>
      <p className="text-xs text-gray-600">
        This calculator provides estimates for typical residential renovation and landscaping projects only. 
        Results are based on average material densities and standard residential project scopes. 
        For commercial projects, construction sites, or unusually large residential projects, 
        consult directly with waste management professionals for accurate sizing and permitting requirements. 
        Actual dumpster capacity may vary based on local regulations, material types, and project specifics.
      </p>
    </div>
  );
};

export default FooterDisclaimer;