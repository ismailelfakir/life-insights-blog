import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, BookOpen, Star } from 'lucide-react';
import { BlogCard } from '../components/BlogCard';
import { CategoryCard } from '../components/CategoryCard';
import { SEO } from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import { categories } from '../data/categories';

export const HomePage: React.FC = () => {
  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1, 5);
  const topCategories = categories.slice(0, 4);

  const getCategoryPostCount = (categorySlug: string) => {
    return blogPosts.filter(post => post.category === categorySlug).length;
  };

  return (
    <>
      <SEO />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Discover Insights for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {' '}Better Living
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Practical tips, expert advice, and inspiring stories to help you live 
                healthier, learn better, and enjoy life more fully.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/categories"
                  className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  <span>Explore Categories</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-3">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">20+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Articles</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg mb-3">
                  <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">5K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Readers</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-3">
                  <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">95%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg mb-3">
                  <Star className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">4.9</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Featured Article
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our most popular and impactful content
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <BlogCard post={featuredPost} featured={true} />
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Latest Articles
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Fresh insights and practical tips
                </p>
              </div>
              <Link
                to="/blog"
                className="hidden sm:flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
              >
                <span>View All Articles</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {recentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            <div className="text-center mt-12 sm:hidden">
              <Link
                to="/blog"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>View All Articles</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Explore Categories
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Find content that matches your interests
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {topCategories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  postCount={getCategoryPostCount(category.slug)}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link
                to="/categories"
                className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
              >
                <span>View All Categories</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get practical tips and inspiring content delivered to your inbox weekly
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-4 focus:ring-blue-300 focus:outline-none"
              />
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              No spam, unsubscribe at any time
            </p>
          </div>
        </section>
      </div>
    </>
  );
};