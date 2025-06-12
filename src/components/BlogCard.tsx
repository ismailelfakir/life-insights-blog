import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types/blog';
import { formatDate } from '../utils/dateUtils';
import { getCategoryColor } from '../utils/categoryUtils';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  const categoryColor = getCategoryColor(post.category);

  if (featured) {
    return (
      <article className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="aspect-w-16 aspect-h-9 lg:aspect-h-10">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
          <div className="flex items-center space-x-4 mb-3">
            <span className={`px-3 py-1 bg-${categoryColor}-500 text-white text-xs font-medium rounded-full`}>
              {post.category}
            </span>
            <div className="flex items-center text-gray-200 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
          
          <Link to={`/blog/${post.slug}`} className="group-hover:text-blue-400 transition-colors">
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 line-clamp-2">
              {post.title}
            </h2>
          </Link>
          
          <p className="text-gray-200 mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-10 w-10 rounded-full mr-3"
              />
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-gray-200 text-sm">{formatDate(post.publishedDate)}</p>
              </div>
            </div>
            
            <Link
              to={`/blog/${post.slug}`}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              <span className="mr-2">Read More</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-3">
          <span className={`px-2 py-1 bg-${categoryColor}-100 text-${categoryColor}-700 dark:bg-${categoryColor}-900/30 dark:text-${categoryColor}-300 text-xs font-medium rounded-lg`}>
            {post.category}
          </span>
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readingTime} min</span>
          </div>
        </div>
        
        <Link to={`/blog/${post.slug}`} className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-8 w-8 rounded-full mr-2"
            />
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                {post.author.name}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {formatDate(post.publishedDate)}
              </p>
            </div>
          </div>
          
          <Link
            to={`/blog/${post.slug}`}
            className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium"
          >
            <span className="mr-1">Read</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
};