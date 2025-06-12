import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found - LifeInsights Blog"
        description="The page you're looking for doesn't exist. Explore our categories or return to the homepage to find helpful content."
        keywords={['404', 'page not found', 'error', 'missing page']}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* 404 Illustration */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-32 h-32 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
              <span className="text-6xl font-bold text-blue-600 dark:text-blue-400">404</span>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Page Not Found
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto">
            Oops! The page you're looking for seems to have wandered off. 
            Don't worry, we'll help you find your way back to great content.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Home className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
            
            <Link
              to="/categories"
              className="inline-flex items-center px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Browse Categories
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Looking for something specific?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Popular Categories */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Popular Categories
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      to="/category/health" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Health & Wellness
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/category/education" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Education
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/category/lifestyle" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Lifestyle
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/category/technology" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Technology
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      to="/about" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/contact" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/privacy-policy" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/disclaimer" 
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Disclaimer
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Search Suggestion */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-center text-gray-500 dark:text-gray-400">
                <Search className="h-5 w-5 mr-2" />
                <span className="text-sm">
                  Try using the search feature in the header to find specific content
                </span>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go back to previous page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};