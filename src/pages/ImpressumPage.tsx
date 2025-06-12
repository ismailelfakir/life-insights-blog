import React from 'react';
import { Building, Mail, MapPin, Phone, Globe } from 'lucide-react';
import { SEO } from '../components/SEO';

export const ImpressumPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Impressum - Legal Information and Contact Details"
        description="Legal information, contact details, and regulatory compliance information for LifeInsights Blog as required by applicable laws."
        keywords={['impressum', 'legal information', 'contact details', 'business information', 'compliance']}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Header */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl mb-8">
              <Building className="h-12 w-12 text-gray-600 dark:text-gray-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Impressum
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Legal information and contact details as required by applicable laws
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Information according to § 5 TMG (Germany) and applicable international regulations
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Website Information */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                      <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Website Information
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Website Name</h3>
                      <p className="text-gray-600 dark:text-gray-300">LifeInsights Blog</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Website URL</h3>
                      <p className="text-gray-600 dark:text-gray-300">https://lifeinsights.blog</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Content Purpose</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Educational blog providing practical insights and tips for health, 
                        education, lifestyle, and technology topics for general audiences.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Responsible for Content */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Responsible for Content
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Content Responsibility (§ 55 Abs. 2 RStV)
                      </h3>
                      <div className="text-gray-600 dark:text-gray-300">
                        <p>LifeInsights Blog Editorial Team</p>
                        <p>Content Director: [Name to be filled]</p>
                        <p>Email: editorial@lifeinsights.blog</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Technical Administration
                      </h3>
                      <div className="text-gray-600 dark:text-gray-300">
                        <p>Technical Director: [Name to be filled]</p>
                        <p>Email: tech@lifeinsights.blog</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="inline-flex p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Contact Information
                    </h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                        General Contact
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
                          <span className="text-gray-600 dark:text-gray-300">hello@lifeinsights.blog</span>
                        </div>
                        <div className="flex items-center">
                          <Phone className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
                          <span className="text-gray-600 dark:text-gray-300">[Phone number to be provided]</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                        Legal and Compliance
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
                          <span className="text-gray-600 dark:text-gray-300">legal@lifeinsights.blog</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
                          <span className="text-gray-600 dark:text-gray-300">privacy@lifeinsights.blog</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Address */}
                <div>
                  <div className="flex items-center mb-6">
                    <div className="inline-flex p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Business Address
                    </h2>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <div className="text-gray-600 dark:text-gray-300">
                      <p className="font-medium mb-2">[Business Name]</p>
                      <p>[Street Address]</p>
                      <p>[City, State/Province, Postal Code]</p>
                      <p>[Country]</p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <strong>Note:</strong> Please fill in actual business address details 
                        as required by your jurisdiction's laws.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Information */}
            <div className="mt-16 space-y-12">
              
              {/* Regulatory Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Regulatory Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Business Registration
                    </h3>
                    <div className="text-gray-600 dark:text-gray-300 space-y-2">
                      <p><strong>Registration Number:</strong> [To be filled if applicable]</p>
                      <p><strong>Tax ID:</strong> [To be filled if applicable]</p>
                      <p><strong>VAT Number:</strong> [To be filled if applicable]</p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Professional Liability
                    </h3>
                    <div className="text-gray-600 dark:text-gray-300 space-y-2">
                      <p><strong>Insurance Provider:</strong> [To be filled if applicable]</p>
                      <p><strong>Coverage Area:</strong> [To be filled if applicable]</p>
                      <p><strong>Policy Number:</strong> [To be filled if applicable]</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dispute Resolution */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Dispute Resolution
                </h2>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
                  <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-3">
                    EU Online Dispute Resolution
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300 mb-3">
                    The European Commission provides a platform for online dispute resolution (ODR): 
                  </p>
                  <a 
                    href="https://ec.europa.eu/consumers/odr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  <p className="text-blue-700 dark:text-blue-300 mt-3 text-sm">
                    We are not willing or obliged to participate in dispute resolution proceedings 
                    before a consumer arbitration board.
                  </p>
                </div>
              </div>

              {/* Liability Disclaimer */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Liability for Content
                </h2>
                
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-gray-600 dark:text-gray-300">
                    As service providers, we are liable for own contents of these websites according 
                    to Sec. 7, Para. 1 German Telemedia Act (TMG). However, according to Sec. 8 to 10 
                    German Telemedia Act (TMG), service providers are not under obligation to monitor 
                    submitted or stored information or to search for circumstances pointing to illegal activity.
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    Legal obligations to removing information or to blocking the use of information 
                    remain unchallenged. In this case, liability is only possible at the time of 
                    knowledge about a specific violation of law. Illegal contents will be removed 
                    immediately at the time we get knowledge of them.
                  </p>
                </div>
              </div>

              {/* Copyright Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Copyright
                </h2>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Contents and compilations published on these websites by the providers are 
                    subject to German copyright laws. Reproduction, editing, distribution as well 
                    as the use of any kind outside the scope of the copyright law require a written 
                    permission of the author or originator.
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    Downloads and copies of these websites are permitted for private use only. 
                    The commercial use of our contents without permission of the originator is prohibited.
                  </p>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This impressum was last updated on January 15, 2024
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
                Please ensure all placeholder information is filled with actual business details 
                as required by your jurisdiction's laws.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};