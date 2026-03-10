import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = () => {
  const [spinnerIndex, setSpinnerIndex] = useState(0);
  const spinnerFrames = [".", "..", "..."];
  const spinnerFrameCount = spinnerFrames.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setSpinnerIndex((prev) => (prev + 1) % spinnerFrameCount);
    }, 250);

    return () => clearInterval(interval);
  }, [spinnerFrameCount]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[var(--bg-primary)] px-6 text-[var(--text-primary)]"
      >
        <div className="text-center space-y-5">
          <div
            className="text-5xl font-extrabold tracking-tight sm:text-6xl"
            style={{ color: "var(--color-blue)" }}
          >
            Loading{spinnerFrames[spinnerIndex]}
          </div>

          <p className="text-lg" style={{ color: "var(--text-muted)" }}>
            Preparing the site for you.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3">
            <motion.div
              className="h-2 w-52 overflow-hidden rounded-full"
              style={{ backgroundColor: "var(--bg-secondary)" }}
            >
              <motion.div
                className="h-full"
                style={{ backgroundColor: "var(--color-blue)" }}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 0.8,
                  ease: "linear",
                }}
              />
            </motion.div>
            <p className="text-sm text-[var(--text-muted)]">
              One moment while everything loads.
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
