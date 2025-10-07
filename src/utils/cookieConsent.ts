// Cookie consent utility functions
export type ConsentLevel = 'all' | 'necessary' | 'declined' | null;

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const CONSENT_COOKIE_NAME = 'da-orbit-cookie-consent';
const PREFERENCES_COOKIE_NAME = 'da-orbit-cookie-preferences';

// Default cookie preferences
export const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true, cannot be disabled
  analytics: false,
  marketing: false,
  preferences: false,
};

// Get cookie consent status
export const getConsentStatus = (): ConsentLevel => {
  if (typeof window === 'undefined') return null;
  
  const consent = localStorage.getItem(CONSENT_COOKIE_NAME);
  return consent as ConsentLevel;
};

// Get cookie preferences
export const getCookiePreferences = (): CookiePreferences => {
  if (typeof window === 'undefined') return defaultPreferences;
  
  const preferences = localStorage.getItem(PREFERENCES_COOKIE_NAME);
  if (preferences) {
    try {
      return { ...defaultPreferences, ...JSON.parse(preferences) };
    } catch {
      return defaultPreferences;
    }
  }
  return defaultPreferences;
};

// Set cookie consent
export const setConsentStatus = (consent: ConsentLevel): void => {
  if (typeof window === 'undefined') return;
  
  if (consent) {
    localStorage.setItem(CONSENT_COOKIE_NAME, consent);
  } else {
    localStorage.removeItem(CONSENT_COOKIE_NAME);
  }
};

// Set cookie preferences
export const setCookiePreferences = (preferences: CookiePreferences): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(PREFERENCES_COOKIE_NAME, JSON.stringify(preferences));
};

// Accept all cookies
export const acceptAllCookies = (): void => {
  const allPreferences: CookiePreferences = {
    necessary: true,
    analytics: true,
    marketing: true,
    preferences: true,
  };
  
  setConsentStatus('all');
  setCookiePreferences(allPreferences);
  
  // Trigger analytics and other scripts
  triggerConsentScripts(allPreferences);
};

// Accept only necessary cookies
export const acceptNecessaryCookies = (): void => {
  setConsentStatus('necessary');
  setCookiePreferences(defaultPreferences);
  
  // Trigger only necessary scripts
  triggerConsentScripts(defaultPreferences);
};

// Decline all cookies (except necessary)
export const declineAllCookies = (): void => {
  setConsentStatus('declined');
  setCookiePreferences(defaultPreferences);
  
  // Clean up non-necessary cookies and scripts
  cleanupNonNecessaryCookies();
  triggerConsentScripts(defaultPreferences);
};

// Save custom preferences
export const saveCustomPreferences = (preferences: CookiePreferences): void => {
  const hasAnyOptional = preferences.analytics || preferences.marketing || preferences.preferences;
  const status: ConsentLevel = hasAnyOptional ? 'all' : 'necessary';
  
  setConsentStatus(status);
  setCookiePreferences(preferences);
  triggerConsentScripts(preferences);
};

// Check if consent is required (banner should be shown)
export const isConsentRequired = (): boolean => {
  return getConsentStatus() === null;
};

// Trigger scripts based on consent
const triggerConsentScripts = (preferences: CookiePreferences): void => {
  // Dispatch custom event for analytics and other services
  window.dispatchEvent(new CustomEvent('cookieConsentChanged', {
    detail: preferences
  }));
  
  // Google Analytics consent mode (if using gtag)
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('consent', 'update', {
      analytics_storage: preferences.analytics ? 'granted' : 'denied',
      ad_storage: preferences.marketing ? 'granted' : 'denied',
      ad_user_data: preferences.marketing ? 'granted' : 'denied',
      ad_personalization: preferences.marketing ? 'granted' : 'denied',
      functionality_storage: preferences.preferences ? 'granted' : 'denied',
      personalization_storage: preferences.preferences ? 'granted' : 'denied',
      security_storage: 'granted',
    });
  }
};

// Clean up non-necessary cookies
const cleanupNonNecessaryCookies = (): void => {
  if (typeof window === 'undefined') return;
  
  // List of non-necessary cookies to remove
  const cookiesToRemove = [
    '_ga', '_ga_*', '_gid', '_gat', '_gat_*', // Google Analytics
    '_fbp', '_fbc', // Facebook
    '__utm*', // UTM cookies
    '_hjid', '_hjIncludedInSessionSample', // Hotjar
  ];
  
  cookiesToRemove.forEach(cookieName => {
    if (cookieName.includes('*')) {
      // Handle wildcard cookies
      const prefix = cookieName.replace('*', '');
      document.cookie.split(';').forEach(cookie => {
        const name = cookie.split('=')[0].trim();
        if (name.startsWith(prefix)) {
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
          document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`;
        }
      });
    } else {
      // Handle exact cookie names
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${window.location.hostname}`;
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${window.location.hostname}`;
    }
  });
};

// Reset consent (for testing or user request)
export const resetConsent = (): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem(CONSENT_COOKIE_NAME);
  localStorage.removeItem(PREFERENCES_COOKIE_NAME);
  cleanupNonNecessaryCookies();
};