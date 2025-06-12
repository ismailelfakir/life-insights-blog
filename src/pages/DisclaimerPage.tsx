import React from 'react';
import { AlertTriangle, Heart, BookOpen, Shield, Info } from 'lucide-react';
import { SEO } from '../components/SEO';

export const DisclaimerPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Disclaimer - Important Information About Our Content"
        description="Important disclaimers about health, educational, and general content on LifeInsights Blog. Please read before using our advice and recommendations."
        keywords={['disclaimer', 'health disclaimer', 'medical advice', 'educational content', 'liability']}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Header */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-gray-800 dark:via-gray-900 dark:to-orange-900 py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex p-4 bg-orange-100 dark:bg-orange-900/30 rounded-2xl mb-8">
              <AlertTriangle className="h-12 w-12 text-orange-600 dark:text-orange-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Disclaimer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Important information about the content and advice provided on LifeInsights Blog. 
              Please read carefully before using our recommendations.
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
              
              {/* General Disclaimer */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                    <Info className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    General Information Disclaimer
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  The information provided on LifeInsights Blog is for general informational and 
                  educational purposes only. While we strive to provide accurate, up-to-date, and 
                  helpful content, we make no representations or warranties of any kind, express 
                  or implied, about the completeness, accuracy, reliability, suitability, or 
                  availability of the information contained on this website.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Any reliance you place on such information is strictly at your own risk. We 
                  disclaim any liability for any loss or damage including without limitation, 
                  indirect or consequential loss or damage, or any loss or damage whatsoever 
                  arising from loss of data or profits arising out of, or in connection with, 
                  the use of this website.
                </p>
              </div>

              {/* Health and Medical Disclaimer */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="inline-flex p-3 bg-red-100 dark:bg-red-900/30 rounded-lg mr-4">
                    <Heart className="h-6 w-6 text-red-600 dark:text-red-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Health and Medical Disclaimer
                  </h2>
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 mb-6">
                  <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-3">
                    ⚠️ Important Medical Notice
                  </h3>
                  <p className="text-red-700 dark:text-red-300 font-medium">
                    The health and wellness information on this website is NOT intended as medical 
                    advice and should NOT be used as a substitute for professional medical care.
                  </p>
                </div>

                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <strong>Not Medical Advice:</strong> The health-related content on LifeInsights Blog, 
                    including articles about nutrition, exercise, mental health, and wellness, is provided 
                    for educational and informational purposes only. This content is not intended to 
                    diagnose, treat, cure, or prevent any disease or health condition.
                  </p>
                  
                  <p>
                    <strong>Consult Healthcare Professionals:</strong> Always seek the advice of your 
                    physician or other qualified healthcare provider with any questions you may have 
                    regarding a medical condition, treatment, or health concern. Never disregard 
                    professional medical advice or delay in seeking it because of something you have 
                    read on this website.
                  </p>
                  
                  <p>
                    <strong>Individual Results May Vary:</strong> Health and wellness strategies that 
                    work for one person may not work for another. Individual results will vary based 
                    on personal circumstances, health conditions, lifestyle factors, and adherence 
                    to recommendations.
                  </p>
                  
                  <p>
                    <strong>Emergency Situations:</strong> If you think you may have a medical emergency, 
                    call your doctor or emergency services immediately. Do not rely on information 
                    from this website in emergency situations.
                  </p>
                  
                  <p>
                    <strong>Dietary and Supplement Information:</strong> Nutritional advice and supplement 
                    recommendations are general in nature and may not be appropriate for your specific 
                    health needs. Consult with a registered dietitian or healthcare provider before 
                    making significant dietary changes or starting new supplements.
                  </p>
                </div>
              </div>

              {/* Educational Content Disclaimer */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Educational Content Disclaimer
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <strong>General Educational Purpose:</strong> Educational content on LifeInsights Blog 
                    is designed to provide general information about learning strategies, study techniques, 
                    and educational resources. This content is not intended to replace formal education, 
                    professional tutoring, or specialized educational services.
                  </p>
                  
                  <p>
                    <strong>Not Professional Educational Advice:</strong> While our educational content 
                    is researched and well-intentioned, it should not be considered professional 
                    educational or psychological advice. For specific learning difficulties, educational 
                    planning, or academic concerns, consult with qualified educational professionals.
                  </p>
                  
                  <p>
                    <strong>Age and Individual Appropriateness:</strong> Educational strategies and 
                    techniques may not be suitable for all ages, learning styles, or individual 
                    circumstances. Parents, educators, and learners should use their judgment in 
                    applying any educational advice.
                  </p>
                </div>
              </div>

              {/* Technology and Product Recommendations */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Technology and Product Recommendations
                </h2>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <strong>Product Reviews and Recommendations:</strong> Technology reviews, product 
                    recommendations, and affiliate links are based on our research and experience. 
                    However, individual needs, preferences, and experiences may vary significantly.
                  </p>
                  
                  <p>
                    <strong>Affiliate Relationships:</strong> Some links on this website may be affiliate 
                    links, meaning we may earn a commission if you make a purchase through these links. 
                    This does not affect the price you pay or our editorial independence. We only 
                    recommend products we believe provide value to our readers.
                  </p>
                  
                  <p>
                    <strong>Technology Changes:</strong> Technology information, software recommendations, 
                    and digital tools mentioned on this website may become outdated as technology evolves. 
                    Always verify current information and compatibility before making technology decisions.
                  </p>
                </div>
              </div>

              {/* Lifestyle and Personal Development */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Lifestyle and Personal Development
                </h2>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <strong>Personal Development Advice:</strong> Lifestyle tips, personal development 
                    strategies, and self-improvement advice are based on general principles and research. 
                    Individual circumstances, personality types, and life situations vary greatly.
                  </p>
                  
                  <p>
                    <strong>Financial Implications:</strong> Some lifestyle recommendations may have 
                    financial implications. Always consider your personal financial situation and 
                    consult with financial advisors for significant financial decisions.
                  </p>
                  
                  <p>
                    <strong>Mental Health Considerations:</strong> While we may discuss stress management, 
                    mindfulness, and general well-being topics, this content is not a substitute for 
                    professional mental health services. If you're experiencing mental health challenges, 
                    please seek help from qualified mental health professionals.
                  </p>
                </div>
              </div>

              {/* External Links and Third-Party Content */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  External Links and Third-Party Content
                </h2>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    <strong>External Website Links:</strong> Our website may contain links to external 
                    websites that are not provided or maintained by LifeInsights Blog. We do not 
                    guarantee the accuracy, relevance, timeliness, or completeness of any information 
                    on these external websites.
                  </p>
                  
                  <p>
                    <strong>Third-Party Opinions:</strong> Any opinions, advice, statements, or other 
                    information expressed by third parties, whether in guest posts, comments, or 
                    linked content, are those of the respective authors and not of LifeInsights Blog.
                  </p>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <div className="flex items-center mb-6">
                  <div className="inline-flex p-3 bg-gray-100 dark:bg-gray-800 rounded-lg mr-4">
                    <Shield className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Limitation of Liability
                  </h2>
                </div>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    LifeInsights Blog, its authors, contributors, and affiliates shall not be liable 
                    for any direct, indirect, incidental, consequential, or punitive damages arising 
                    out of your access to or use of the website or any content therein.
                  </p>
                  
                  <p>
                    This includes, but is not limited to, personal injury, property damage, lost 
                    profits, or any other damages resulting from:
                  </p>
                  
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Use or inability to use the website or its content</li>
                    <li>Reliance on any information provided on the website</li>
                    <li>Errors or omissions in the content</li>
                    <li>Any unauthorized access to or use of our servers</li>
                    <li>Any interruption or cessation of transmission to or from the website</li>
                  </ul>
                </div>
              </div>

              {/* Updates and Changes */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Updates and Changes
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300">
                  We reserve the right to update, modify, or remove any content on this website 
                  at any time without notice. This disclaimer may also be updated periodically. 
                  Your continued use of the website after any changes constitutes acceptance of 
                  the updated disclaimer.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Questions About This Disclaimer
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  If you have any questions about this disclaimer or need clarification about 
                  any content on our website, please contact us:
                </p>
                
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <p><strong>Email:</strong> legal@lifeinsights.blog</p>
                  <p><strong>General Contact:</strong> hello@lifeinsights.blog</p>
                  <p><strong>Website:</strong> lifeinsights.blog</p>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <p className="text-blue-800 dark:text-blue-300 text-sm">
                    <strong>Remember:</strong> When in doubt about health, educational, or personal 
                    matters, always consult with qualified professionals who can provide personalized 
                    advice based on your specific circumstances.
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