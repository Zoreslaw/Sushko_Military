import { MantineProvider } from '@mantine/core';
import { theme } from './mantine';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Cases from './components/Cases';
import Models from './components/Models';
import ModelOverlay from './components/ModelOverlay';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import MarketingScripts from './components/MarketingScripts';

function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <div className="relative bg-gradient-to-b from-military-dark to-military-green text-white font-sans overflow-x-hidden">
        <Navigation />
        <Hero />
        <Features />
        <HowItWorks />
        <Models />
        <Cases />
        <FAQ />
        <Contact />
        <Footer />
        <CookieConsent />
        <MarketingScripts />
        <ModelOverlay />
      </div>
    </MantineProvider>
  );
}

export default App;
