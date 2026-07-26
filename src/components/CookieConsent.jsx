import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Helper functions for cookie management
const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
};

const getCookie = (name) => {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given or declined
    const consent = getCookie("cookie_consent");
    if (!consent) {
      // Delay showing the banner slightly for better entry animation perception
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookie_consent", "accepted", 365);
    setIsVisible(false);
  };

  const handleDecline = () => {
    setCookie("cookie_consent", "declined", 365);
    window["ga-disable-G-26LPBXXDME"] = true;
    setIsVisible(false);
    // Reload page immediately to ensure GA is terminated and doesn't collect further data
    window.location.reload();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="fixed bottom-6 left-6 right-6 md:right-auto md:max-w-md z-50 p-6 rounded-[2rem] glass-panel shadow-2xl flex flex-col gap-4 border"
          style={{
            borderColor: "var(--border-color)",
            backgroundColor: "color-mix(in srgb, var(--bg-secondary) 85%, transparent)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
          }}
          role="dialog"
          aria-label="Cookie consent banner"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
              <span>Cookie Consent</span>
              <span className="text-2xl select-none">🍪</span>
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              We use Google Analytics cookies to understand website traffic and improve your browsing experience. By default, tracking is active, but you can opt out at any time.
            </p>
          </div>
          <div className="flex gap-3 mt-1">
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
              onClick={handleDecline}
              className="flex-1 py-2.5 px-5 rounded-full font-semibold border text-sm transition-all cursor-pointer text-center duration-200"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
                backgroundColor: "transparent",
              }}
            >
              Decline
            </motion.button>
            <motion.button
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.98 }}
              onClick={handleAccept}
              className="flex-1 py-2.5 px-5 rounded-full font-semibold text-sm transition-all cursor-pointer text-center text-white duration-200 shadow-md hover:shadow-lg"
              style={{
                backgroundColor: "var(--color-blue)",
              }}
            >
              Accept
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
