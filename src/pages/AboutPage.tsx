import React from 'react';
import { Heart, Users, Target, Award, BookOpen, Lightbulb } from 'lucide-react';
import { SEO } from '../components/SEO';

export const AboutPage: React.FC = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Health & Wellness Expert',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      description: 'Certified nutritionist with 8+ years of experience helping people live healthier lives.'
    },
    {
      name: 'Michael Chen',
      role: 'Education Specialist',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      description: 'Former teacher and educational consultant passionate about effective learning strategies.'
    },
    {
      name: 'Lisa Thompson',
      role: 'Lifestyle & Mindfulness Coach',
      image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      description: 'Certified mindfulness instructor helping people find balance in busy modern life.'
    },
    {
      name: 'David Park',
      role: 'Technology Advisor',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=2',
      description: 'Tech expert who makes complex technology simple and accessible for everyone.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'People-First Approach',
      description: 'We put our readers first, creating content that genuinely helps improve lives.'
    },
    {
      icon: BookOpen,
      title: 'Quality Content',
      description: 'Every article is thoroughly researched, fact-checked, and written with care.'
    },
    {
      icon: Lightbulb,
      title: 'Practical Insights',
      description: 'We focus on actionable advice that you can implement in your daily life.'
    },
    {
      icon: Users,
      title: 'Inclusive Community',
      description: 'Our content is designed to be accessible and valuable for everyone.'
    }
  ];

  return (
    <>
      <SEO
        title="About Us - Meet the LifeInsights Team"
        description="Learn about our mission to provide practical, accessible content that helps you live better. Meet our expert team and discover our values."
        keywords={['about us', 'team', 'mission', 'values', 'blog team', 'experts']}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}LifeInsights
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              We're passionate about creating content that makes a real difference in people's lives. 
              Our mission is simple: provide practical, accessible insights that help you live better.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-8">
                <Target className="h-12 w-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                In a world overflowing with information, we believe in the power of clarity and simplicity. 
                Our goal is to cut through the noise and deliver practical, evidence-based insights that 
                anyone can understand and apply. We're not here to overwhelm you with jargon or complicated 
                theories – we're here to help you make positive changes in your daily life, one article at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                These principles guide everything we do, from the topics we choose to cover 
                to the way we present information.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together years of experience in health, 
                education, lifestyle, and technology to create content that truly matters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-24 w-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Impact
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We're proud of the community we've built and the positive impact we've made.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</div>
                <div className="text-gray-600 dark:text-gray-400">Published Articles</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">5K+</div>
                <div className="text-gray-600 dark:text-gray-400">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">95%</div>
                <div className="text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">4.9★</div>
                <div className="text-gray-600 dark:text-gray-400">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Be part of a community that values practical wisdom, continuous learning, 
              and positive change. Let's grow together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="/"
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore Articles
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};