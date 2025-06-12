import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { HomePage } from './pages/HomePage';
import { BlogPostPage } from './pages/BlogPostPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { CategoryPage } from './pages/CategoryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfUsePage } from './pages/TermsOfUsePage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { ImpressumPage } from './pages/ImpressumPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/categories" element={<CategoriesPage />} />
              <Route path="/category/:slug" element={<CategoryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms-of-use" element={<TermsOfUsePage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              <Route path="/impressum" element={<ImpressumPage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;