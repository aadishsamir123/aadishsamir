// Google Analytics and performance monitoring utilities

// Google Analytics 4 setup
export const initializeGA = (measurementId) => {
  if (typeof window !== "undefined" && measurementId) {
    // Load Google Analytics script
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", measurementId, {
      page_title: document.title,
      page_location: window.location.href,
    });

    // Make gtag available globally
    window.gtag = gtag;
  }
};

// Track page views
export const trackPageView = (path, title) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-26LPBXXDME", {
      page_path: path,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, parameters);
  }
};

// Performance monitoring
export const measurePerformance = () => {
  if (typeof window !== "undefined" && "performance" in window) {
    window.addEventListener("load", () => {
      // Measure Core Web Vitals
      import("web-vitals").then(
        ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        }
      );

      // Track performance timing
      const navigation = performance.getEntriesByType("navigation")[0];
      if (navigation) {
        trackEvent("page_load_time", {
          value: navigation.loadEventEnd - navigation.fetchStart,
          metric_name: "page_load_time",
        });
      }
    });
  }
};

// Track scroll depth
export const trackScrollDepth = () => {
  let maxScroll = 0;
  const intervals = [25, 50, 75, 90, 100];
  const tracked = new Set();

  const checkScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.round((scrollTop / docHeight) * 100);

    if (scrollPercent > maxScroll) {
      maxScroll = scrollPercent;

      intervals.forEach((interval) => {
        if (scrollPercent >= interval && !tracked.has(interval)) {
          tracked.add(interval);
          trackEvent("scroll", {
            percent_scrolled: interval,
          });
        }
      });
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", checkScroll, { passive: true });
  }
};
