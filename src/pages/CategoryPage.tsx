import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { SEO } from '../components/SEO';
import { BlogCard } from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';
import { categories } from '../data/categories';
import { getCategoryDisplayName, getCategoryIcon } from '../utils/categoryUtils';

export const CategoryPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <div>Category not found</div>;
  }

  const category = categories.find(c => c.slug === slug);
  const categoryPosts = blogPosts.filter(post => post.category === slug);
  const categoryName = getCategoryDisplayName(slug);
  const IconComponent = category ? getCategoryIcon(category.icon) : null;

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Category Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The category you're looking for doesn't exist.
          </p>
          <Link
            to="/categories"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`${categoryName} Articles - LifeInsights Blog`}
        description={`Read our latest ${categoryName.toLowerCase()} articles. ${category.description}`}
        keywords={[slug, categoryName.toLowerCase(), 'articles', 'blog', 'tips']}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Header */}
        <section className="bg-white dark:bg-gray-800 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link
                to="/categories"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Categories
              </Link>
            </div>

            <div className="flex items-center mb-6">
              {IconComponent && (
                <div className={`inline-flex p-4 rounded-xl bg-${category.color}-100 dark:bg-${category.color}-900/30 mr-6`}>
                  <IconComponent className={`h-8 w-8 text-${category.color}-600 dark:text-${category.color}-400`} />
                </div>
              )}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2">
                  {categoryName}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  {category.description}
                </p>
              </div>
            </div>

            <div className="flex items-center text-gray-500 dark:text-gray-400">
              <span className="text-sm">
                {categoryPosts.length} {categoryPosts.length === 1 ? 'article' : 'articles'} available
              </span>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {categoryPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className={`inline-flex p-4 rounded-xl bg-${category.color}-100 dark:bg-${category.color}-900/30 mb-6`}>
                  {IconComponent && (
                    <IconComponent className={`h-12 w-12 text-${category.color}-600 dark:text-${category.color}-400`} />
                  )}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  No Articles Yet
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
                  We're working on adding more {categoryName.toLowerCase()} content. 
                  Check back soon for new articles!
                </p>
                <Link
                  to="/categories"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Explore Other Categories
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};