import React from 'react';
import { Cookie, Settings, Shield, Eye, BarChart } from 'lucide-react';
import { SEO } from '../components/SEO';

export const CookiePolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Cookie Policy - How We Use Cookies"
        description="Learn about how LifeInsights Blog uses cookies, what types of cookies we use, and how you can manage your cookie preferences."
        keywords={['cookie policy', 'cookies', 'tracking', 'privacy', 'data collection', 'GDPR']}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Header */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-yellow-50 dark:from-gray-800 dark:via-gray-900 dark:to-orange-900 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex p-4 bg-orange-100 dark:bg-orange-900/30 rounded-2xl mb-8">
              <Cookie className="h-12 w-12 text-orange-600 dark:text-orange-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Learn how we use cookies to improve your experience and provide personalized content
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Last updated: January 15, 2024
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              
              {/* What Are Cookies */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                    <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    What Are Cookies?
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device (computer, tablet, or mobile) 
                  when you visit a website. They are widely used to make websites work more efficiently 
                  and to provide information to website owners about how users interact with their sites.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Cookies contain information that is transferred to your device's hard drive. They help 
                  us recognize you when you return to our website and allow us to tailor content to your 
                  needs, speed up your searches, and make your experience more convenient and personal.
                </p>
              </div>

              {/* How We Use Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  How We Use Cookies
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  LifeInsights Blog uses cookies for several purposes to enhance your browsing experience:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Essential Website Functionality:</strong> Enable core features like navigation and access to secure areas</li>
                  <li><strong>User Preferences:</strong> Remember your settings such as theme preference (light/dark mode)</li>
                  <li><strong>Analytics:</strong> Understand how visitors use our website to improve content and user experience</li>
                  <li><strong>Advertising:</strong> Serve relevant advertisements through Google AdSense</li>
                  <li><strong>Performance:</strong> Monitor website performance and loading times</li>
                </ul>
              </div>

              {/* Types of Cookies */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="inline-flex p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mr-4">
                    <Settings className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Types of Cookies We Use
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {/* Essential Cookies */}
                  <div className="border border-gray-200 dark:border-gray-600 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Essential Cookies
                      </h3>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium rounded-full">
                        Always Active
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      These cookies are necessary for the website to function properly. They enable 
                      basic functions like page navigation, access to secure areas, and remember your 
                      consent preferences.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• <code>theme-preference</code> - Remembers your light/dark mode choice</li>
                        <li>• <code>cookie-consent</code> - Stores your cookie consent preferences</li>
                        <li>• <code>session-id</code> - Maintains your session while browsing</li>
                      </ul>
                    </div>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="border border-gray-200 dark:border-gray-600 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Analytics Cookies
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full">
                        Optional
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      These cookies help us understand how visitors interact with our website by 
                      collecting and reporting information anonymously. This helps us improve our 
                      content and user experience.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• <code>_ga</code> - Google Analytics visitor identification</li>
                        <li>• <code>_gid</code> - Google Analytics session identification</li>
                        <li>• <code>_gat</code> - Google Analytics throttling</li>
                      </ul>
                    </div>
                  </div>

                  {/* Advertising Cookies */}
                  <div className="border border-gray-200 dark:border-gray-600 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Advertising Cookies
                      </h3>
                      <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-medium rounded-full">
                        Optional
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      These cookies are used by Google AdSense and other advertising partners to 
                      serve personalized advertisements based on your interests and browsing behavior 
                      across different websites.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• <code>_gcl_au</code> - Google AdSense conversion tracking</li>
                        <li>• <code>IDE</code> - Google DoubleClick advertising</li>
                        <li>• <code>test_cookie</code> - Google advertising functionality test</li>
                      </ul>
                    </div>
                  </div>

                  {/* Performance Cookies */}
                  <div className="border border-gray-200 dark:border-gray-600 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        Performance Cookies
                      </h3>
                      <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium rounded-full">
                        Optional
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      These cookies collect information about how you use our website, such as which 
                      pages you visit most often and if you get error messages. This information 
                      helps us improve website performance.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">Examples:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• <code>performance-metrics</code> - Page loading times</li>
                        <li>• <code>error-tracking</code> - JavaScript error monitoring</li>
                        <li>• <code>user-flow</code> - Navigation pattern analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third-Party Cookies */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Third-Party Cookies
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Some cookies on our website are set by third-party services that appear on our pages. 
                  These services have their own privacy policies and cookie policies:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Google AdSense</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      Used for serving personalized advertisements and measuring ad performance.
                    </p>
                    <a 
                      href="https://policies.google.com/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                      Google Privacy Policy →
                    </a>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Google Analytics</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      Used for website analytics and understanding user behavior.
                    </p>
                    <a 
                      href="https://policies.google.com/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                      Google Analytics Privacy →
                    </a>
                  </div>
                </div>
              </div>

              {/* Managing Cookies */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="inline-flex p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                    <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Managing Your Cookie Preferences
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Cookie Consent Banner
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      When you first visit our website, you'll see a cookie consent banner that allows 
                      you to choose which types of cookies you want to accept. You can:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
                      <li>Accept all cookies for the full website experience</li>
                      <li>Accept only essential cookies for basic functionality</li>
                      <li>Customize your preferences by cookie type</li>
                      <li>Change your preferences at any time</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      Browser Settings
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      You can also control cookies through your browser settings. Most browsers allow you to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
                      <li>View and delete cookies</li>
                      <li>Block cookies from specific websites</li>
                      <li>Block third-party cookies</li>
                      <li>Clear all cookies when you close the browser</li>
                      <li>Set up notifications when cookies are being set</li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                      ⚠️ Important Note
                    </h4>
                    <p className="text-yellow-700 dark:text-yellow-300 text-sm">
                      Disabling certain cookies may affect the functionality of our website. 
                      Essential cookies are required for basic website operation and cannot be disabled.
                    </p>
                  </div>
                </div>
              </div>

              {/* Browser-Specific Instructions */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Browser-Specific Cookie Management
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Google Chrome</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Settings → Privacy and security → Cookies and other site data
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Mozilla Firefox</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Options → Privacy & Security → Cookies and Site Data
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Safari</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Preferences → Privacy → Manage Website Data
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Microsoft Edge</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Settings → Cookies and site permissions → Cookies and site data
                    </p>
                  </div>
                </div>
              </div>

              {/* Data Retention */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Cookie Retention Periods
                </h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-200 dark:border-gray-600 rounded-lg">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Cookie Type</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Retention Period</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Essential</td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Session/1 year</td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Website functionality</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Analytics</td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">2 years</td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Usage statistics</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Advertising</td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">30 days - 2 years</td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Personalized ads</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Performance</td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">1 year</td>
                        <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Site optimization</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Updates to Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Updates to This Cookie Policy
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300">
                  We may update this Cookie Policy from time to time to reflect changes in our 
                  practices or for other operational, legal, or regulatory reasons. We will notify 
                  you of any material changes by posting the updated policy on this page and 
                  updating the "Last updated" date.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Questions About Cookies?
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  If you have any questions about our use of cookies or this Cookie Policy, 
                  please contact us:
                </p>
                
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><strong>Email:</strong> privacy@lifeinsights.blog</p>
                  <p><strong>General Contact:</strong> hello@lifeinsights.blog</p>
                  <p><strong>Website:</strong> lifeinsights.blog</p>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-300 text-sm">
                    <strong>Your Privacy Matters:</strong> We are committed to transparency about 
                    how we use cookies and respect your choices regarding data collection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};