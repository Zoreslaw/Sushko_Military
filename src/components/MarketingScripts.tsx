import { useEffect, useState } from 'react';
import { hasMarketingConsent } from '../consent/consent';

const MarketingScripts = () => {
  const [enabled, setEnabled] = useState(hasMarketingConsent());

  useEffect(() => {
    const onUpdate = () => setEnabled(hasMarketingConsent());
    window.addEventListener('consent-updated', onUpdate as EventListener);
    return () => window.removeEventListener('consent-updated', onUpdate as EventListener);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    // Place real marketing scripts here guarded by consent
    // const s = document.createElement('script');
    // s.async = true;
    // s.src = 'https://example.com/marketing.js';
    // document.head.appendChild(s);
    // return () => { document.head.removeChild(s); };
  }, [enabled]);

  return null;
};

export default MarketingScripts;

