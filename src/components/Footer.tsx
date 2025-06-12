import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, MapPin, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">LifeInsights</span>
                <span className="text-sm text-gray-400">Blog</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Discover practical insights and tips for health, education, lifestyle, 
              technology, insurance, and more. Our mission is to provide valuable, 
              easy-to-understand content that helps you live your best life.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-sm">hello@lifeinsights.blog</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/categories" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/disclaimer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/category/health" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Health & Wellness
                </Link>
              </li>
              <li>
                <Link 
                  to="/category/education" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link 
                  to="/category/lifestyle" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link 
                  to="/category/technology" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Technology
                </Link>
              </li>
              <li>
                <Link 
                  to="/category/insurance" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Insurance
                </Link>
              </li>
              <li>
                <Link 
                  to="/category/travel" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Travel
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} LifeInsights Blog. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link 
                to="/privacy-policy" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/cookie-policy" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
              <Link 
                to="/terms-of-use" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Use
              </Link>
              <Link 
                to="/impressum" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Impressum
              </Link>
              <span className="text-gray-400">
                Made with ❤️ for better living
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};