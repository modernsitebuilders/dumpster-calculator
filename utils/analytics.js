// utils/analytics.js - Create this new file
'use client'

// Enhanced analytics tracking for calculator usage
export const trackEvent = (action, category, label = '', value = 0) => {
  console.log('trackEvent called:', action, category, label, value); // ADD THIS
  if (typeof window !== 'undefined' && window.gtag) {
    console.log('gtag available, sending event'); // ADD THIS
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
    console.log('gtag event sent successfully'); // ADD THIS
  } else {
    console.log('gtag not available, window:', typeof window, 'gtag:', typeof window?.gtag); // ADD THIS
  }
};

// Calculator specific tracking functions
export const trackCalculatorUsage = {
  // Track when calculator is started/viewed
  calculatorViewed: () => {
    trackEvent('calculator_viewed', 'Calculator', 'Calculator Page Load');
  },

  // Track project type selection
  projectTypeSelected: (projectType) => {
    trackEvent('project_type_selected', 'Calculator', projectType);
  },

  // Track square footage input
  squareFootageEntered: (sqft) => {
    trackEvent('square_footage_entered', 'Calculator', 'Square Footage', parseInt(sqft));
  },

  // Track room count selections
  roomCountSelected: (roomType, count) => {
    trackEvent('room_count_selected', 'Calculator', `${roomType}_${count}`);
  },

  // Track material type selections
  materialSelected: (material) => {
    trackEvent('material_selected', 'Calculator', material);
  },

  // Track calculation completion
  calculationCompleted: (result) => {
    trackEvent('calculation_completed', 'Calculator', `Recommended_${result.recommendedSize}`, result.totalVolume);
  },

  // Track when users request quotes
  quoteRequested: (dumpsterSize, zipCode) => {
    trackEvent('quote_requested', 'Conversion', `${dumpsterSize}_${zipCode}`);
  },

  // Track ZIP code entries
  zipCodeEntered: (zipCode) => {
    // Don't track actual zip codes for privacy, just track that it was entered
    trackEvent('zip_code_entered', 'Calculator', 'ZIP_Code_Provided');
  },

  // Track engagement with calculator sections
  sectionEngaged: (sectionName) => {
    trackEvent('section_engaged', 'Calculator', sectionName);
  },

  // Track calculator resets/restarts
  calculatorReset: () => {
    trackEvent('calculator_reset', 'Calculator', 'Calculator Reset');
  },

  // Track most popular combinations
  projectCombination: (projectType, size, sqft) => {
    const combination = `${projectType}_${sqft}sqft_${size}yard`;
    trackEvent('project_combination', 'Popular_Combos', combination);
  },

  // Track user journey through calculator steps
  stepCompleted: (stepNumber, stepName) => {
    trackEvent('step_completed', 'Calculator_Flow', `Step_${stepNumber}_${stepName}`);
  },

  // Track time spent on calculator
  timeSpentTracking: (timeInSeconds) => {
    const timeRange = timeInSeconds < 30 ? 'under_30s' : 
                     timeInSeconds < 60 ? '30-60s' : 
                     timeInSeconds < 180 ? '1-3min' : 
                     timeInSeconds < 300 ? '3-5min' : 'over_5min';
    trackEvent('time_spent', 'Calculator', timeRange, timeInSeconds);
  },

  // Track exit points
  exitPoint: (currentStep) => {
    trackEvent('exit_point', 'Calculator', currentStep);
  },

  // Track errors or issues
  calculatorError: (errorType) => {
    trackEvent('calculator_error', 'Calculator', errorType);
  }
};

// Blog engagement tracking
export const trackBlogEngagement = {
  postViewed: (postTitle) => {
    trackEvent('blog_post_viewed', 'Blog', postTitle);
  },
  
  categoryFiltered: (category) => {
    trackEvent('blog_category_filtered', 'Blog', category);
  },
  
  relatedPostClicked: (fromPost, toPost) => {
    trackEvent('related_post_clicked', 'Blog', `${fromPost}_to_${toPost}`);
  }
};

// City page engagement
export const trackCityPageEngagement = {
  cityPageViewed: (cityName) => {
    trackEvent('city_page_viewed', 'Location', cityName);
  },
  
  localProviderClicked: (cityName, providerName) => {
    trackEvent('local_provider_clicked', 'Location', `${cityName}_${providerName}`);
  }
};