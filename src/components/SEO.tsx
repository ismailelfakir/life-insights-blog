import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedDate?: string;
  modifiedDate?: string;
  author?: string;
  adsenseVerification?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'LifeInsights Blog - Practical Tips for Better Living',
  description = 'Discover practical insights and tips for health, education, lifestyle, and more. Easy-to-understand content that helps you live your best life.',
  keywords = ['lifestyle', 'health', 'education', 'wellness', 'blog', 'tips'],
  image = 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=2',
  url = 'https://lifeinsights.blog',
  type = 'website',
  publishedDate,
  modifiedDate,
  author = 'LifeInsights Blog Team',
  adsenseVerification
}) => {
  const siteName = 'LifeInsights Blog';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={author} />
      
      {/* AdSense verification (when provided) */}
      {adsenseVerification && (
        <meta name="google-adsense-account" content={adsenseVerification} />
      )}
      
      {/* Open Graph tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Article specific tags */}
      {type === 'article' && publishedDate && (
        <meta property="article:published_time" content={publishedDate} />
      )}
      {type === 'article' && modifiedDate && (
        <meta property="article:modified_time" content={modifiedDate} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Structured data for articles */}
      {type === 'article' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "image": image,
            "author": {
              "@type": "Person",
              "name": author
            },
            "publisher": {
              "@type": "Organization",
              "name": siteName,
              "logo": {
                "@type": "ImageObject",
                "url": "https://lifeinsights.blog/logo.png"
              }
            },
            "datePublished": publishedDate,
            "dateModified": modifiedDate || publishedDate,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": url
            }
          })}
        </script>
      )}
      
      {/* Website structured data */}
      {type === 'website' && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": siteName,
            "description": description,
            "url": url,
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${url}/search?q={search_term_string}`,
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      )}
    </Helmet>
  );
};