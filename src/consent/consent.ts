export type ConsentCategory = 'necessary' | 'analytics' | 'marketing';

export interface ConsentState {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: number;
}

const STORAGE_KEY = 'cookie-consent-v1';

const defaultConsent: ConsentState = {
  necessary: true,
  analytics: false,
  marketing: false,
  updatedAt: 0,
};

export function getStoredConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    return {
      necessary: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      updatedAt: parsed.updatedAt || Date.now(),
    };
  } catch {
    return null;
  }
}

export function setStoredConsent(partial: Partial<ConsentState>): ConsentState {
  const merged: ConsentState = {
    ...defaultConsent,
    ...getStoredConsent(),
    ...partial,
    necessary: true,
    updatedAt: Date.now(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  window.dispatchEvent(new CustomEvent('consent-updated', { detail: merged }));
  return merged;
}

export function getEffectiveConsent(): ConsentState {
  return getStoredConsent() || defaultConsent;
}

export function hasMarketingConsent(): boolean {
  return getEffectiveConsent().marketing === true;
}

export function hasAnalyticsConsent(): boolean {
  return getEffectiveConsent().analytics === true;
}

