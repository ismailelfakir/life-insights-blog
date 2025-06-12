import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, Calendar, ArrowLeft, Share2, BookOpen } from 'lucide-react';
import { SEO } from '../components/SEO';
import { BlogCard } from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';
import { formatDate } from '../utils/dateUtils';
import { getCategoryColor } from '../utils/categoryUtils';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Article Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const categoryColor = getCategoryColor(post.category);

  return (
    <>
      <SEO
        title={post.title}
        description={post.seo.metaDescription}
        keywords={post.seo.keywords}
        image={post.featuredImage}
        type="article"
        publishedDate={post.publishedDate}
        author={post.author.name}
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="relative h-96 lg:h-[500px] overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
              <Link
                to="/"
                className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className={`px-3 py-1 bg-${categoryColor}-500 text-white text-sm font-medium rounded-full`}>
                  {post.category}
                </span>
                <div className="flex items-center text-white/80 text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readingTime} min read</span>
                </div>
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-white/90 mb-6 max-w-3xl">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold text-white">{post.author.name}</p>
                    <div className="flex items-center text-white/80 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{formatDate(post.publishedDate)}</span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => navigator.share?.({ title: post.title, url: window.location.href })}
                  className="flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Ad Slot - Top of Article */}
          <div className="ad-slot mb-8 text-center">
            <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8">
              <p className="text-gray-500 dark:text-gray-400 text-sm">Advertisement Space</p>
            </div>
          </div>

          <article className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Ad Slot - Middle of Article */}
          <div className="ad-slot my-12 text-center">
            <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8">
              <p className="text-gray-500 dark:text-gray-400 text-sm">Advertisement Space</p>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <div className="flex items-start space-x-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-16 w-16 rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  About {post.author.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {post.author.name} is a passionate writer who specializes in creating 
                  practical, actionable content that helps readers improve their daily lives. 
                  With years of experience in {post.category}, they bring valuable insights 
                  and expert knowledge to every article.
                </p>
              </div>
            </div>
          </div>

          {/* Ad Slot - Bottom of Article */}
          <div className="ad-slot mt-12 text-center">
            <div className="bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8">
              <p className="text-gray-500 dark:text-gray-400 text-sm">Advertisement Space</p>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center mb-8">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Related Articles
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};