import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  isConsentRequired,
  acceptAllCookies,
  acceptNecessaryCookies,
  declineAllCookies,
  saveCustomPreferences,
  getCookiePreferences,
  CookiePreferences,
  defaultPreferences,
} from "../utils/cookieConsent";

interface CookieConsentBannerProps {
  className?: string;
}

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  className = "",
}) => {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] =
    useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    // Check if consent is required
    setShowBanner(isConsentRequired());
    setPreferences(getCookiePreferences());
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setShowBanner(false);
  };

  const handleDeclineAll = () => {
    declineAllCookies();
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    saveCustomPreferences(preferences);
    setShowBanner(false);
  };

  const handlePreferenceChange = (
    key: keyof CookiePreferences,
    value: boolean
  ) => {
    if (key === "necessary") return; // Necessary cookies cannot be disabled
    setPreferences((prev) => ({ ...prev, [key]: value }));
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <div className={`fixed inset-0 z-50 ${className}`}>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20  "
        />

        {/* Main Banner */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-surface-elevated border-t border-border shadow-2xl rounded-t-2xl"
        >
          <div className="max-w-7xl mx-auto p-4 sm:p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  {/* Cookie Icon */}
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="w-6 h-6 text-amber-500"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      <circle cx="8.5" cy="11.5" r="1" />
                      <circle cx="15.5" cy="9.5" r="1" />
                      <circle cx="12" cy="15" r="1" />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-fg mb-2">
                      We value your privacy
                    </h3>
                    <p className="text-sm text-fg-muted leading-relaxed">
                      We use cookies to enhance your browsing experience, serve
                      personalized content, and analyze our traffic. By clicking
                      "Accept All", you consent to our use of cookies. You can
                      customize your preferences or learn more about our privacy
                      practices in our{" "}
                      <a
                        href="/privacy"
                        className="text-accent hover:text-accent-hover underline font-medium"
                      >
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:flex-shrink-0">
                <button
                  onClick={handleDeclineAll}
                  className="px-4 py-2 text-sm font-medium text-fg-muted bg-surface-subtle hover:text-fg rounded-lg transition-colors duration-200 border border-border cursor-pointer"
                >
                  Decline
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 text-sm font-medium text-accent-fg bg-accent hover:bg-accent-hover rounded-lg transition-colors duration-200 shadow-[var(--shadow-card)] cursor-pointer"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CookieConsentBanner;
