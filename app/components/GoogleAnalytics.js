// UPDATED GoogleAnalytics.js with GA4-compliant event names

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
          
          // GA4-compliant tracking function
          window.trackEvent = function(eventName, category, label, value) {
            console.log('🔍 trackEvent called:', eventName, category, label, value);
            
            if (typeof gtag === 'undefined') {
              console.error('❌ gtag not available');
              return false;
            }
            
            // Clean event name (GA4 rules: max 40 chars, alphanumeric + underscore)
            const cleanEventName = eventName
              .toLowerCase()
              .replace(/[^a-z0-9_]/g, '_')
              .substring(0, 40);
            
            // Clean parameters (GA4 rules: max 25 chars, alphanumeric + underscore)  
            const eventParams = {};
            
            if (category) {
              eventParams.event_category = category.substring(0, 100);
            }
            
            if (label) {
              eventParams.event_label = label.substring(0, 100);
            }
            
            if (value !== undefined && value !== null && !isNaN(value)) {
              eventParams.value = Number(value);
            }
            
            console.log('📤 Sending GA4 event:', cleanEventName, eventParams);
            
            try {
              gtag('event', cleanEventName, eventParams);
              console.log('✅ GA4 event sent successfully');
              return true;
            } catch (error) {
              console.error('❌ Error sending GA4 event:', error);
              return false;
            }
          };
          
          // Updated trackCalculatorUsage with GA4-compliant events
          window.trackCalculatorUsage = {
            calculatorViewed: function() {
              window.trackEvent('calculator_view', 'engagement', 'page_load');
            },
            
            projectTypeSelected: function(projectType) {
              window.trackEvent('project_select', 'calculator', projectType);
              window.trackEvent('calculator_step', 'progression', 'step_1_complete');
            },
            
            squareFootageEntered: function(footage) {
              window.trackEvent('footage_enter', 'calculator', 'square_footage', footage);
              window.trackEvent('calculator_step', 'progression', 'step_2_complete');
            },
            
            roomCountSelected: function(roomCount) {
              window.trackEvent('room_select', 'calculator', 'room_count', roomCount);
            },
            
            materialSelected: function(material) {
              window.trackEvent('material_select', 'calculator', material);
            },
            
            calculationCompleted: function(data) {
              // Main completion event
              window.trackEvent('calculation_complete', 'conversion', data.recommendedSize, data.totalVolume);
              
              // Project combination tracking (cleaned up)
              const combo = data.projectType + '_' + data.squareFootage + 'sqft_' + data.recommendedSize.replace('-yard', 'yd');
              window.trackEvent('project_combo', 'analytics', combo);
              
              // Final step completion
              window.trackEvent('calculator_step', 'progression', 'step_3_complete');
              
              // Custom conversion event for GA4
              gtag('event', 'generate_lead', {
                currency: 'USD',
                value: data.totalVolume,
                project_type: data.projectType,
                dumpster_size: data.recommendedSize,
                square_footage: data.squareFootage
              });
            },
            
            sectionEngaged: function(section) {
              window.trackEvent('section_engage', 'interaction', section);
            }
          };
          
          // Debug function to check event flow
          window.debugGA4 = function() {
            console.log('🔍 GA4 Debug Check:');
            console.log('- Property ID: ${GA_MEASUREMENT_ID}');
            console.log('- gtag loaded:', typeof gtag !== 'undefined');
            console.log('- dataLayer entries:', window.dataLayer ? window.dataLayer.length : 0);
            console.log('- Recent dataLayer:', window.dataLayer ? window.dataLayer.slice(-5) : []);
            
            // Send test event
            gtag('event', 'debug_test', {
              event_category: 'debug',
              event_label: 'manual_test',
              value: 1,
              test_parameter: 'working'
            });
            
            console.log('✅ Test event sent - check GA4 Real-time in 2-3 minutes');
          };
        `}
      </Script>
    </>
  )
}

export default GoogleAnalytics