import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnnouncementStrip } from "./components/layout/AnnouncementStrip";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { ArticlePage } from "./pages/ArticlePage";
import { ArticlesIndexPage } from "./pages/ArticlesIndexPage";
import { CalculatorsPage } from "./pages/CalculatorsPage";
import { ComparePage } from "./pages/ComparePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { AffiliateDisclosurePage } from "./pages/AffiliateDisclosurePage";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage";
import { TermsPage } from "./pages/TermsPage";
import { EditorialPolicyPage } from "./pages/EditorialPolicyPage";
import { CookiePolicyPage } from "./pages/CookiePolicyPage";
import { NotFoundPage } from "./pages/NotFoundPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div
        ref={(el) => {
          if (el) {
            el.style.setProperty("border-radius", "0px", "important");
            el.style.setProperty("border-top-left-radius", "0px", "important");
            el.style.setProperty("border-top-right-radius", "0px", "important");
            el.style.setProperty("border-bottom-left-radius", "0px", "important");
            el.style.setProperty("border-bottom-right-radius", "0px", "important");
          }
        }}
        className="flex flex-col min-h-screen bg-[#F9F8F6] text-[#2C3531] font-sans antialiased selection:bg-[#7A8C7D]/20 selection:text-[#2C3531] rounded-none"
        style={{ borderRadius: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
      >
        <AnnouncementStrip />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            
            {/* Guides / Blog routing */}
            <Route path="/articles" element={<ArticlesIndexPage />} />
            <Route path="/blog" element={<ArticlesIndexPage />} />
            <Route path="/articles/:slug" element={<ArticlePage />} />
            <Route path="/blog/:slug" element={<ArticlePage />} />
            
            {/* Interactive Tools */}
            <Route path="/calculators" element={<CalculatorsPage />} />
            <Route path="/compare" element={<ComparePage />} />
            
            {/* Informational & Legal */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/affiliate-disclosure" element={<AffiliateDisclosurePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/editorial-policy" element={<EditorialPolicyPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            
            {/* 404 Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
