// REPLACE your app/components/GoogleAnalytics.js with this:

'use client'
import Script from 'next/script'

const GoogleAnalytics = () => {
  const GA_MEASUREMENT_ID = 'G-0Z38BZWHKS'
  
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
          
          // Define the trackEvent function that your logs are calling
          window.trackEvent = function(eventName, category, label, value) {
            console.log('🔍 trackEvent called:', eventName, category, label, value);
            
            if (typeof gtag === 'undefined') {
              console.error('❌ gtag not available');
              return false;
            }
            
            console.log('✅ gtag available, sending event');
            
            try {
              // THIS IS THE ACTUAL GTAG CALL THAT WAS MISSING!
              gtag('event', eventName, {
                event_category: category || 'general',
                event_label: label || '',
                value: value !== undefined && value !== null && !isNaN(value) ? Number(value) : undefined
              });
              
              console.log('✅ gtag event sent successfully');
              return true;
            } catch (error) {
              console.error('❌ Error sending gtag event:', error);
              return false;
            }
          };
          
          // Define trackCalculatorUsage object for your calculator
          window.trackCalculatorUsage = {
            calculatorViewed: function() {
              window.trackEvent('calculator_viewed', 'Calculator', 'Calculator Page Load', 0);
            },
            
            projectTypeSelected: function(projectType) {
              window.trackEvent('project_type_selected', 'Calculator', projectType, 0);
              window.trackEvent('step_completed', 'Calculator_Flow', 'Step_1_project_type_selected', 0);
            },
            
            squareFootageEntered: function(footage) {
              window.trackEvent('square_footage_entered', 'Calculator', 'Square Footage', footage);
              window.trackEvent('step_completed', 'Calculator_Flow', 'Step_2_square_footage_entered', 0);
            },
            
            roomCountSelected: function(roomCount) {
              window.trackEvent('room_count_selected', 'Calculator', 'Room Count', roomCount);
            },
            
            materialSelected: function(material) {
              window.trackEvent('material_selected', 'Calculator', material, 0);
            },
            
            calculationCompleted: function(data) {
              window.trackEvent('calculation_completed', 'Calculator', 'Recommended_' + data.recommendedSize, data.totalVolume);
              window.trackEvent('project_combination', 'Popular_Combos', data.projectType + '_' + data.squareFootage + 'sqft_' + data.recommendedSize, 0);
              window.trackEvent('step_completed', 'Calculator_Flow', 'Step_3_calculation_completed', 0);
            },
            
            sectionEngaged: function(section) {
              window.trackEvent('section_engaged', 'Calculator', section, 0);
            }
          };
          
          // Initialize tracking when page loads
          setTimeout(() => {
            if (window.trackCalculatorUsage) {
              window.trackCalculatorUsage.calculatorViewed();
            }
          }, 1000);
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics

/*
ADD THIS TO YOUR CALCULATOR COMPONENT (wherever your calculator logic is):

// Example usage in your calculator component:
useEffect(() => {
  // Track when calculator loads
  if (window.trackCalculatorUsage) {
    window.trackCalculatorUsage.calculatorViewed();
  }
}, []);

const handleProjectTypeChange = (projectType) => {
  setProjectType(projectType);
  
  // Track project type selection
  if (window.trackCalculatorUsage) {
    window.trackCalculatorUsage.projectTypeSelected(projectType);
  }
};

const handleSquareFootageChange = (footage) => {
  setSquareFootage(footage);
  
  // Track square footage entry
  if (window.trackCalculatorUsage) {
    window.trackCalculatorUsage.squareFootageEntered(footage);
  }
};

const handleCalculate = () => {
  const result = calculateDumpsterSize(); // your calculation logic
  
  // Track calculation completion
  if (window.trackCalculatorUsage) {
    window.trackCalculatorUsage.calculationCompleted({
      recommendedSize: result.size,
      totalVolume: result.volume,
      projectType: projectType,
      squareFootage: squareFootage
    });
  }
};

// For section engagement tracking
const handleSectionFocus = (sectionName) => {
  if (window.trackCalculatorUsage) {
    window.trackCalculatorUsage.sectionEngaged(sectionName);
  }
};
*/