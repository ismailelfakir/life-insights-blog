import React from 'react';
import { Link } from 'react-router-dom';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Category } from '../types/blog';
import { getCategoryIcon } from '../utils/categoryUtils';

interface CategoryCardProps {
  category: Category;
  postCount: number;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, postCount }) => {
  const IconComponent = getCategoryIcon(category.icon) as LucideIcon;

  return (
    <Link
      to={`/category/${category.slug}`}
      className="group block bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:-translate-y-1"
    >
      <div className={`inline-flex p-3 rounded-lg bg-${category.color}-100 dark:bg-${category.color}-900/30 mb-4 group-hover:scale-110 transition-transform`}>
        <IconComponent className={`h-6 w-6 text-${category.color}-600 dark:text-${category.color}-400`} />
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {category.name}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {category.description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {postCount} {postCount === 1 ? 'article' : 'articles'}
        </span>
        
        <span className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
          Explore →
        </span>
      </div>
    </Link>
  );
};