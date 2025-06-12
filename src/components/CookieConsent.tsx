import React, { useState, useEffect } from 'react';
import { X, Cookie, Shield, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieConsent: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('analytics-consent', 'true');
    localStorage.setItem('ads-consent', 'true');
    setShowBanner(false);
    // Initialize tracking scripts here when consent is given
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential-only');
    localStorage.setItem('analytics-consent', 'false');
    localStorage.setItem('ads-consent', 'false');
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    localStorage.setItem('analytics-consent', 'false');
    localStorage.setItem('ads-consent', 'false');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                <Cookie className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Cookie Preferences
              </h3>
            </div>
            <button
              onClick={handleRejectAll}
              className="p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We use cookies to enhance your browsing experience, serve personalized ads or content, 
            and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
          </p>

          {showDetails && (
            <div className="mb-6 space-y-4">
              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">Essential Cookies</h4>
                  <span className="text-sm text-green-600 dark:text-green-400 font-medium">Always Active</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  These cookies are necessary for the website to function and cannot be switched off. 
                  They include your theme preference and basic site functionality.
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">Analytics Cookies</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Optional</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  These cookies help us understand how visitors interact with our website by 
                  collecting and reporting information anonymously.
                </p>
              </div>

              <div className="border border-gray-200 dark:border-gray-600 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900 dark:text-white">Advertising Cookies</h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Optional</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  These cookies are used by Google AdSense to serve personalized advertisements 
                  based on your interests and browsing behavior.
                </p>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleAcceptAll}
              className="flex-1 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={handleAcceptEssential}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center justify-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              <Settings className="h-4 w-4 mr-1" />
              {showDetails ? 'Hide' : 'Details'}
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              Learn more in our{' '}
              <Link to="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link to="/cookie-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
                Cookie Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};