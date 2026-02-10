import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Models from './components/Models';
import CtaBanner from './components/CtaBanner';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import MarketingScripts from './components/MarketingScripts';
import ModelOverlay from './components/ModelOverlay';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Models />
        <CtaBanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
      <MarketingScripts />
      <ModelOverlay />
    </>
  );
}

export default App;
