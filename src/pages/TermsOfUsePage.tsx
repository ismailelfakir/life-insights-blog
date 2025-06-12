import React from 'react';
import { FileText, Scale, AlertTriangle, Users, Shield } from 'lucide-react';
import { SEO } from '../components/SEO';

export const TermsOfUsePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Use - Website Usage Guidelines"
        description="Read our terms of use to understand the rules and guidelines for using LifeInsights Blog. Your rights and responsibilities explained clearly."
        keywords={['terms of use', 'terms of service', 'website rules', 'user agreement', 'legal', 'AdSense compliance']}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-8">
              <Scale className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Terms of Use
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Please read these terms carefully before using our website. 
              By using our site, you agree to these terms.
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
              
              {/* Agreement */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                    <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Agreement to Terms
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  By accessing and using LifeInsights Blog ("the Website"), you accept and agree 
                  to be bound by the terms and provision of this agreement. If you do not agree 
                  to abide by the above, please do not use this service.
                </p>
              </div>

              {/* Use License */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Use License
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Permission is granted to temporarily download one copy of the materials on 
                  LifeInsights Blog for personal, non-commercial transitory viewing only. 
                  This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial)</li>
                  <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
                
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  This license shall automatically terminate if you violate any of these restrictions 
                  and may be terminated by us at any time. Upon terminating your viewing of these 
                  materials or upon the termination of this license, you must destroy any downloaded 
                  materials in your possession whether in electronic or printed format.
                </p>
              </div>

              {/* Acceptable Use */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="inline-flex p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Acceptable Use
                  </h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  You agree to use our website only for lawful purposes and in a way that does not 
                  infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. 
                  Prohibited behavior includes:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Harassing or causing distress or inconvenience to any other user</li>
                  <li>Transmitting obscene or offensive content</li>
                  <li>Disrupting the normal flow of dialogue within our website</li>
                  <li>Using automated systems or software to extract data from our website</li>
                  <li>Attempting to gain unauthorized access to our systems</li>
                  <li>Impersonating any person or entity</li>
                </ul>
              </div>

              {/* Advertising and AdSense Compliance */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="inline-flex p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg mr-4">
                    <Shield className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Advertising and User Responsibilities
                  </h2>
                </div>
                
                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-3">
                    ⚠️ Important Advertising Guidelines
                  </h3>
                  <p className="text-orange-700 dark:text-orange-300">
                    Our website displays advertisements through Google AdSense. By using our website, 
                    you agree to comply with all advertising-related policies and guidelines.
                  </p>
                </div>

                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Prohibited Advertising Activities
                    </h3>
                    <p className="mb-2">You agree NOT to engage in any of the following activities:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Click Fraud:</strong> Clicking on advertisements displayed on our website for any reason other than genuine interest</li>
                      <li><strong>Encouraging Invalid Clicks:</strong> Asking others to click on ads or providing incentives for ad clicks</li>
                      <li><strong>Automated Clicking:</strong> Using bots, scripts, or automated tools to click on advertisements</li>
                      <li><strong>Misleading Users:</strong> Encouraging clicks through deceptive means or false promises</li>
                      <li><strong>Multiple Clicks:</strong> Repeatedly clicking on the same advertisement</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      AdSense Policy Compliance
                    </h3>
                    <p className="mb-2">By using our website, you agree to comply with:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Google AdSense Terms of Service</li>
                      <li>Google AdSense Program Policies</li>
                      <li>All applicable advertising standards and regulations</li>
                    </ul>
                    <p className="mt-3 text-sm">
                      You can review Google's policies at:{' '}
                      <a href="https://support.google.com/adsense/answer/48182" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        Google AdSense Policies
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Consequences of Violations
                    </h3>
                    <p>
                      Violation of these advertising guidelines may result in:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Immediate termination of your access to our website</li>
                      <li>Reporting to Google AdSense for policy violations</li>
                      <li>Legal action for damages caused by fraudulent activity</li>
                      <li>Permanent ban from accessing our services</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Content and Intellectual Property
                </h2>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Our Content
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  All content on this website, including but not limited to text, graphics, logos, 
                  images, and software, is the property of LifeInsights Blog or its content suppliers 
                  and is protected by copyright and other intellectual property laws.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  User-Generated Content
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  If you submit content to our website (such as comments or feedback), you grant us 
                  a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, 
                  and distribute such content. You represent that you own or have the necessary 
                  rights to the content you submit.
                </p>
              </div>

              {/* Privacy and Data */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Privacy and Data Collection
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Your privacy is important to us. By using our website, you acknowledge and agree to:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Our collection and use of data as described in our Privacy Policy</li>
                  <li>The use of cookies and tracking technologies for website functionality and advertising</li>
                  <li>Data sharing with third-party services like Google Analytics and Google AdSense</li>
                  <li>The processing of your data in accordance with applicable privacy laws</li>
                </ul>
                
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  Please review our{' '}
                  <a href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/cookie-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Cookie Policy
                  </a>{' '}
                  for detailed information about our data practices.
                </p>
              </div>

              {/* Disclaimer */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="inline-flex p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg mr-4">
                    <AlertTriangle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Disclaimer
                  </h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  The materials on LifeInsights Blog are provided on an 'as is' basis. LifeInsights Blog 
                  makes no warranties, expressed or implied, and hereby disclaims and negates all other 
                  warranties including without limitation, implied warranties or conditions of merchantability, 
                  fitness for a particular purpose, or non-infringement of intellectual property or other 
                  violation of rights.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300">
                  Further, LifeInsights Blog does not warrant or make any representations concerning the 
                  accuracy, likely results, or reliability of the use of the materials on its website 
                  or otherwise relating to such materials or on any sites linked to this site.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  For detailed disclaimers about health, educational, and other content, please see our{' '}
                  <a href="/disclaimer" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Disclaimer page
                  </a>.
                </p>
              </div>

              {/* Limitations */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Limitations of Liability
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300">
                  In no event shall LifeInsights Blog or its suppliers be liable for any damages 
                  (including, without limitation, damages for loss of data or profit, or due to 
                  business interruption) arising out of the use or inability to use the materials 
                  on LifeInsights Blog's website, even if LifeInsights Blog or a LifeInsights Blog 
                  authorized representative has been notified orally or in writing of the possibility 
                  of such damage. Because some jurisdictions do not allow limitations on implied 
                  warranties, or limitations of liability for consequential or incidental damages, 
                  these limitations may not apply to you.
                </p>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Termination
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We reserve the right to terminate or suspend your access to our website immediately, 
                  without prior notice or liability, for any reason whatsoever, including without 
                  limitation if you breach the Terms.
                </p>
                
                <p className="text-gray-600 dark:text-gray-300">
                  Upon termination, your right to use the website will cease immediately. All provisions 
                  of the Terms which by their nature should survive termination shall survive termination, 
                  including, without limitation, ownership provisions, warranty disclaimers, indemnity, 
                  and limitations of liability.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Governing Law
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300">
                  These terms and conditions are governed by and construed in accordance with the 
                  laws of the United States and you irrevocably submit to the exclusive jurisdiction 
                  of the courts in that state or location.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Changes to Terms
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300">
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting on the website. Your continued use of the website after 
                  any changes constitutes acceptance of the new terms. We encourage you to review 
                  these terms periodically for any updates.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  If you have any questions about these Terms of Use, please contact us:
                </p>
                
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><strong>Legal:</strong> legal@lifeinsights.blog</p>
                  <p><strong>General Contact:</strong> hello@lifeinsights.blog</p>
                  <p><strong>Website:</strong> lifeinsights.blog</p>
                </div>
                
                <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-800 dark:text-red-300 text-sm">
                    <strong>Important:</strong> Violation of advertising guidelines or fraudulent 
                    activity will result in immediate account termination and may be reported to 
                    relevant authorities and advertising partners.
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