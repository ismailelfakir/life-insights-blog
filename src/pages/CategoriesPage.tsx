import React from 'react';
import { SEO } from '../components/SEO';
import { CategoryCard } from '../components/CategoryCard';
import { categories } from '../data/categories';
import { blogPosts } from '../data/blogPosts';

export const CategoriesPage: React.FC = () => {
  const getCategoryPostCount = (categorySlug: string) => {
    return blogPosts.filter(post => post.category === categorySlug).length;
  };

  return (
    <>
      <SEO
        title="Categories - Explore Topics That Interest You"
        description="Browse our content categories including Health & Wellness, Education, Lifestyle, Technology, and Travel. Find articles tailored to your interests."
        keywords={['categories', 'topics', 'health', 'education', 'lifestyle', 'technology', 'travel']}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Explore Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}Categories
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover content tailored to your interests. From health and wellness to 
              technology and travel, we have something for everyone.
            </p>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  postCount={getCategoryPostCount(category.slug)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              We're always adding new content and categories. Let us know what topics 
              you'd like us to cover next!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Suggest a Topic
            </a>
          </div>
        </section>
      </div>
    </>
  );
};