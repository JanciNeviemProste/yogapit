"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [optionalCookies, setOptionalCookies] = useState(true);

  useEffect(() => {
    // Skontroluj či už užívateľ súhlasil
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
    setShowSettings(false);
  };

  const handleSaveSettings = () => {
    const consent = optionalCookies ? "accepted-optional" : "essential-only";
    localStorage.setItem("cookie-consent", consent);
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {!showSettings ? (
            // Hlavný banner
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="flex-1 text-center lg:text-left">
                <p className="text-white text-sm sm:text-base">
                  Používame cookies, aby sme vám poskytli čo najlepší zážitok z našej webovej stránky.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={handleDecline}
                  className="px-6 py-2 text-white hover:text-primary transition-colors duration-300 text-sm font-medium"
                >
                  Odmietnuť
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 text-sm font-medium"
                >
                  Nastavenia
                </button>
                <button
                  onClick={handleAccept}
                  className="px-8 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all duration-300 text-sm font-semibold"
                >
                  Súhlasím
                </button>
              </div>
            </div>
          ) : (
            // Nastavenia cookies
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-white text-lg font-semibold">Nastavenia cookies</h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Zavrieť nastavenia"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Nutné cookies */}
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium mb-1">Nevyhnutné cookies</h4>
                    <p className="text-gray-400 text-sm">Tieto cookies su potrebné pre fungovanie stránky.</p>
                  </div>
                  <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm font-medium">
                    Vždy aktívne
                  </div>
                </div>
              </div>

              {/* Voliteľné cookies */}
              <div className="bg-white/5 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium mb-1">Voliteľné cookies</h4>
                    <p className="text-gray-400 text-sm">Analytické a marketingové cookies.</p>
                  </div>
                  <button
                    onClick={() => setOptionalCookies(!optionalCookies)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      optionalCookies ? "bg-primary" : "bg-gray-600"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        optionalCookies ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Tlačidlá */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={handleAccept}
                  className="w-full sm:w-auto px-8 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 text-sm font-medium"
                >
                  Povoliť všetko
                </button>
                <button
                  onClick={handleSaveSettings}
                  className="w-full sm:w-auto px-8 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition-all duration-300 text-sm font-semibold"
                >
                  Uložiť zmeny
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
