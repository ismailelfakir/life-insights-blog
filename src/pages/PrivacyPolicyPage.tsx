import React from 'react';
import { Shield, Eye, Lock, UserCheck, Cookie } from 'lucide-react';
import { SEO } from '../components/SEO';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy - How We Protect Your Information"
        description="Learn how LifeInsights Blog collects, uses, and protects your personal information. Our commitment to your privacy explained in simple terms."
        keywords={['privacy policy', 'data protection', 'privacy', 'personal information', 'cookies', 'GDPR', 'AdSense']}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-8">
              <Shield className="h-12 w-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your information.
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
              
              {/* Overview */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                    <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    What This Policy Covers
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  This Privacy Policy describes how LifeInsights Blog ("we," "us," or "our") 
                  collects, uses, and shares information about you when you visit our website, 
                  subscribe to our newsletter, or interact with our content. We are committed 
                  to protecting your privacy and being transparent about our data practices.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Information We Collect
                </h2>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Information You Provide
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300 mb-6">
                  <li><strong>Contact Information:</strong> Name and email address when you contact us or subscribe to our newsletter</li>
                  <li><strong>Communication Content:</strong> Messages you send us through our contact form</li>
                  <li><strong>Feedback:</strong> Comments, suggestions, or other feedback you provide</li>
                  <li><strong>Cookie Preferences:</strong> Your choices regarding cookie consent and preferences</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Information Automatically Collected
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Usage Data:</strong> Pages visited, time spent on site, and navigation patterns</li>
                  <li><strong>Device Information:</strong> Browser type, operating system, and device characteristics</li>
                  <li><strong>Location Data:</strong> General geographic location based on IP address</li>
                  <li><strong>Cookies:</strong> Small data files stored on your device (see Cookies section below)</li>
                  <li><strong>Advertising Data:</strong> Information collected by Google AdSense for personalized advertising</li>
                </ul>
              </div>

              {/* How We Use Information */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="inline-flex p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mr-4">
                    <UserCheck className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    How We Use Your Information
                  </h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We use the information we collect for the following purposes:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Provide Our Services:</strong> Deliver content, respond to inquiries, and improve user experience</li>
                  <li><strong>Communication:</strong> Send newsletters, updates, and respond to your messages</li>
                  <li><strong>Analytics:</strong> Understand how our website is used to improve content and functionality</li>
                  <li><strong>Advertising:</strong> Display relevant advertisements through Google AdSense</li>
                  <li><strong>Legal Compliance:</strong> Comply with applicable laws and protect our rights</li>
                  <li><strong>Security:</strong> Protect against fraud, abuse, and security threats</li>
                </ul>
              </div>

              {/* Google AdSense */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Google AdSense and Advertising
                </h2>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-3">
                    Important Information About Advertising
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300">
                    We use Google AdSense to display advertisements on our website. This service 
                    may collect and use information about your visits to this and other websites 
                    to provide personalized advertisements.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">How Google AdSense Works</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Google AdSense uses cookies and similar technologies to:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                      <li>Show you personalized advertisements based on your interests</li>
                      <li>Measure the effectiveness of advertisements</li>
                      <li>Prevent the same ad from being shown to you repeatedly</li>
                      <li>Detect and prevent invalid clicks and fraudulent activity</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Your Advertising Choices</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      You can control personalized advertising by:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-600 dark:text-gray-300">
                      <li>Visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Google Ads Settings</a></li>
                      <li>Using our cookie consent banner to opt out of advertising cookies</li>
                      <li>Installing browser extensions that block advertising trackers</li>
                      <li>Adjusting your browser settings to block third-party cookies</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Third-Party Vendors</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Google and its partners may use information from your visits to this website 
                      and other websites to provide personalized advertisements on this site and 
                      across the web. For more information about Google's privacy practices, visit 
                      the <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Google Privacy Policy</a>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="inline-flex p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg mr-4">
                    <Cookie className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Cookies and Tracking Technologies
                  </h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We use cookies and similar technologies to enhance your browsing experience. 
                  For detailed information about our cookie practices, please see our{' '}
                  <a href="/cookie-policy" className="text-blue-600 dark:text-blue-400 hover:underline">
                    Cookie Policy
                  </a>.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Essential Cookies</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Required for basic website functionality, such as remembering your theme preference 
                      and cookie consent choices.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Analytics Cookies</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Help us understand how visitors interact with our website to improve user experience. 
                      We use Google Analytics for this purpose.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Advertising Cookies</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Used by Google AdSense to serve personalized advertisements and measure ad performance.
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  You can control cookies through your browser settings or our cookie consent banner. 
                  However, disabling certain cookies may affect website functionality.
                </p>
              </div>

              {/* Information Sharing */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Information Sharing and Disclosure
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share information in the following limited circumstances:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Service Providers:</strong> Trusted third parties who help us operate our website and services (e.g., Google Analytics, Google AdSense)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                  <li><strong>Consent:</strong> When you explicitly consent to sharing your information</li>
                </ul>

                <div className="mt-6 bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Third-Party Services We Use
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li><strong>Google Analytics:</strong> Website analytics and user behavior tracking</li>
                    <li><strong>Google AdSense:</strong> Advertising services and personalized ads</li>
                    <li><strong>Hosting Provider:</strong> Website hosting and content delivery</li>
                  </ul>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                    Each of these services has their own privacy policies governing how they handle your data.
                  </p>
                </div>
              </div>

              {/* Data Security */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="inline-flex p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                    <Lock className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Data Security
                  </h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Secure data transmission using SSL/TLS encryption</li>
                  <li>Regular security assessments and updates</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Secure data storage and backup procedures</li>
                  <li>Regular monitoring for security threats and vulnerabilities</li>
                </ul>
                
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  While we strive to protect your information, no method of transmission over 
                  the internet is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Your Rights and Choices
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  You have the following rights regarding your personal information:
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                  <li><strong>Access:</strong> Request a copy of the personal information we have about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-out:</strong> Unsubscribe from our newsletter at any time</li>
                  <li><strong>Data Portability:</strong> Request your data in a portable format</li>
                  <li><strong>Cookie Control:</strong> Manage your cookie preferences through our consent banner</li>
                  <li><strong>Advertising Opt-out:</strong> Opt out of personalized advertising</li>
                </ul>
                
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  To exercise these rights, please contact us at{' '}
                  <a href="mailto:privacy@lifeinsights.blog" className="text-blue-600 dark:text-blue-400 hover:underline">
                    privacy@lifeinsights.blog
                  </a>
                </p>
              </div>

              {/* GDPR Compliance */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  GDPR Compliance (EU Users)
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  If you are located in the European Union, you have additional rights under the 
                  General Data Protection Regulation (GDPR):
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Legal Basis for Processing</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We process your personal data based on:
                    </p>
                    <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600 dark:text-gray-300">
                      <li><strong>Consent:</strong> For cookies, analytics, and advertising</li>
                      <li><strong>Legitimate Interest:</strong> For website functionality and security</li>
                      <li><strong>Contract Performance:</strong> For newsletter subscriptions</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Data Retention</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      We retain personal data only as long as necessary for the purposes outlined 
                      in this policy or as required by law. You can request deletion at any time.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Right to Lodge a Complaint</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      You have the right to lodge a complaint with your local data protection authority 
                      if you believe we have not handled your personal data appropriately.
                    </p>
                  </div>
                </div>
              </div>

              {/* Children's Privacy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Children's Privacy
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300">
                  Our website is not intended for children under 13 years of age. We do not 
                  knowingly collect personal information from children under 13. If we become 
                  aware that we have collected personal information from a child under 13, 
                  we will take steps to delete such information promptly.
                </p>
              </div>

              {/* International Users */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  International Users
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300">
                  Our website is operated from the United States. If you are accessing our 
                  website from outside the United States, please be aware that your information 
                  may be transferred to, stored, and processed in the United States where our 
                  servers are located and our central database is operated. By using our website, 
                  you consent to this transfer.
                </p>
              </div>

              {/* Changes to Policy */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Changes to This Privacy Policy
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300">
                  We may update this Privacy Policy from time to time. We will notify you of 
                  any material changes by posting the new Privacy Policy on this page and updating 
                  the "Last updated" date. For significant changes, we may also provide additional 
                  notice through our website or email. We encourage you to review this Privacy 
                  Policy periodically for any changes.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Us
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, 
                  please contact us:
                </p>
                
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><strong>Privacy Officer:</strong> privacy@lifeinsights.blog</p>
                  <p><strong>General Contact:</strong> hello@lifeinsights.blog</p>
                  <p><strong>Website:</strong> lifeinsights.blog</p>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-300 text-sm">
                    <strong>Your Privacy Matters:</strong> We are committed to protecting your privacy 
                    and will respond to your inquiries promptly. We typically respond to privacy 
                    requests within 30 days.
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