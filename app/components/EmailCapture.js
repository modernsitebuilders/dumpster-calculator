// app/components/EmailCapture.js
'use client';
import { useState } from 'react';

export default function EmailCapture({ source = 'website' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source })
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        setTimeout(() => setStatus(''), 5000); // Clear success message after 5 seconds
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setStatus('error');
    }
    
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-md p-6 text-white">
      <h3 className="text-xl font-bold mb-2">Stay Updated on Renovation Tips</h3>
      <p className="mb-4 text-blue-100">
        Get helpful guides on dumpster sizing and waste disposal delivered to your inbox
      </p>
      
      <form onSubmit={handleSubmit}>
        <div className="flex gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            disabled={loading}
          />
          <button 
            type="submit" 
            disabled={loading}
            className={`px-6 py-2 font-semibold rounded-lg transition ${
              loading 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-white text-blue-600 hover:bg-gray-100'
            }`}
          >
            {loading ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
      </form>
      
      {status === 'success' && (
        <p className="text-sm text-green-100 mt-3">
          ✓ Thanks for subscribing! You'll receive helpful tips soon.
        </p>
      )}
      
      {status === 'error' && (
        <p className="text-sm text-red-100 mt-3">
          Something went wrong. Please try again later.
        </p>
      )}
      
      <p className="text-xs text-blue-100 mt-2">
        No spam, unsubscribe anytime. Privacy Policy
      </p>
    </div>
  );
}