import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Features } from './Features';
import { ProductShowcase } from './ProductShowcase';
import { Pricing } from './Pricing';
import { Footer } from './Footer';
import { Testimonials } from './Testimonials';
import { AIDemo } from './AIDemo';
import ThankYouPage from './ThankYouPage';
import ThankYouLeadsPage from './ThankYouLeadsPage';
import ThankYouTrialPage from './ThankYouTrialPage';
import NotFoundPage from './NotFoundPage';
import { FreeTrialPage } from './FreeTrialPage'; // Import the new FreeTrialPage

const App: React.FC = () => {
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
        <Navbar onNavigate={scrollToSection} />
        
        <Routes>
          <Route path="/" element={<FreeTrialPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/thank-you-leads" element={<ThankYouLeadsPage />} />
          <Route path="/thank-you-trial" element={<ThankYouTrialPage />} />
          <Route path="/free-trial" element={<FreeTrialPage />} /> {/* New Free Trial Page Route */}
          <Route path="*" element={<NotFoundPage />} /> {/* Catch-all for 404 */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;