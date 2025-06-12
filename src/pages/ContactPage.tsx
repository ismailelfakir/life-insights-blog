import React, { useState } from 'react';
import { Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <>
        <SEO
          title="Thank You - Message Sent Successfully"
          description="Thank you for contacting LifeInsights Blog. We've received your message and will get back to you soon."
        />
        
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <div className="max-w-md w-full mx-auto px-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl text-center">
              <div className="inline-flex p-4 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Message Sent Successfully!
              </h1>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Thank you for reaching out to us. We've received your message and will 
                get back to you within 24 hours.
              </p>
              
              <div className="space-y-3">
                <a
                  href="/"
                  className="block w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Back to Home
                </a>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="block w-full px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Contact Us - Get in Touch with LifeInsights"
        description="Have a question, suggestion, or just want to say hello? Contact the LifeInsights team. We'd love to hear from you!"
        keywords={['contact', 'get in touch', 'questions', 'feedback', 'support']}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}Touch
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              We'd love to hear from you! Whether you have a question, suggestion, 
              or just want to say hello, don't hesitate to reach out.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Let's Start a Conversation
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Email Us
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Send us an email and we'll respond within 24 hours.
                      </p>
                      <a 
                        href="mailto:hello@lifeinsights.blog"
                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                      >
                        hello@lifeinsights.blog
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="inline-flex p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <MessageCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        Quick Response
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Use the form on the right for the fastest response to your inquiry.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    What can we help you with?
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Questions about our articles</li>
                    <li>• Topic suggestions</li>
                    <li>• Partnership inquiries</li>
                    <li>• General feedback</li>
                    <li>• Technical issues</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="article">Article Question</option>
                      <option value="suggestion">Topic Suggestion</option>
                      <option value="partnership">Partnership</option>
                      <option value="technical">Technical Issue</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4  py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </div>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};